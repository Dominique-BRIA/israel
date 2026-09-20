# Étape 3 — La page d'accueil

> Projet : « Panorama comparatif des outils d'intelligence artificielle »
> Auteur : GNIZO GREZOUALI ISRAEL — Terminale A, Lycée Bilingue d'Ekounou
> Statut : **à tester et valider** avant de passer à l'Étape 4.

---

## 1. Ce qui a été créé

| Élément | Description |
|---|---|
| **Polices locales** | `assets/fonts/space-grotesk.woff2` (titres, 19 Ko) et `inter.woff2` (texte, 65 Ko) : le design reste identique **même sans Internet**. |
| **Section Accueil (hero)** | Carte de présentation de l'élève (photo à venir, nom, classe, badges, citation) + titre du projet + phrase d'accroche + bouton « Découvrir le panorama ». |
| **Section Notre mission** | En-tête de section + les trois cartes domaines (📝 ChatGPT / 🎨 Nano Banana / 💻 Claude), cliquables vers `#outils`. |
| **CSS** | `sections.css` rempli (hero + mission) ; `style.css` enrichi (@font-face, variable `--degrade-accent`, bouton `.bouton-principal`). |

**Fait remarquable : cette étape n'a nécessité AUCUNE ligne de JavaScript.** Tout fonctionne en HTML + CSS.

---

## 2. Les points à comprendre

### a) Les polices locales (@font-face)

```css
@font-face {
  font-family: "Space Grotesk";
  src: url("../assets/fonts/space-grotesk.woff2") format("woff2");
  font-weight: 300 700;
  font-display: swap;
}
```

- `@font-face` = « cherchant cette police, va la chercher dans CE fichier ».
- Le chemin `../assets/fonts/...` est **relatif au fichier CSS** : depuis `css/`, on remonte d'un cran (`..` = dossier parent) puis on entre dans `assets/fonts/`.
- Ce sont des **polices variables** : un seul fichier contient toutes les graisses, d'où la plage `300 700`.
- `font-display: swap` : le texte s'affiche tout de suite (police de repli), puis la vraie police remplace dès qu'elle est prête.
- Origine : dépôt officiel `google/fonts` (GitHub), licence SIL OFL (libre), converties en woff2 et allégées → 84 Ko au total.

### b) Le hero : une grille de 2 colonnes

```css
.hero-grille {
  display: grid;
  grid-template-columns: 340px 1fr;
}
```

- **CSS Grid** = placer des zones sur un **quadrillage** (ici : carte de 340 px + zone texte flexible).
- **Flexbox** = aligner des objets **sur une ligne** (utilisé pour la navbar, les badges).
- Règle simple à retenir : *Grid pour la mise en page en 2 dimensions, Flex pour l'alignement en 1 dimension.*

### c) L'emplacement photo (aucune photo inventée)

Un cercle en pointillés avec une icône attend la vraie photo. Les instructions pour l'ajouter sont **écrites en commentaire dans `index.html`**, au-dessus du cadre :

1. Déposer l'image dans `assets/images/` (nom : `photo-eleve.jpg`) ;
2. Remplacer le contenu de `.cadre-photo` par une balise `<img src="assets/images/photo-eleve.jpg" alt="...">`.

La règle CSS `.cadre-photo img { object-fit: cover; border-radius: 50%; }` découpera automatiquement n'importe quelle photo en cercle.

### d) Un seul `<h1>` par page

Le `<h1>` est le titre du projet (« Panorama comparatif… »). Le nom de l'élève est un simple paragraphe très stylé : c'est une **signature d'auteur**, pas un titre de section. Structure des titres du site : `h1` (accueil) → `h2` (chaque section) → `h3` (cartes, fiches).

### e) Le bouton « Découvrir le panorama » est un lien !

```html
<a class="bouton-principal" href="#mission">Découvrir le panorama ↓</a>
```

Un `<a>` vers une anche + le `scroll-behavior: smooth` de l'Étape 2 = un bouton fonctionnel **sans JavaScript**. Le CSS le déguise en bouton (dégradé, pilule, ombre).

### f) Effets au survol + transition

```css
.carte-domaine { transition: transform 0.2s ease, box-shadow 0.2s ease; }
.carte-domaine:hover { transform: translateY(-6px); }
```

- `:hover` = état quand la souris est dessus.
- `transition` = le passage d'un état à l'autre est **progressif** (0,2 s) au lieu d'être brutal.
- `translateY(-6px)` = déplacement vertical de 6 px vers le haut → la carte « décolle ».

### g) La fluidité avec `clamp()`

```css
font-size: clamp(2rem, 4.5vw, 3.3rem);
```

`clamp(mini, idéale, maxi)` : sur grand écran le titre grandit (4,5 % de la largeur), mais jamais en dessous de 2 rem ni au-dessus de 3,3 rem.

### h) Les media queries (le responsive)

```css
@media (max-width: 800px) { .hero-grille { grid-template-columns: 1fr; } }
```

« SI l'écran fait moins de 800 px de large, ALORS une seule colonne. » C'est ainsi que le site s'adapte aux téléphones — sans créer de seconde page.

---

## 3. Concepts introduits à cette étape

| Concept | En une phrase |
|---|---|
| `@font-face` | Déclarer une police stockée dans un fichier local. |
| Chemin relatif | `../` = remonter d'un dossier ; `assets/...` = descendre. |
| Police variable | Un seul fichier contient toutes les graisses (400, 600, 700…). |
| CSS Grid | Placement en quadrillage (2 dimensions). |
| Flexbox | Alignement sur une ligne (1 dimension). |
| `:hover` + `transition` | État au survol + passage progressif. |
| `clamp()` | Taille fluide entre un minimum et un maximum. |
| Media query | « Si l'écran est plus petit que…, alors… » |

---

## 4. Comment tester

1. Recharger l'aperçu (ou `index.html`).
2. Vérifier que :
   - le hero affiche la **carte élève** (cercle « Ma photo », nom, badges, citation) et le **grand titre** avec « intelligence artificielle » en indigo ;
   - le bouton **« Découvrir le panorama ↓ »** fait défiler doucement jusqu'à « Notre mission » ;
   - les **3 cartes domaines** ont chacune leur barre colorée (vert d'eau / doré / corail) et **décollent** au survol ;
   - cliquer une carte mène à la section « Les outils » (encore en pointillés — Étape 4 !) ;
   - les titres ont changé de police (Space Grotesk, plus « géométrique »).
3. Réduire la fenêtre du navigateur en largeur : les colonnes s'empilent — le site reste lisible sur téléphone.

---

## 5. Exercice (facultatif mais recommandé, ~5 minutes)

1. Dans `css/style.css`, change `--accent-general` en `#34d399` (émeraude) et recharge : repère TOUT ce qui change (surtitre, mot « intelligence artificielle », ligne « Élève en Terminale A »…). Remets la valeur d'origine.
2. Fais « décoller » la carte de l'élève au survol : ajoute à `.carte-eleve` les deux règles copiées de `.carte-domaine` (`transition: …` et `.carte-eleve:hover { … }` — attention, il faut créer cette deuxième règle toi-même).

## 6. Question de compréhension

> Le jour de l'exposé, tu veux ajouter ta vraie photo. Que devras-tu faire exactement ?
> (La réponse est écrite en commentaire dans `index.html` — mais reformule-la avec tes mots pour t'entraîner à l'expliquer.)

---

*Étape 3 sur 8 — document rédigé dans le cadre du projet.*
