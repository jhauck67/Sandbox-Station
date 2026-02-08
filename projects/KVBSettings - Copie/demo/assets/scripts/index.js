// Variables                                     
// Variable : Données des inputs
const indiceCompo = document.getElementById('indiceCompo');
const masseTotale = document.getElementById('masseTotaleInput');
const MFR = document.getElementById('MFRInput');
const longueur = document.getElementById('longueurInput');

// Variable : Submit Button
const subBtn = document.getElementById('subBtn');

// Variable : Affichage du résultat
const trainClass = document.getElementById('trainClass');
const trainSpeed = document.getElementById('trainSpeed');
const trainLength = document.getElementById('trainLength');
const trainCoef = document.getElementById('trainCoef');

// Functions                                     
// Function : Réinitialisation
const init = () => {
    trainClass.textContent = '';
    trainSpeed.textContent = '';
    trainLength.textContent = '';
    trainCoef.textContent = '';
};

// Function : Trouver le coefficient de décélération pour la classe "Marchandise"
const coefMAFunction = () => {
    // On transforme la valeur de masse totale en nombre 
    const masseTotaleValue = parseInt(masseTotale.value);
    // On recherche la ligne correspondante
    const lign = coefMA.find((ligne) =>
        masseTotaleValue >= ligne.masseMin &&
        masseTotaleValue <= ligne.masseMax
    );
    // On compare la MRF indiquée avec le tableau MFRref
    const MFRValue = parseInt(MFR.value);
    const index = lign.MFRref.findLastIndex((colonne) =>
        MFRValue >= colonne
    );
    // On applique la valeur de l'index au tableau de coef de décélération coefKVB
    trainCoef.textContent = coefKVBMA[index];
};

// Function : Check de l'indice de composition
const checkIndice = () => {
    lengthTransform()
    switch (indiceCompo.value) {
        case 'MA100':
            trainClass.textContent = 'MA';
            trainSpeed.textContent = '10';
            coefMAFunction();
            break;
        case 'MA90':
            trainClass.textContent = 'MA';
            trainSpeed.textContent = '09';
            coefMAFunction();
            break;
        case 'MA80':
            trainClass.textContent = 'MA';
            trainSpeed.textContent = '08';
            coefMAFunction();
            break;
        case 'HLP':
            trainClass.textContent = 'ME';
            trainSpeed.textContent = '10';
            trainLength.textContent = '0';
            trainCoef.textContent = '057';
            break;
        case 'MANOEUVRE':
            trainClass.textContent = 'MA';
            trainSpeed.textContent = '03';
            trainLength.textContent = '8';
            trainCoef.textContent = '045';
            break;
    
        default:
            break;
    };
};

// Function : Transformer la longueur à l'hectomètre supérieur
const lengthTransform = () => {
    const length = Math.ceil(parseInt(longueur.value)/100);
    trainLength.textContent = length;
};

// Events Listener                               
// Event Listener : Click sur le bouton "Calculer"
subBtn.addEventListener('click', () => {
    init();
    checkIndice();
});

// Event Listener : Changement de l'indice de compo
indiceCompo.addEventListener('change', () => {
    masseTotale.value = '';
    MFR.value = '';
    longueur.value = '';
    init();
});