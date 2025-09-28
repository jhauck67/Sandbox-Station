<div align="center">
  <h1>🚀 JSON-Stringify</h1>
  <p>L'outil essentiel pour sérialiser votre code en un clic.</p>
  
  <p align="center">
    <img src="https://img.shields.io/badge/HTML-%23E34F26.svg?style=flat&logo=html5&logoColor=white" />
    <img src="https://img.shields.io/badge/CSS-%23663399.svg?style=flat&logo=css&logoColor=white" />
    <img src="https://img.shields.io/badge/Javascript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/badge/Statut-Termin%C3%A9-red.svg" />
  </p>
  
  <p>
      <a href="https://jhauck67.github.io/Sandbox-Station/projects/JSON-Stringify/demo/index.html">Voir la démo</a> •
    <a href="#-présentation-rapide">Présentation projet</a> •
    <a href="#-ce-que-jai-appris">Ce que j'ai appris</a> •
    <a href="#-à-propos-de-lautrice">À propos</a>
  </p>
  
  <img src="./assets/sketch/screenshot.png" alt="Aperçu du projet" width="600" />
</div>

## 🧩 Présentation rapide

Un petit utilitaire bien pratique, tout en finesse technique. 🛠️✨ 
Objectif : **Convertir instantanément n'importe quel bloc de code ou de texte en une chaîne de caractères (string) JSON valide, puis copier le résultat dans le presse-papiers de l'utilisateur en un seul clic.**  
Contexte : **Projet personnel pour explorer l'API `navigator.clipboard` et la manipulation de chaînes de caractères en Vanilla JavaScript.**  
Contraintes : **Conception *responsive*, utilisation d'une architecture CSS modulaire basée sur des variables sémantiques (approche "Design System"), et gestion claire du *feedback* utilisateur (succès/erreur).**

🔗 [Voir la démo dans le navigateur](https://jhauck67.github.io/Sandbox-Station/projects/JSON-Stringify/demo/index.html)

## 🖼️ Aperçu

<img src="./assets/sketch/video.gif" alt="Aperçu du projet" width="700"/>

## 🔧 Technologies utilisées

- **HTML5 sémantique** (avec métadonnées Open Graph complètes)
- **CSS Modulaire** (avec utilisation de **Variables CSS natives** HSL pour un *Design System* cohérent)
- **JavaScript pur (Vanilla JS)**

## ✅ Ce que j’ai appris

- [x] **Maîtriser `JSON.stringify()`** : La fonction clé pour sérialiser les données en une chaîne JSON.
- [x] **Intégrer l'API `navigator.clipboard`** : Une interface moderne pour une expérience utilisateur fluide (copier/coller).
- [x] **Mettre en place une architecture CSS avec variables sémantiques** : Pour une maintenance facile de la palette de couleurs et des espacements.
- [x] **Gérer le *feedback* asynchrone** : Affichage temporaire du message "Copié" après la résolution de la promesse de la copie.

## 🛠️ À améliorer plus tard

- ♿ **Améliorer l'Accessibilité (ARIA)** : Ajouter des **ARIA Live Regions** pour annoncer les messages de succès/erreur aux lecteurs d'écran.
- 💡 **Meilleure Ergonomie** : Désactiver le bouton principal par défaut et l'activer uniquement lorsqu'il y a du contenu dans la zone de texte.
- 🧪 **Rendre la conversion instantanée** : Passer de l'événement `click` à l'événement `input` pour une conversion en temps réel.
- 🎨 **Finaliser la propreté du CSS** en remplaçant toutes les valeurs "en dur" par mes variables sémantiques (et corriger la double imbrication du `var()`).


## 👩‍💻 À propos de l’autrice

> Code, café, et curiosité technique ☕💡  
> Retrouve-moi ici → [github.com/jhauck67](https://github.com/jhauck67)

<p align="center" style="color: #888;">
  <em>Merci d’avoir visité ce dépôt !<br>
  🚂 En route vers de nouveaux projets web… 🚦</em>
</p>

<div align="center">
  <p><strong>jhauck67</strong><br>
  Apprentie développeuse web</p>
  <p>
    <a href="https://github.com/jhauck67">GitHub</a> •
    <a href="https://jhauck67.github.io/jhauck67/">Portfolio</a> •
    <a href="https://codepen.io/jhauck67">Codepen.io</a>
  </p>
</div>
