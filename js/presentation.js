/* ============================================================
   PRESENTATION.JS — le mode présentation (pour l'exposé)
   ------------------------------------------------------------
   Principe (à savoir expliquer le jour J) :
   1. DIAPOS est la liste ordonnée des « diapositives ». Chaque
      entrée désigne un élément de la page (un sélecteur CSS).
      Les fiches d'outils sont des diapositives à l'intérieur de
      la section #outils : pour elles, on précise « parent »,
      la section conteneur qu'il faut aussi afficher.
   2. entrer() : on ajoute la classe « mode-presentation » à
      <body> (le CSS masque alors tout sauf la diapo active) et
      on demande le plein écran au navigateur.
   3. afficher(i) : on retire .diapo-active partout, puis on la
      pose sur la diapo i (et sur son parent s'il y en a un).
   4. Le clavier pilote tout : ← précédent, → suivant (ou la
      barre d'espace), Esc pour quitter.
   ============================================================ */

(function () {
  'use strict';

  // La liste des diapositives, dans l'ordre de l'exposé
  const DIAPOS = [
    { sel: '#accueil' },                      // 1. Titre + présentation
    { sel: '#mission', parent: null },        // 2. La mission
    { sel: '#chatgpt',    parent: '#outils' },// 3. Fiche ChatGPT
    { sel: '#nano-banana', parent: '#outils' },// 4. Fiche Nano Banana
    { sel: '#claude',     parent: '#outils' },// 5. Fiche Claude
    { sel: '#idee' },                         // 6. Une même idée, trois IA
    { sel: '#experiences' },                  // 7. Expérimentons ! (onglets)
    { sel: '#comparaison' },                  // 8. Le tableau
    { sel: '#appris' },                       // 9. Les leçons
    { sel: '#limites' }                       // 10. Les limites
  ];

  const bouton = document.getElementById('btn-presentation');
  const compteur = document.getElementById('diapo-compteur');
  const btnPrec = document.getElementById('diapo-prec');
  const btnSuiv = document.getElementById('diapo-suiv');
  const btnQuitter = document.getElementById('diapo-quitter');

  let index = 0;
  let modeActif = false;

  /* Affiche la diapositive numéro i (les bornes sont protégées) */
  function afficher(i) {
    index = Math.max(0, Math.min(DIAPOS.length - 1, i));

    // On nettoie l'ancienne diapositive
    document.querySelectorAll('.diapo-active').forEach(function (el) {
      el.classList.remove('diapo-active');
    });

    // On active la nouvelle (et son parent s'il existe)
    const diapo = DIAPOS[index];
    const element = document.querySelector(diapo.sel);
    if (!element) return;

    if (diapo.parent) {
      document.querySelector(diapo.parent).classList.add('diapo-active');
    }
    element.classList.add('diapo-active');

    // Le compteur « 3 / 10 »
    if (compteur) {
      compteur.textContent = (index + 1) + ' / ' + DIAPOS.length;
    }

    // On remonte en haut de la diapositive
    window.scrollTo(0, 0);
  }

  function entrer() {
    modeActif = true;
    document.body.classList.add('mode-presentation');
    afficher(0);
    // Plein écran (si le navigateur l'autorise — sinon on
    // continue simplement sans plein écran)
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(function () {
        /* refusé : pas grave */
      });
    }
  }

  function sortir() {
    modeActif = false;
    document.body.classList.remove('mode-presentation');
    document.querySelectorAll('.diapo-active').forEach(function (el) {
      el.classList.remove('diapo-active');
    });
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(function () { /* refusé : pas grave */ });
    }
  }

  function suivant() { afficher(index + 1); }
  function precedent() { afficher(index - 1); }

  /* Les boutons de la barre flottante */
  if (bouton) {
    bouton.addEventListener('click', function () {
      modeActif ? sortir() : entrer();
    });
  }
  if (btnSuiv)   { btnSuiv.addEventListener('click', suivant); }
  if (btnPrec)   { btnPrec.addEventListener('click', precedent); }
  if (btnQuitter){ btnQuitter.addEventListener('click', sortir); }

  /* LE CLAVIER — le cœur du mode présentation */
  document.addEventListener('keydown', function (evenement) {
    if (!modeActif) return; // hors mode présentation, on ne fait rien

    // Si le focus est dans un curseur (Avant/Après), les flèches
    // doivent continuer à le piloter, pas changer de diapo.
    const cible = evenement.target;
    if (cible.closest && cible.closest('input, textarea, select')) {
      return;
    }

    switch (evenement.key) {
      case 'ArrowRight':
      case 'PageDown':
        evenement.preventDefault(); // pas de défilement manuel
        suivant();
        break;
      case ' ':
        // La barre d'espace avance — sauf si on est sur un bouton
        // (sinon on « cliquerait » ce bouton par accident)
        if (cible.closest && cible.closest('button, a')) return;
        evenement.preventDefault();
        suivant();
        break;
      case 'ArrowLeft':
      case 'PageUp':
        evenement.preventDefault();
        precedent();
        break;
      case 'Home':
        evenement.preventDefault();
        afficher(0);
        break;
      case 'End':
        evenement.preventDefault();
        afficher(DIAPOS.length - 1);
        break;
      case 'Escape':
        sortir();
        break;
    }
  });
})();
