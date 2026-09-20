# 🤖 Panorama comparatif des outils d'intelligence artificielle

> Exposition interactive réalisée par **GNIZO GREZOUALI ISRAEL**, élève en **Terminale A** au **Lycée Bilingue d'Ekounou**, dans le cadre du **cours d'Informatique**.

Trois outils, trois domaines :

| Outil | Domaine |
|---|---|
| ChatGPT | Texte |
| Nano Banana | Image |
| Claude | Programmation / code |

## ▶️ Ouvrir le site

Le site est entièrement **statique** : aucun logiciel spécial n'est nécessaire.

1. Télécharger (ou cloner) ce dossier ;
2. Double-cliquer sur **`index.html`** ;
3. C'est tout — le site fonctionne même **sans connexion Internet** (polices, icônes et coloration syntaxique sont stockées en local).

## 🗂️ Structure du projet

```
israel/
├── index.html                  la page unique (structure + contenus)
├── css/
│   ├── style.css               fondations : variables, thèmes, navbar, boutons
│   ├── sections.css            styles propres à chaque section
│   └── presentation.css        mode présentation (diapositives)
├── js/
│   ├── main.js                 année, menu burger, thème, apparitions, scroll-spy
│   ├── outils.js               bouton « Voir l'explication », curseur Avant/Après
│   ├── experiences.js          onglets « Expérimentons ! »
│   └── presentation.js         mode présentation + navigation clavier
├── assets/
│   ├── images/                 visuels (affiche GARAH, avant/après, photo à venir)
│   ├── fonts/                  polices Space Grotesk + Inter (woff2, locales)
│   ├── icons/                  favicon SVG
│   └── vendor/prism/           coloration syntaxique (Prism, licence MIT)
└── docs/                       documents des étapes + guide de personnalisation
```

## ✨ Fonctionnalités

- Fiches détaillées des trois outils, avec démonstrations réelles ;
- Curseur **Avant / Après** interactif (modification d'image par IA) ;
- Code Java et JavaScript **coloré** (Prism) avec explication dépliable ;
- Onglets « Expérimentons ! » (texte / image / code) ;
- Tableau comparatif — sans classement, sans gagnant ;
- **Mode présentation** pour l'exposé : touches `←` `→` `Esc`, plein écran, textes agrandis ;
- Thème **clair / sombre** mémorisé, design responsive (menu burger), icônes **Lucide** intégrées.

## 🛠️ Technologies

HTML5, CSS3 et JavaScript **sans framework**, + deux bibliothèques intégrées en local : **Prism** (coloration syntaxique) et les icônes **Lucide**.
Les choix sont expliqués dans [`docs/etape-01-architecture.md`](docs/etape-01-architecture.md).

## 🚀 Déployer sur Vercel

Site statique : importer le dépôt GitHub dans Vercel, aucun réglage (ni commande de build) nécessaire.
Procédure complète : [`docs/guide-personnalisation.md`](docs/guide-personnalisation.md).

## 📈 État d'avancement

- [x] Étape 1 — Analyse et architecture
- [x] Étape 2 — Structure de base
- [x] Étape 3 — Page d'accueil
- [x] Étape 4 — Les trois outils
- [x] Étape 5 — Une même idée + Expériences
- [x] Étape 6 — Comparaison et synthèse
- [x] Étape 7 — Mode présentation
- [x] Étape 8 — Finitions et responsive

Chaque étape est documentée dans le dossier `docs/` — de `etape-01-architecture.md` à `etape-08-finitions.md`, plus le `guide-personnalisation.md` (où remplir tes contenus, déploiement Vercel).
