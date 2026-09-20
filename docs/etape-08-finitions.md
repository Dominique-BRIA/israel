# Étape 8 — Icônes, thème clair/sombre, responsive, finitions

## Les vraies icônes (bibliothèque Lucide)

- **57 icônes SVG de la bibliothèque [Lucide](https://lucide.dev)** (licence ISC, utilisation libre) sont intégrées en local dans `index.html`, sous forme de **sprite** : un bloc de `<symbol>` caché en tout début de `<body>`.
- Utilisation : `<svg class="icone"><use href="#i-nom"></use></svg>`.
- **Pourquoi pas des images `<img>` ?** Ces SVG utilisent `stroke="currentColor"` : l'icône hérite de la **couleur du texte autour d'elle**. Elle se colore donc automatiquement selon le thème, la couleur de l'outil, ou un effet de survol. Une image ne sait pas faire ça.
- Aucune connexion Internet nécessaire : tout est dans la page.

## Le thème clair / sombre

- Toutes les couleurs passent par des **variables CSS** (le « panneau de réglages » de `style.css`).
- Le thème clair est déclaré dans le même fichier : `:root[data-theme="clair"] { ... }` — **mêmes variables, autres valeurs**.
- Le bouton lune/soleil de la navbar pose (ou retire) l'attribut `data-theme` sur `<html>` : tout le site change d'un coup.
- Le choix est **mémorisé** dans `localStorage` (la petite mémoire du navigateur).

## Le responsive

- **Menu burger** : sous 1020 px, les liens se replient dans un menu déroulant (`navbar.ouverte` posée par JS) ;
- Media queries : 800 px (hero), 900 px (cartes, résultats), grilles `auto-fit` qui s'adaptent seules ;
- Le tableau défile horizontalement sur mobile (`overflow-x: auto`).

## Les finitions

- **Apparitions au défilement** : `IntersectionObserver` pose `.visible` → transition douce. Désactivé automatiquement si l'utilisateur a activé « réduire les animations » (`prefers-reduced-motion`) ;
- **Espion de défilement** : le lien de la navbar correspondant à la section visible s'allume ;
- **Lien d'évitement** « Aller au contenu » (Tab) ;
- **Favicon** SVG (icône robot) ;
- Textes invisibles `.sr-only` pour les lecteurs d'écran (tableau, boutons icônes).

## Vérification rapide

- Redimensionner la fenêtre : burger, colonnes qui s'empilent, tableau défilant ;
- Basculer le thème, recharger : le choix est mémorisé ;
- Défiler : les cartes apparaissent en douceur, la navbar s'allume au bon endroit.
