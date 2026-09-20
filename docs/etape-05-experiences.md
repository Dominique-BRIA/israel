# Étape 5 — Une même idée + Expérimentons !

## « Une même idée, trois IA » (`#idee`)

- **Le pipeline visuel** : la carte GARAH (l'idée) → trois flèches → trois résultats côte à côte : un **texte** (ChatGPT), une **image** (Nano Banana, l'affiche déjà générée), du **code** (Claude, un mini `record` Java).
- **Le message pédagogique** : même point de départ, trois natures de résultats — c'est la tâche confiée au bon outil qui détermine le résultat, pas une IA « qui sait tout faire ».

## « Expérimentons ! » (`#experiences`)

- **Trois onglets** Texte | Image | Code. Un seul panneau visible à la fois.
- Chaque panneau suit le plan demandé : outil, domaine, prompt, résultat, ce que nous observons, **ce que l'expérience nous apprend** (encadré violet).
- **Le mécanisme** (`js/experiences.js`) : cliquer sur un onglet retire `.actif` partout puis la pose sur le bon onglet ET le bon panneau (repéré grâce à `data-cible`, un attribut personnalisé lu avec `onglet.dataset.cible`).

## Concepts à retenir

| Concept | En une phrase |
|---|---|
| Attribut `data-*` | Une information rangée dans le HTML, lue par JS via `dataset`. |
| Rôles ARIA (`tablist`, `tab`, `tabpanel`) | On annonce aux lecteurs d'écran que c'est un système d'onglets. |
| `tabIndex` | Ordre de navigation clavier des onglets (0 = actif, -1 = ignoré). |
| `hidden` | Attribut HTML standard qui masque un élément (complément du CSS). |

## Comment tester

Cliquer les trois onglets ; vérifier que le panneau change avec une petite animation. Bonus clavier : se placer sur un onglet avec Tab, puis utiliser ← et →.

## Exercice

Dans `index.html`, section `#panneau-texte`, remplace le prompt par un autre (« Explique le wifi à un élève de Seconde ») et adapte la réponse : tu verras que le contenu et le code sont bien séparés.
