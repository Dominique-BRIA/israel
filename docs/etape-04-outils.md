# Étape 4 — Les trois fiches d'outils

> Sections construites : « Les outils » (ChatGPT, Nano Banana, Claude).

## Ce qui a été créé

- **Trois fiches jumelles** (`#chatgpt`, `#nano-banana`, `#claude`) avec exactement la même structure : en-tête coloré, présentation, capacités, démonstration, limites. *Une même structure répétée = un « composant ».*
- **Les boîtes Prompt / Réponse** : le prompt en pointillés (ce que l'humain demande), la réponse sur fond sombre (ce que l'IA renvoie).
- **La fenêtre de code** avec la **coloration syntaxique** : la bibliothèque **Prism** (licence MIT) est intégrée en local dans `assets/vendor/prism/`. La classe `language-java` sur la balise `<code>` déclenche la coloration.
- **Les images de démonstration**, générées par IA :
  - `garah-affiche.jpg` — l'affiche demandée dans le prompt ;
  - `avant.jpg` / `apres.jpg` — le même camion avant/après modification.
- **Le curseur Avant/Après** : les deux images sont superposées ; celle de gauche est *rognée* en temps réel par la propriété CSS `clip-path`, pilotée par un `<input type="range">` invisible qui couvre toute l'image. On peut donc glisser n'importe où — et les flèches du clavier fonctionnent aussi.
- **Le bouton « Voir l'explication »** (fiche Claude) : un clic pose la classe `.ouvert` sur le panneau ; le CSS l'affiche. `aria-expanded` annonce l'état aux lecteurs d'écran.

## Concepts à retenir

| Concept | En une phrase |
|---|---|
| Composant | Un bloc HTML+CSS+JS construit une fois et répété (les 3 fiches utilisent les mêmes classes). |
| `repeat(auto-fit, minmax(150px, 1fr))` | Grille qui crée toute seule autant de colonnes que possible. |
| Bibliothèque « vendor » | Code écrit par d'autres, stocké tel quel dans `assets/vendor/` (ne pas modifier). |
| `clip-path: inset(0 X% 0 0)` | Rognage dynamique d'un élément (le cœur du curseur Avant/Après). |
| `classList.toggle()` | Ajoute une classe si absente, la retire si présente. |

## Comment tester

1. Cliquer sur les cartes de la mission → elles mènent à leur fiche ;
2. Faire glisser le curseur Avant/Après (souris, doigt, flèches du clavier) ;
3. Cliquer « Voir l'explication » → le panneau s'ouvre, la flèche tourne, le texte du bouton change ;
4. Vérifier que le code Java est bien coloré (mots-clés en couleur).

## Exercice

Dans `css/style.css`, change `--accent-claude` (par ex. `#e879f9` rose) et observe tout ce qui change dans la fiche Claude. Remets l'orange ensuite.
