// VARIABLES                                     
const toggleButton = document.getElementById('toggle-json');
const submitButton = document.getElementById('submit-btn');
const resetButton = document.getElementById('reset-btn');
const textArea = document.getElementById('target');

// EVENT LISTENER                                
//*-------------- Toggle Button -----------------
toggleButton.addEventListener('click', () => {
    textArea.classList.toggle('parse');
    if(textArea.classList.contains('parse')) {
        textArea.setAttribute('placeholder', "Coller votre chaîne de caractère JSON ici.");
        submitButton.textContent = "Parse JSON";
    } else {
        textArea.setAttribute('placeholder', "Coller votre code ici.");
        submitButton.textContent = "Stringify JSON";
    }
});


//*---------- JSON Stringify/Parse --------------
// Au click, convertit le code en string pour JSON et le copie dans le presse papier.
submitButton.addEventListener('click', () => {
    // On vérifie s'il y a quelque chose dans la textarea
    if(!textArea.value) {
        alert('❌ Veuillez insérer du code dans la fenêtre !');
        return;
    };
    // On récupère la valeur de la textarea
    const inputCode = textArea.value;
    // On convertit le code en string JSON ou la string JSON en code
    let outputCode;
    if(textArea.classList.contains('parse')) {
        outputCode = JSON.parse(inputCode);
    } else {
        outputCode = JSON.stringify(inputCode);
    };
    // On l'affiche dans la textarea
    textArea.value = outputCode;
    // On copie la nouvelle valeur dans le presse papier
    navigator.clipboard.writeText(outputCode)
        .then(() => {
            console.log('Code copié');
            submitButton.textContent = "Copié";
            setTimeout(() => {
                submitButton.textContent = "Convertir en chaîne JSON";
            }, 2000);
        })
        .catch(err => {
            console.error('Erreur lors de la copie', err);
            alert('Désolé, la copie a échoué. Veuillez selectionner le code manuellement');
        });
});

// Au click, réinitialise la textarea.
resetButton.addEventListener('click', () => {
    textArea.value = "";
})