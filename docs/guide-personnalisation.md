# Guide de personnalisation & déploiement

> Ce document explique **où remplir tes contenus personnels** et comment **mettre le site en ligne sur Vercel**.
> Lis-le d'un bout à l'autre avant ton exposé.

---

## 1. Ajouter ta photo (emplacement déjà prévu)

1. Prends une photo de toi (carrée si possible) et nomme-la **`photo-eleve.jpg`** ;
2. Dépose-la dans le dossier **`assets/images/`** ;
3. Dans `index.html`, cherche le commentaire `<!-- Emplacement réservé pour la photo` (section `#accueil`, tout en haut de la page) ;
4. Remplace tout le contenu du cadre par la balise indiquée dans le commentaire :

```html
<img src="assets/images/photo-eleve.jpg" alt="Portrait de GNIZO GREZOUALI ISRAEL">
```

Le CSS la découpera **automatiquement** en cercle — rien d'autre à faire.

## 2. Remplacer les images de démonstration par tes propres essais

Le site fonctionne avec trois images, dans `assets/images/` :

| Fichier | Rôle | Où il apparaît |
|---|---|---|
| `garah-affiche.jpg` | L'affiche GARAH générée par IA | Fiche Nano Banana + section « Une même idée » |
| `avant.jpg` | La photo « avant » du curseur | Fiche Nano Banana (curseur) |
| `apres.jpg` | La photo « après » du curseur | Fiche Nano Banana + expérience « Image » |

**Méthode la plus simple** : garde **exactement les mêmes noms de fichiers**. Remplace les fichiers par tes propres images → le site se met à jour sans toucher au code.

⚠️ Pour `avant.jpg` et `apres.jpg` : elles doivent avoir **les mêmes dimensions** (par ex. 960 × 640) sinon le curseur sera décalé.

## 3. Modifier les textes

Tous les textes sont dans **`index.html`**, et chaque section commence par un grand commentaire qui indique son nom. Cherche (Ctrl+F) :

- `SECTION 1 — ACCUEIL` : ta présentation, le titre, la phrase d'accroche ;
- `FICHE 1 : CHATGPT` / `FICHE 2 : NANO BANANA` / `FICHE 3 : CLAUDE` : présentations, capacités, prompts, réponses, limites ;
- `SECTION 4 — UNE MÊME IDÉE` : le pitch de GARAH ;
- `SECTION 5 — EXPÉRIMENTONS !` : les trois expériences ;
- `SECTION 8 — LES LIMITES` : la grande phrase et la liste.

Les **commentaires** `<!-- ... -->` sont ignorés par le navigateur : tu peux les laisser, ils t'aident à te repérer.

## 4. Changer les couleurs

Tout est dans `css/style.css`, bloc `:root` (thème sombre) et `:root[data-theme="clair"]` (thème clair) :

```css
--accent-chatgpt: #2dd4bf;      /* la couleur de ChatGPT */
--accent-nano-banana: #fbbf24;  /* la couleur de Nano Banana */
--accent-claude: #fb923c;       /* la couleur de Claude */
--accent-general: #8b9cf9;      /* la couleur du site */
```

## 5. Ajouter une icône qui n'existe pas encore

Le site contient 57 icônes Lucide. Pour en ajouter une :

1. Va sur **lucide.dev**, copie le code SVG de l'icône ;
2. Dans `index.html`, cherche `BIBLIOTHÈQUE D'ICÔNES` (tout en haut du `<body>`) ;
3. Ajoute un `<symbol>` sur le même modèle que les autres, par ex. `id="i-mon-icone"` ;
4. Utilise-la : `<svg class="icone"><use href="#i-mon-icone"></use></svg>`.

## 6. Tester en local

- **Le plus simple** : double-cliquer sur `index.html` — tout fonctionne hors ligne (polices, icônes, coloration) ;
- Avec un mini-serveur (optionnel) : `python3 -m http.server 8000` dans le dossier, puis ouvrir `http://localhost:8000`.

---

## 7. Déployer sur Vercel (gratuit)

Le site est **100 % statique** : aucun réglage spécial n'est nécessaire — Vercel le sert tel quel.

### Étape A — Mettre le code sur GitHub (main)

Le travail est poussé sur la branche `arena/01a0bfa7-israel` du dépôt GitHub. Pour le fusionner dans `main` :

1. Ouvre le dépôt sur GitHub ;
2. Onglet **Pull requests** → **New pull request** → base : `main`, compare : `arena/01a0bfa7-israel` ;
3. **Create pull request** → **Merge pull request**.

*(Alternative : dans Vercel, tu peux déployer directement la branche sans fusionner.)*

### Étape B — Importer dans Vercel

1. Va sur **vercel.com** → **Sign Up** → **Continue with GitHub** (autorise l'accès) ;
2. **Add New… → Project** ;
3. Choisis le dépôt **`israel`** → **Import** ;
4. Vercel détecte un site statique. **Ne change rien** :
   - Framework Preset : *Other*
   - Build Command : *(vide)*
   - Output Directory : *(vide / .)*
5. Clique **Deploy**.

Après ~30 secondes, ton site est en ligne : **`ton-projet.vercel.app`** — un lien à mettre dans ton exposé et à partager.

### Étape C — Les mises à jour

Chaque nouveau commit poussé sur GitHub **redéploie automatiquement** le site. Modifie un fichier, commit, pousse → le site en ligne se met à jour tout seul.

---

## 8. Check-list du jour J

- [ ] Ma photo ajoutée (section 1 de ce guide) ;
- [ ] Images remplacées par mes propres essais (si je l'ai fait) ;
- [ ] Site testé **hors ligne** sur clé USB (double-clic sur `index.html`) ;
- [ ] Mode présentation répété au moins une fois (touches ← → Esc) ;
- [ ] Démo interactive répétée : onglets, curseur Avant/Après, « Voir l'explication » ;
- [ ] Lien Vercel noté (secours si l'ordinateur de la salle change) ;
- [ ] Documents `docs/etape-01…08` relus pour l'explication du fonctionnement.
