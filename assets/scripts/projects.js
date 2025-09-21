// ###### [FONCTION ELEMENT CREATOR] = Génère des éléments. ######
const elementCreator = (balise, className, iD) => {
    const element = document.createElement(balise);
    if(className) element.classList.add(className);
    if(iD) element.id = iD;
    return element;
};


// ###### [FONCTION CARD GENERATOR] = Génère les cards. ######
const cardGenerator = (projectsArray, container) => {
    // (1) On boucle sur chaque projet dans le tableau.
    projectsArray.forEach(project => {
        // ¤.card
        const card = elementCreator('article', 'card', `${project.id}`);
        // On construit le chemin de l'image
        const imagePath = `https://raw.githubusercontent.com/jhauck67/Sandbox-Station/refs/heads/siteJS/assets/img/${project.projectImage}`;
        // Et on l'injecte en tant que background
        card.style.setProperty('--card-bg-img', `url('${imagePath}')`);
            // ¤ .description
            const description = elementCreator('div', 'description');
                // ¤ h3
                const titreh3 = elementCreator('h3');
                titreh3.textContent = project.projectName
                // ¤ p
                const paragraphe = elementCreator('p');
                paragraphe.textContent = project.projectDescription
                // ¤ .tags
                const tagsContainer = elementCreator('div', 'tags');
                    // On boucle sur chaque tag pour les créer.
                    project.projectTags.forEach(tag => {
                        const tagElement = elementCreator('span', 'tag');
                        tagElement.classList.add(tag.toLowerCase() + "-tag");
                        tagElement.textContent = tag;
                        tagsContainer.appendChild(tagElement);
                    });
                // ¤ a
                const projectLink = elementCreator('a');
                if (project.projectLink === "") {
                    projectLink.setAttribute('href', "#");
                    projectLink.textContent = 'En préparation...'; 
                } else {
                    projectLink.setAttribute('href', project.projectLink);
                    projectLink.textContent = 'Voir le projet'; 
                }
        
        // (2) On assemble les cards.
        description.appendChild(titreh3);
        description.appendChild(paragraphe);
        description.appendChild(tagsContainer);
        description.appendChild(projectLink);
        
        card.appendChild(description);

        // (3) On ajoute la carte au conteneur cible
        container.appendChild(card);
    });
};


// ###### [FETCH JSON] = Récupérer les données
export const cardsInProjects = () => {
    fetch('https://raw.githubusercontent.com/jhauck67/Sandbox-Station/refs/heads/siteJS/assets/data/projects.json')
    .then(response => response.json())
    .then(data => {
        // (1) On pointe les conteneurs dans le DOM
        const integrationsContainer = document.querySelector('#integrations .cards-container');
        const interactionsContainer = document.querySelector('#interactions .cards-container');
        const experimentsContainer = document.querySelector('#experiments .cards-container');
        const appsContainer = document.querySelector('#apps .cards-container');

        // (2) On appelle la fonction de génération de chaque section
        cardGenerator(data.integrations, integrationsContainer);
        cardGenerator(data.interactions, interactionsContainer);
        cardGenerator(data.experiments, experimentsContainer);
        cardGenerator(data.apps, appsContainer);
    })
    .catch(error => console.error('Erreur de chargement du JSON : ', error));
};
