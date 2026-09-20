/* ============================================================
   EXPERIENCES.JS — les onglets de la section « Expérimentons ! »
   ------------------------------------------------------------
   Principe : un seul panneau visible à la fois. Cliquer sur un
   onglet masque les autres panneaux et montre le sien — comme
   des intercalaires dans un classeur.

   Détail accessibilité : les onglets utilisent les rôles ARIA
   (tablist / tab / tabpanel) et les flèches gauche/droite du
   clavier permettent de passer d'un onglet à l'autre, comme
   dans les vraies applications.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  const onglets = Array.prototype.slice.call(document.querySelectorAll('.onglet'));
  const panneaux = document.querySelectorAll('.panneau');

  function activer(ongletChoisi) {
    // On parcourt tous les onglets : le bon devient « actif »
    onglets.forEach(function (onglet) {
      const estCeluiChoisi = onglet === ongletChoisi;
      onglet.classList.toggle('actif', estCeluiChoisi);
      onglet.setAttribute('aria-selected', estCeluiChoisi ? 'true' : 'false');
      onglet.tabIndex = estCeluiChoisi ? 0 : -1; // navigation clavier propre
    });

    // Et on ne montre que le panneau correspondant
    panneaux.forEach(function (panneau) {
      const visible = panneau.id === ongletChoisi.dataset.cible;
      panneau.classList.toggle('actif', visible);
      panneau.hidden = !visible;
    });
  }

  onglets.forEach(function (onglet) {
    // Clic : on active l'onglet cliqué
    onglet.addEventListener('click', function () {
      activer(onglet);
    });

    // Clavier : les flèches gauche/droite changent d'onglet
    onglet.addEventListener('keydown', function (evenement) {
      if (evenement.key !== 'ArrowRight' && evenement.key !== 'ArrowLeft') {
        return; // on ignore les autres touches
      }
      evenement.preventDefault();

      const index = onglets.indexOf(onglet);
      const direction = evenement.key === 'ArrowRight' ? 1 : -1;
      const suivant = onglets[(index + direction + onglets.length) % onglets.length];

      suivant.focus(); // le focus suit, pour les lecteurs d'écran
      activer(suivant);
    });
  });
});
