// Variables                                     
// Variable : Données des inputs
const indiceCompo = document.getElementById('indiceCompo');
const masseTotale = document.getElementById('masseTotaleInput');
const MFR = document.getElementById('MFRInput');
const longueur = document.getElementById('longueurInput');

// Variable : Submit Button
const subBtn = document.getElementById('subBtn');

// Variable : Affichage du résultat
const v1 = document.getElementById('v1');
const v2 = document.getElementById('v2');
const l1 = document.getElementById('l1');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');

const pointer = document.getElementById('pointer');

// Functions                                     
// Function : Réinitialisation
const init = () => {
    v1.textContent = '';
    v2.textContent = '';
    l1.textContent = '';
    d1.textContent = '';
    d2.textContent = '';
    d3.textContent = '';

    pointer.style.right = '50%';
    pointer.style.top = '0';
    pointer.style.transform = 'translateX(50%)';
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
    const coefDec = coefKVBMA[index];
    d1.textContent = coefDec[0];
    d2.textContent = coefDec[1];
    d3.textContent = coefDec[2];
};

// Function : Check de l'indice de composition
const checkIndice = () => {
    lengthTransform()
    switch (indiceCompo.value) {
        case 'MA100':
            pointer.style.transform = 'rotate(45deg)';
            pointer.style.top = '12px';
            pointer.style.right = '12px';
            v1.textContent = '1';
            v2.textContent = '0';
            coefMAFunction();
            break;
        case 'MA90':
            pointer.style.transform = 'rotate(45deg)';
            pointer.style.top = '12px';
            pointer.style.right = '12px';
            v1.textContent = '0';
            v2.textContent = '9';
            coefMAFunction();
            break;
        case 'MA80':
            pointer.style.transform = 'rotate(45deg)';
            pointer.style.top = '12px';
            pointer.style.right = '12px';
            v1.textContent = '0';
            v2.textContent = '8';
            coefMAFunction();
            break;
        case 'HLP':
            pointer.style.transform = 'translateX(50%)';
            pointer.style.top = '0';
            pointer.style.right = '50%';
            v1.textContent = '1';
            v2.textContent = '0';
            l1.textContent = '0';
            d1.textContent ='0';
            d2.textContent ='5';
            d3.textContent ='7';
            break;
        case 'MANOEUVRE':
            pointer.style.transform = 'rotate(45deg)';
            pointer.style.top = '12px';
            pointer.style.right = '12px';
            v1.textContent = '0';
            v2.textContent = '3';
            l1.textContent = '8';
            d1.textContent ='0';
            d2.textContent ='4';
            d3.textContent ='5';
            break;
    
        default:
            break;
    };
};

// Function : Transformer la longueur à l'hectomètre supérieur
const lengthTransform = () => {
    const length = Math.ceil(parseInt(longueur.value)/100);
    l1.textContent = length;
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