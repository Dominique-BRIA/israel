/* ============================================================
   OUTILS.JS — les interactions de la section « Les outils »
   ------------------------------------------------------------
   Contenu :
     1. Le bouton « Voir l'explication » (fiche Claude)
     2. Le curseur Avant / Après (fiche Nano Banana)

   Rappel de la règle des 3 couches : ce fichier ne contient que
   du COMPORTEMENT. Le contenu est dans index.html, le design
   dans css/sections.css.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     1. LE BOUTON « VOIR L'EXPLICATION »
     Un clic ajoute (ou retire) la classe .ouvert sur le panneau
     d'explication : le CSS l'affiche ou le masque. On met aussi
     à jour aria-expanded, qui annonce l'état aux lecteurs
     d'écran, et le texte du bouton.
     ---------------------------------------------------------- */
  const bouton = document.getElementById('btn-explication');
  const bloc = document.getElementById('explication-code');

  if (bouton && bloc) {
    bouton.addEventListener('click', function () {
      const ouvert = bloc.classList.toggle('ouvert');
      bouton.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
      bouton.querySelector('.btn-explication-texte').textContent =
        ouvert ? "Masquer l'explication" : "Voir l'explication";
    });
  }

  /* ----------------------------------------------------------
     2. LE CURSEUR AVANT / APRÈS
     Les deux images sont superposées. L'image « avant » est
     rognée par la propriété CSS clip-path : inset(0 X% 0 0) veut
     dire « cache X % du côté droit ». Quand on déplace le
     curseur (un <input type="range"> invisible qui couvre toute
     l'image), on recalcule X et la position de la poignée.
     ---------------------------------------------------------- */
  document.querySelectorAll('[data-compare]').forEach(function (zone) {
    const curseur = zone.querySelector('.compare-curseur');
    const avant = zone.querySelector('.compare-avant');
    const poignee = zone.querySelector('.compare-poignee');

    function mettreAJour() {
      const position = curseur.value; // de 0 à 100
      // On révèle « position % » de l'image avant (depuis la gauche)
      avant.style.clipPath = 'inset(0 ' + (100 - position) + '% 0 0)';
      poignee.style.left = position + '%';
    }

    // L'événement 'input' se déclenche à chaque mouvement
    curseur.addEventListener('input', mettreAJour);
    mettreAJour(); // position initiale (50 %)
  });
});
