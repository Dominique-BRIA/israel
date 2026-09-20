# Étape 1 — Analyse du projet & proposition d'architecture

> **Projet :** « Panorama comparatif des outils d'intelligence artificielle »
> **Auteur :** GNIZO GREZOUALI ISRAEL — Terminale A, Lycée Bilingue d'Ekounou
> **Cours :** Informatique
> **Statut de ce document :** proposition à valider avant de commencer le code (Étape 2).

---

## 1. Ce que je comprends du besoin

| Critère | Analyse |
|---|---|
| **Nature du site** | Une « exposition interactive » : uniquement du **contenu fixe** (textes, images, exemples). Pas de comptes utilisateurs, pas de base de données, pas de données à enregistrer. |
| **Public** | La classe + le professeur, assis au fond de la salle, regardant un **vidéoprojecteur**. |
| **Usage** | Trois rôles en un : **support d'exposé**, **exposition à explorer**, **preuve de compétences** en informatique. |
| **Contrainte n°1** | Tu dois pouvoir **expliquer toi-même chaque partie du site** devant la classe. |
| **Contrainte n°2** | Fonctionner le jour J **même sans connexion Internet** (salle de classe). |
| **Contrainte n°3** | Lisible de loin (textes grands, contrastes forts, pas de fioritures qui distraient). |

**Conclusion de l'analyse :** le site est *statique et interactif*. C'est le cas d'usage le plus simple qui existe — et c'est une chance pédagogique : nous n'avons **pas besoin d'une architecture complexe**.

---

## 2. Choix des technologies (et pourquoi)

### 2.1 Les options envisagées

| Option | Avantages | Inconvénients | Verdict |
|---|---|---|---|
| **HTML + CSS + JavaScript « pur » (vanilla)** | Zéro installation, un navigateur suffit ; 100 % du code est explicable ; fonctionne hors ligne ; base solide pour tes études | Un peu plus de code « à la main » pour certains effets | ✅ **Retenu** |
| Framework JavaScript (React, Vue, Next.js…) | Très moderne, utilisé en entreprise | Nécessite Node.js, npm, des concepts abstraits (composants, build…) difficiles à justifier pour un site statique, et impossibles à expliquer simplement en Terminale | ❌ Écarté |
| WordPress / Wix / site builder | Rapide | On n'apprend pas le code ; dépendance à une plateforme ; pas « ton » site | ❌ Écarté |

### 2.2 La pile retenue

```
HTML5  →  la structure (le squelette)
CSS3   →  le design (l'habillage)
JS     →  le comportement (les interactions)
+ Prism.js  →  la coloration syntaxique du code Java (2 petits fichiers copiés en local)
```

**Pourquoi ces choix :**

1. **Aucune installation, aucune dépendance** : le jour de l'exposé, tu peux ouvrir le site en double-cliquant sur `index.html`, même sans Internet.
2. **Tout ce qui est dans le code est explicable** : pas de « magie noire » cachée dans un framework. Si tu sais lire le fichier, tu peux le présenter.
3. **Proportionné au besoin** : un site sans base de données n'a pas besoin d'outillage lourd. Un bon programmeur choisit *la solution la plus simple qui fonctionne* — c'est un excellent argument à donner le jour de l'exposé (ironie sympathique : le site qui compare les IA est volontairement simple… sur le conseil d'une IA).
4. **Prism.js** : écrire nous-mêmes un colorateur de code serait long et fragile. Prism est une micro-librairie standard, copiée **en local** (donc hors ligne), qui colore le code avec de simples classes CSS.

**Choix assumés par simplicité :**
- **Icônes** : les émojis de ton plan (📝 🎨 💻 🎤) + quelques petits **SVG inline** dessinés à la main pour les ✓ / — du tableau. Pas de librairie d'icônes.
- **Polices** : 2 polices modernes téléchargées en local (une pour les titres, une pour le texte), avec repli sur les polices du système. Pas de lien vers Google Fonts (sinon perte du style sans Internet).

---

## 3. Architecture générale : une seule page

### 3.1 Pourquoi une seule page ?

- Ton exposé suit un **parcours linéaire** (élève → projet → outils → expériences → comparaison → leçons → limites). Le défilement de la page **est** ce parcours.
- Le **mode présentation** réutilise les mêmes sections, transformées en diapositives.
- Navigation instantanée (pas de rechargement), transitions fluides, une seule URL à retenir.

### 3.2 Le plan de la page

```
┌──────────────────────────────────────────────────────┐
│ NAVBAR (fixe) : Accueil · Les outils · Expériences · │
│ Comparaison · Appris · Limites      [🎤 Présentation]│
├──────────────────────────────────────────────────────┤
│ 1. HERO  #accueil                                    │
│    Emplacement photo + GNIZO GREZOUALI ISRAEL        │
│    Titre du projet + bouton « Découvrir le panorama »│
├──────────────────────────────────────────────────────┤
│ 2. NOTRE MISSION  #mission                           │
│    Texte d'objectif + 3 cartes (Texte/Image/Code)    │
├──────────────────────────────────────────────────────┤
│ 3. LES OUTILS  #outils                               │
│    3a. 📝 ChatGPT (présentation, 8 capacités,        │
│         exemple prompt/réponse, limites)             │
│    3b. 🎨 Nano Banana (6 capacités, affiche GARAH,   │
│         curseur Avant/Après, limites)                │
│    3c. 💻 Claude (7 capacités, code Java coloré,     │
│         bouton « Voir l'explication », limites)      │
├──────────────────────────────────────────────────────┤
│ 4. UNE MÊME IDÉE, TROIS IA  #idee                    │
│    Pipeline visuel : GARAH → ChatGPT → Nano Banana   │
│    → Claude, avec les 3 résultats côte à côte        │
├──────────────────────────────────────────────────────┤
│ 5. EXPÉRIMENTONS !  #experiences                     │
│    Onglets Texte | Image | Code                      │
│    (outil, domaine, prompt, résultat, explication,   │
│     ce que l'expérience nous apprend)                │
├──────────────────────────────────────────────────────┤
│ 6. COMPARAISON  #comparaison                         │
│    Tableau ✓ / — (sans classement, sans gagnant)     │
├──────────────────────────────────────────────────────┤
│ 7. CE QUE NOUS AVONS APPRIS  #appris                 │
│    5 cartes-leçons numérotées                        │
├──────────────────────────────────────────────────────┤
│ 8. LES LIMITES DE L'IA  #limites                     │
│    Style visuel « alerte » différent du reste        │
├──────────────────────────────────────────────────────┤
│ FOOTER : mentions du cours et de l'auteur            │
└──────────────────────────────────────────────────────┘
```

---

## 4. Les composants (les briques réutilisables)

Un **composant**, c'est un morceau de site autonome : son HTML + son CSS + son comportement JS. On le construit une fois, on le réutilise.

| # | Composant | Comportement | Utilisé dans |
|---|---|---|---|
| 1 | **Navbar responsive** | Fixe en haut, liens vers les ancres, menu « burger » sur téléphone | Toute la page |
| 2 | **Hero** | Grand titre, présentation élève, emplacement photo, bouton qui fait défiler vers #mission | Accueil |
| 3 | **Carte domaine** | Carte cliquable avec émoji, outil, domaine, description | Mission, Une même idée |
| 4 | **Fiche outil** | Bloc structuré identique ×3 : présentation / capacités en cartes / démonstration / limites | Les outils |
| 5 | **Curseur Avant/Après** | Deux images superposées, une poignée qu'on glisse pour comparer | Nano Banana |
| 6 | **Bloc de code + explication** | Code coloré par Prism + bouton « Voir l'explication » qui affiche/cache un texte | Claude |
| 7 | **Onglets d'expérience** | 3 onglets (Texte/Image/Code), un seul panneau affiché à la fois | Expérimentons ! |
| 8 | **Tableau comparatif** | Lignes/cellules stylées, icônes ✓ et — | Comparaison |
| 9 | **Carte leçon** | Carte numérotée titre + phrase | Ce que nous avons appris |
| 10 | **Bandeau limites** | Section au style visuel « attention » (couleur et mise en page distinctes) | Limites |
| 11 | **Mode présentation** | Overlay plein écran, une « diapositive » à la fois, touches ← → Esc | Partout (bouton 🎤) |
| 12 | **Apparition au défilement** | Les sections apparaissent en douceur quand on y arrive (API `IntersectionObserver`) | Toute la page |

---

## 5. Organisation des fichiers

```
israel/
├── index.html            ← LA page unique : toutes les sections, bien commentées
├── README.md             ← présentation du projet + mode d'emploi du site
├── css/
│   ├── style.css         ← variables de design, base, navbar, footer
│   ├── sections.css      ← styles propres à chaque section (outils, expériences…)
│   └── presentation.css  ← styles du mode présentation
├── js/
│   ├── main.js           ← navbar, défilement fluide, apparitions au scroll
│   ├── outils.js         ← fiches outils, bouton « Voir l'explication »
│   ├── experiences.js    ← onglets des expériences
│   └── presentation.js   ← mode présentation + navigation clavier
├── assets/
│   ├── images/           ← affiche GARAH, paire Avant/Après, illustrations
│   └── fonts/            ← polices .woff2 (pour fonctionner hors ligne)
└── docs/                 ← nos documents d'étape (ce fichier, etc.)
```

**Logique :** un fichier = **une responsabilité**. Pas un seul fichier géant impossible à lire, mais pas non plus 40 fichiers (comme le feraient des frameworks). Trois CSS, quatre JS, un HTML : c'est tout.

---

## 6. Aperçu du mode présentation (détaillé à l'Étape 7)

Principe simple et explicable :

1. Chaque section du site est déclarée comme une ou plusieurs **diapositives** (une liste ordonnée d'éléments).
2. Un **overlay** (calque plein écran au-dessus du site) affiche une diapositive à la fois, avec une `position: fixed` et un texte agrandi.
3. Un simple **compteur** (variable `index`) mémorise la diapositive courante.
4. Un écouteur d'événement `keydown` sur le document capte `←` (précédent), `→` (suivant), `Esc` (quitter).
5. Une classe CSS `mode-presentation` sur `<body>` agrandit la typographie et masque les éléments inutiles.

Concepts à apprendre : événements clavier, gestion d'état, API Fullscreen (plein écran du navigateur).

---

## 7. Design proposé (grandes lignes, détails aux Étapes 3 et 8)

- **Ambiance « nuit technologique »** : fond sombre bleu nuit, contrastes forts → bien visible sur vidéoprojecteur, esthétique IA.
- **Une couleur d'accent par outil**, définie en **variables CSS** :
  - 📝 ChatGPT → vert d'eau · 🎨 Nano Banana → jaune doré · 💻 Claude → orange corail
- Cartes avec ombres douces, bords arrondis, effets au survol **légers**, beaucoup d'espace blanc.
- Typographie : une police géométrique pour les titres (identité « jeune/techno »), une police très lisible pour le texte.
- **À décider avec toi :** thème sombre, thème clair, ou les deux avec un bouton de bascule (petit défi technique sympa grâce aux variables CSS).

---

## 8. Images du site

- **Affiche GARAH** et paire **Avant/Après** : je peux les **générer avec une IA d'image** ici même, dans l'esprit du projet (le site montrerait alors de vraies images générées par IA, ce qui est le sujet !). Tu pourras ensuite les remplacer par tes propres résultats si tu réalises les tests toi-même avec Nano Banana.
- **Ta photo personnelle** : un emplacement élégant (cadre stylisé) est prévu ; aucune photo inventée, tu la déposeras plus tard dans `assets/images/`.

---

## 9. Hébergement et jour J

- **Hors ligne** : tout (polices, librairie, images) est en local → double-clic sur `index.html`, ça fonctionne. Copie sur clé USB recommandée.
- **En ligne (optionnel)** : publication gratuite sur **GitHub Pages** → un lien à mettre dans ton exposé ou à partager.

---

## 10. Feuille de route (nos 8 étapes)

| Étape | Contenu | Concepts que tu apprendras |
|---|---|---|
| 1 ✅ | Analyse & architecture (ce document) | Lire un besoin, choisir ses outils |
| 2 | Structure de base : dossiers, squelette HTML, navbar vide, README | Balises sémantiques (`header`, `section`…), arborescence |
| 3 | Page d'accueil (hero + présentation élève) | Variables CSS, Flexbox, dégradés, unités rem |
| 4 | Sections des trois outils (fiches, Avant/Après, code coloré) | Composants répétés, positionnement, Prism.js |
| 5 | Expériences (onglets) | Événements JS, conditions, gestion d'état simple |
| 6 | Comparaison (tableau) | Tableaux HTML, icônes SVG, accessibilité |
| 7 | Mode présentation | Clavier, overlay, Fullscreen API |
| 8 | Polish, animations, responsive | Media queries, `prefers-reduced-motion`, tests mobiles |

**Notre règle de travail :** à chaque étape → je crée → j'explique (quoi, pourquoi, comment) → je te dis comment tester → **tu valides avant de passer à la suivante**.

---

## 11. Notions de base à garder en tête

- **HTML** = le squelette (la structure). **CSS** = l'habillage (le design). **JavaScript** = les muscles (les interactions).
- Un **site statique** : le contenu est fixe, écrit à l'avance dans les fichiers. Pas besoin de serveur.
- **Responsive** : le site s'adapte à la taille de l'écran (téléphone, ordinateur, vidéoprojecteur).
- **Ancre** (`#outils`) : un repère nommé dans la page vers lequel on peut faire défiler.

---

*Document rédigé dans le cadre du projet — Étape 1 sur 8.*
