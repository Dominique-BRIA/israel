# Étape 6 — Comparaison, leçons et limites

## La comparaison (`#comparaison`)

- Le tableau demandé, avec des **icônes** au lieu de mots : coche (Lucide `check`) = capacité présente, tiret (`minus`) = absente. Chaque icône est doublée d'un texte invisible `.sr-only` (« Oui » / « Non ») pour les lecteurs d'écran.
- **Les colonnes gardent la couleur de leur outil**, la ligne survolée s'éclaircit.
- La note du bas rappelle la règle du projet : **pas de classement, pas de gagnant**.

Balises à connaître : `<table>`, `<thead>`, `<tbody>`, `<th scope="col|row">` (qui annonce si un en-tête concerne une colonne ou une ligne), `<caption>`.

## Les cinq leçons (`#appris`)

- Une liste ordonnée `<ol>` de cartes. **Les grands numéros 01, 02, 03… sont générés par le CSS** avec `counter-reset` / `counter-increment` et `content: counter(lecon, decimal-leading-zero)`. Aucun numéro écrit à la main !

## Les limites (`#limites`)

- Section volontairement **visuellement différente** : fond ambré, bordure d'alerte de 3 px, grande citation centrée — pour marquer les esprits à la fin de l'exposé.
- Six limites en cartes avec icônes d'alerte, puis une note finale sur l'esprit critique.

## Comment tester

1. Survoler les lignes du tableau ; le réduire sur mobile → il défile horizontalement (`overflow-x: auto` sur `.tableau-ombre`) ;
2. Vérifier les grands numéros des leçons ;
3. Constater que la section « Limites » a une ambiance différente du reste du site.

## Exercice

Ajoute une ligne au tableau (par ex. « Traduction » : ChatGPT ✓, Nano Banana —, Claude ✓) en recopiant le motif d'une ligne existante.
