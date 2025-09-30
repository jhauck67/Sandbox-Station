// VARIABLES                                     
//*--------- méta-données du snippet ------------
const id = document.getElementById('id');
let currentCounter;
const snippetName = document.getElementById('name');
const snippetLanguage = document.getElementById('language');
const snippetDate = document.getElementById('date');
const snippetCategory = document.getElementById('category');
const snippetScreenshot = document.getElementById('screenshot');

//*------------ source du snippet ---------------
const snippetSourceTitle = document.getElementById('source-title');
const snippetSourceLink = document.getElementById('source-link');

//*------------- code du snippet ----------------
const snippetHTML = document.getElementById('html-code');
const snippetCSS = document.getElementById('css-code');
const snippetJS = document.getElementById('js-code');

//*----------------- buttons --------------------
const checkSnippetBtn = document.getElementById('checkSnippetBtn');
const generateJsonBtn = document.getElementById('generateJsonBtn');
const resetFormBtn = document.getElementById('resetFormBtn');

//*----------------- iframe --------------------
const iframeView = document.getElementById('view-code');

//*--------------- Objet JSON -------------------
const objectJsonView = document.getElementById('object-json-view');


// FUNCTIONS                                     
//*----------- génération de l'id ---------------
const generateId = () => {
    // 1. Tente de récupérer la valeur stockée (qui est une chaîne de caractères ou null)
    let storedId = localStorage.getItem("currentCounter"); 
    
    // 2. Vérification et Initialisation (si c'est la première fois que l'on charge)
    if (storedId === null || isNaN(parseInt(storedId, 10))) {
        // Si rien n'est stocké (null), on commence à 1
        currentCounter = 1;
        // On initialise aussi le localStorage pour la première fois
        localStorage.setItem("currentCounter", "1");
    } else {
        // Sinon, on convertit la CHAÎNE de caractères stockée en NOMBRE entier
        currentCounter = parseInt(storedId, 10);
    }

    // 3. Formatage et affichage dans le champ (toujours à partir de currentCounter)
    const idNumber = currentCounter.toString().padStart(3, '0');
    id.value = idNumber;
};
generateId();

//*--------------- reset form -------------------
const resetForm = () => {
    snippetName.value = ""; 
    snippetLanguage.value = ""; 
    snippetDate.value = ""; 
    snippetCategory.value = ""; 
    snippetScreenshot.value = ""; 
    snippetSourceTitle.value = ""; 
    snippetSourceLink.value = ""; 
    
    snippetHTML.value = ""; 
    snippetCSS.value = ""; 
    snippetJS.value = ""; 
    
    objectJsonView.value = ""; 
    iframeView.removeAttribute('srcdoc'); // Vider l'iframe
};

// EVENT LISTENER                                
// Au click, génère l'iframe du code.
checkSnippetBtn.addEventListener('click', () => {
    iframeView.setAttribute('srcdoc', `
<!DOCTYPE html>
<html>
    <head>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                width: 100dvw;
                height: 100dvh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            ${snippetCSS.value}
        </style>
    </head>
    <body>
        ${snippetHTML.value}
        <script>
            ${snippetJS.value}
        </script>
    </body>
</html>
`);
});

// Au click, génère l'objet json prêt à coller.
generateJsonBtn.addEventListener('click', () => {
    const jsonHtmlCode = JSON.stringify(snippetHTML.value);
    const jsonCssCode = JSON.stringify(snippetCSS.value);
    const jsonJsCode = JSON.stringify(snippetJS.value);
    const jsonObject = `
        {
            "id": "${id.value}",
            "snippetName": "${snippetName.value}",
            "snippetLanguage": "${snippetLanguage.value}",
            "snippetDate": "${snippetDate.value}",
            "snippetCategory": "${snippetCategory.value}",
            "snippetScreenshot": "${snippetScreenshot.value}",
            "snippetSourceTitle" : "${snippetSourceTitle.value}",
            "snippetSourceLink" : "${snippetSourceLink.value}",
            "snippetHTML" : ${jsonHtmlCode},
            "snippetCSS" : ${jsonCssCode},
            "snippetJS" : ${jsonJsCode}
        }
    `;
    objectJsonView.value = `${jsonObject}`;
    navigator.clipboard.writeText(jsonObject)
        .then(() => {
            console.log("Code copié");
            generateJsonBtn.textContent = "✅ Copié";
            setTimeout(() => {
                generateJsonBtn.textContent = "Générer l'objet JSON";
                resetForm();
                currentCounter++;
                localStorage.setItem("currentCounter", currentCounter.toString());
                generateId();
            }, 3000);
        })
        .catch(err => {
            console.error('Erreur lors de la copie', err);
            alert('Désolé, la copie a échoué. Veuillez selectionner le code manuellement');
        });
});

resetFormBtn.addEventListener('click', () => {
    resetForm();
});
