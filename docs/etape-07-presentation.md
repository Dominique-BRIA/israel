# Étape 7 — Le mode présentation

> Le mode conçu pour l'exposé devant la classe, sur vidéoprojecteur.

## Comment l'utiliser le jour J

1. Cliquer sur **« Présentation »** dans la navbar → le site passe en plein écran ;
2. Naviguer avec **→** (diapositive suivante), **←** (précédente), **Espace** (suivante), **Début/Fin** (première/dernière), **Esc** pour quitter ;
3. La **barre flottante** en bas affiche les boutons ‹ › ✕ et le compteur « 3 / 10 » — pratique si on préfère la souris ;
4. Les **interactions restent actives** en mode présentation : onglets des expériences, curseur Avant/Après, bouton « Voir l'explication » — tu peux faire une vraie démo live.

## Les 10 diapositives

1. Accueil (présentation de l'élève + titre)
2. Notre mission
3. Fiche ChatGPT
4. Fiche Nano Banana
5. Fiche Claude
6. Une même idée, trois IA
7. Expérimentons ! (onglets)
8. Comparaison
9. Ce que nous avons appris
10. Les limites

## Comment ça fonctionne (à savoir expliquer)

1. `js/presentation.js` contient la liste `DIAPOS` : chaque entrée désigne un élément de la page (sélecteur CSS) ; les fiches d'outils précisent leur section parente `#outils` ;
2. **Entrer** : on ajoute la classe `mode-presentation` à `<body>` + demande de plein écran (`requestFullscreen()`, dans un `try/catch` car certains navigateurs refusent) ;
3. **Afficher une diapo** : on retire `.diapo-active` partout, on la pose sur la diapo (et son parent) ; le CSS (`css/presentation.css`) masque tout le reste et agrandit la typographie à 118 % ;
4. **Le clavier** : un écouteur `keydown` global. Détail important : si le focus est dans un `input` (le curseur Avant/Après) ou sur un bouton, les flèches continuent de piloter cet élément au lieu de changer de diapo.

## Concept clé : gérer un « état »

Le mode a un **état** : actif/inactif + un index de diapositive. Toute l'interface se déduit de ces deux informations. C'est exactement ce que font les vraies applications (juste avec plus d'états).

## Comment tester

Cliquer « Présentation », naviguer au clavier, tester les onglets pendant le mode, quitter avec Esc.
