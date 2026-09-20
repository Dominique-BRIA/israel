# Étape 2 — La structure de base du projet

> Projet : « Panorama comparatif des outils d'intelligence artificielle »
> Auteur : GNIZO GREZOUALI ISRAEL — Terminale A, Lycée Bilingue d'Ekounou
> Statut : **à tester et valider** avant de passer à l'Étape 3.

---

## 1. Ce qui a été créé

| Fichier / dossier | Rôle |
|---|---|
| `index.html` | **La page unique** : squelette complet — navbar, 8 sections identifiées, pied de page. Chaque section porte un commentaire indiquant à quelle étape elle se remplit. |
| `css/style.css` | **Les fondations du design** : variables CSS (couleurs, polices, géométrie), remise à zéro, base, utilitaire `.conteneur`, navbar, pied de page. |
| `css/sections.css` | Prêt à recevoir les styles propres à chaque section (Étapes 3 à 6). |
| `css/presentation.css` | Prêt à recevoir le mode présentation (Étape 7). |
| `js/main.js` | **Premier comportement** : met à jour l'année du pied de page automatiquement. |
| `js/outils.js`, `js/experiences.js`, `js/presentation.js` | « Boîtes vides étiquetées » : des commentaires décrivent leur mission future. |
| `assets/images/`, `assets/fonts/` | Dossiers d'accueil des visuels et des polices (fichiers locaux → site 100 % hors ligne). |
| `README.md` | Présentation du projet + mode d'emploi + état d'avancement. |
| `docs/` | Journal de bord des étapes (ce dossier). |

**Point important :** l'architecture est désormais **complète**. Les étapes suivantes ne feront que *remplir* ces fichiers — plus besoin d'en créer de nouveaux (hormis polices et images).

---

## 2. L'anatomie de `index.html`

```
<!DOCTYPE html>          ← « je suis un document HTML moderne »
<html lang="fr">         ← la langue de la page
  <head>                 ← ce qui n'est PAS affiché
    meta charset UTF-8   ← pour afficher é, à, ç, ï…
    meta viewport        ← pour l'adaptation aux téléphones
    title + description  ← l'onglet et le résumé pour les moteurs
    3 <link> CSS         ← on branche les feuilles de style
  </head>
  <body>                 ← ce qui EST affiché
    <header>             ← la navbar (liens vers les ancres)
    <main>               ← 8 <section> avec leurs id
    <footer>             ← pied de page (année automatique)
    4 <script>           ← en fin de page, quand le HTML est prêt
  </body>
```

### Les ancres (le système de navigation)

Le lien `<a href="#outils">` de la navbar envoie vers l'élément qui porte `id="outils"`.
Le CSS `html { scroll-behavior: smooth; }` rend ce défilement **animé et doux**.
👉 C'est déjà une fonctionnalité complète qui fonctionne, sans une ligne de JavaScript !

### Pourquoi les `<script>` sont en fin de `<body>`

Le navigateur lit la page **de haut en bas**. Si un script s'exécutait au début, il chercherait des éléments qui n'existent pas encore. Placés en fin de page, les scripts trouvent un HTML déjà construit. (En bonus, `main.js` écoute l'événement `DOMContentLoaded` : « préviens-moi quand la page est prête ».)

---

## 3. Les variables CSS — le « panneau de réglages »

Dans `css/style.css`, le bloc `:root { ... }` déclare les réglages du site :

```css
:root {
  --couleur-fond: #0b1220;
  --accent-nano-banana: #fbbf24;
}
body { background-color: var(--couleur-fond); }
```

- On **déclare** avec `--nom` et on **utilise** avec `var(--nom)`.
- Changer `--couleur-fond` change le fond **partout** où la variable est utilisée.
- C'est la fondation du futur **bouton de bascule sombre/clair** (Étape 8) : il suffira de changer les variables pour changer tout le thème.

---

## 4. `main.js` — notre premier comportement

```js
document.addEventListener('DOMContentLoaded', function () {
  const annee = document.getElementById('annee');
  if (annee) {
    annee.textContent = new Date().getFullYear();
  }
});
```

Lecture ligne par ligne :
1. `document` = la page entière ; on y installe un **écouteur d'événement** ;
2. l'événement écouté est « DOM chargé » (le HTML est prêt) ;
3. `getElementById('annee')` cherche la `<span id="annee">` du pied de page ;
4. `if (annee)` protège contre le cas où l'élément n'existerait pas ;
5. `textContent = ...` remplace le texte affiché par l'année courante.

---

## 5. Concepts introduits à cette étape

| Concept | En une phrase |
|---|---|
| Balise sémantique | `<header>`, `<main>`, `<section>`, `<footer>` décrivent le **rôle** d'une zone (un navigateur — ou un lecteur d'écran — comprend la page). |
| Attribut `id` / ancre | Un `id` nomme un élément ; `href="#id"` crée un lien qui y saute. |
| Chemin relatif | `css/style.css` = « dans le dossier `css`, le fichier `style.css` ». |
| Les 3 couches | HTML = structure, CSS = design, JS = comportement. |
| Variable CSS | Un réglage nommé, déclaré une fois, utilisé partout. |
| `DOMContentLoaded` | L'événement « le HTML est prêt à être manipulé ». |

---

## 6. Comment tester

1. **En aperçu** : le serveur de prévisualisation affiche `index.html` (ou double-clique sur `index.html` après avoir téléchargé le dossier — cela fonctionne hors ligne).
2. Vérifier que :
   - la page est **sombre** (bleu nuit) ;
   - la **navbar reste collée en haut** quand on défile ;
   - les liens de la navbar **font défiler doucement** la page jusqu'aux sections (encadrés en pointillés) ;
   - le pied de page affiche **2026** automatiquement ;
   - le bouton 🎤 est **grisé** (normal : il sera activé à l'Étape 7).
3. Réduire la fenêtre : la navbar passe à la ligne au lieu de casser (aperçu du responsive, amélioré à l'Étape 8).

---

## 7. Exercice (facultatif mais recommandé, ~5 minutes)

1. Dans `css/style.css`, remplace la valeur de `--couleur-fond` par `#1a0b2e` (violet nuit), enregistre, recharge la page. Observe. Remets la valeur d'origine. → Tu viens d'utiliser une variable CSS !
2. Dans `index.html`, ajoute dans la liste `.nav-liens` un lien `<li><a href="#mission">Mission</a></li>`, enregistre, recharge, teste. → Tu viens de créer une ancre de navigation.
3. Pour aller plus loin : ajoute une nouvelle `<section id="remerciements">` (avec son commentaire et un encadré `.en-attente` copié d'une autre section) juste avant le `</main>`, puis un lien vers `#remerciements` dans la navbar.

## 8. Question de compréhension

> Pourquoi place-t-on les balises `<script>` tout à la fin du `<body>`, juste avant `</body>`, plutôt que dans le `<head>` ?

(Réponds avec tes mots — même approximatifs, c'est le but.)

---

*Étape 2 sur 8 — document rédigé dans le cadre du projet.*
