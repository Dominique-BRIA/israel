/* ============================================================
   MAIN.JS — les comportements généraux de la page
   ------------------------------------------------------------
   Contenu :
     1. L'année du pied de page (mise à jour automatique)
     2. Le menu « burger » (mobile)
     3. La bascule thème clair / sombre (mémorisée)
     4. Les apparitions au défilement (IntersectionObserver)
     5. Le « espion de défilement » : le lien de la navbar qui
        correspond à la section visible s'allume

   VOCABULAIRE :
   - DOM       : la représentation en mémoire de la page HTML,
                 que JavaScript peut lire et modifier.
   - événement : quelque chose qui arrive (clic, touche, page
                 chargée…) et auquel on peut réagir.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     1. L'ANNÉE DU PIED DE PAGE
     On cherche l'élément qui porte l'id "annee" et on y écrit
     l'année courante : le site reste à jour tout seul.
     ---------------------------------------------------------- */
  const annee = document.getElementById('annee');
  if (annee) {
    annee.textContent = new Date().getFullYear();
  }

  /* ----------------------------------------------------------
     2. LE MENU BURGER (mobile)
     classList.toggle : la classe existe ? on l'enlève. Elle
     n'existe pas ? on l'ajoute. Le CSS fait le reste (menu
     déroulant visible seulement si .navbar a .ouverte).
     ---------------------------------------------------------- */
  const burger = document.getElementById('btn-burger');
  const navbar = document.querySelector('.navbar');

  if (burger && navbar) {
    burger.addEventListener('click', function () {
      const ouvert = navbar.classList.toggle('ouverte');
      burger.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
    });

    // Fermer le menu quand on choisit un lien
    document.querySelectorAll('.nav-liens a').forEach(function (lien) {
      lien.addEventListener('click', function () {
        navbar.classList.remove('ouverte');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----------------------------------------------------------
     3. LA BASCULE THÈME CLAIR / SOMBRE
     On pose (ou retire) l'attribut data-theme="clair" sur <html>.
     Le CSS (style.css) contient toutes les couleurs claires sous
     :root[data-theme="clair"] : c'est LUI qui fait le travail.
     localStorage : une petite mémoire du navigateur — le choix
     est conservé d'une visite à l'autre.
     ---------------------------------------------------------- */
  const btnTheme = document.getElementById('btn-theme');
  const racine = document.documentElement;

  function appliquerTheme(theme) {
    if (theme === 'clair') {
      racine.setAttribute('data-theme', 'clair');
    } else {
      racine.removeAttribute('data-theme'); // le thème sombre est le défaut
    }
    try {
      localStorage.setItem('theme', theme); // on mémorise le choix
    } catch (e) {
      // localStorage peut être bloqué (navigation privée) :
      // pas grave, le thème marche quand même sans mémoire.
    }
  }

  // Au chargement : le thème mémorisé, sinon le thème sombre
  try {
    const memoire = localStorage.getItem('theme');
    if (memoire === 'clair') {
      appliquerTheme('clair');
    }
  } catch (e) { /* pas de mémoire disponible : on reste en sombre */ }

  if (btnTheme) {
    btnTheme.addEventListener('click', function () {
      const estClair = racine.getAttribute('data-theme') === 'clair';
      appliquerTheme(estClair ? 'sombre' : 'clair');
    });
  }

  /* ----------------------------------------------------------
     4. LES APPARITIONS AU DÉFILEMENT
     IntersectionObserver = « préviens-moi quand un élément entre
     dans l'écran ». On ajoute alors la classe .visible, et le
     CSS anime l'apparition (transition prévue dans style.css).
     C'est doux, léger, et désactivé automatiquement pour les
     personnes qui ont réduit les animations (prefers-reduced-motion).
     ---------------------------------------------------------- */
  const observateur = new IntersectionObserver(function (entrees) {
    entrees.forEach(function (entree) {
      if (entree.isIntersecting) {
        entree.target.classList.add('visible');
        observateur.unobserve(entree.target); // une seule fois suffit
      }
    });
  }, { threshold: 0.12 }); // déclenche quand 12 % de l'élément est visible

  document.querySelectorAll('.reveal').forEach(function (el) {
    observateur.observe(el);
  });

  /* ----------------------------------------------------------
     5. L'ESPION DE DÉFILEMENT (scroll-spy)
     Quand une section occupe le milieu de l'écran, on allume le
     lien correspondant dans la navbar (classe .actif).
     rootMargin resserre la « zone de détection » au milieu.
     ---------------------------------------------------------- */
  const liens = Array.prototype.slice.call(document.querySelectorAll('.nav-liens a'));

  const espion = new IntersectionObserver(function (entrees) {
    entrees.forEach(function (entree) {
      if (!entree.isIntersecting) return;
      const cible = '#' + entree.target.id;
      liens.forEach(function (lien) {
        lien.classList.toggle('actif', lien.getAttribute('href') === cible);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  document.querySelectorAll('main > section[id]').forEach(function (section) {
    espion.observe(section);
  });
});
