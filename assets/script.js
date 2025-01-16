document.addEventListener('DOMContentLoaded', function() {
    setupSidebarVisibility();   // Fonction pour gérer la visibilité de la sidebar
    setupScrollToSection();     // Fonction pour gérer le clic sur le bouton et le défilement
    typeMessage();              // Fonction pour l'effet de frappe du message de bienvenue
});

// Fonction pour gérer la visibilité de la sidebar
function setupSidebarVisibility() {
    const sidebar = document.querySelector('.sidebar');
    const premierePageSection = document.querySelector('#premierepage');

    const mediaQuery = window.matchMedia('(max-width: 1024px)'); // Vérifie la largeur de l'écran (mobile)

    // Observer pour la section "premierepage"
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.id === 'premierepage') {
                sidebar.style.display = 'none'; // Masquer la sidebar sur la première page
            } else {
                if (!mediaQuery.matches) {  // La sidebar s'affiche sur grand écran uniquement
                    sidebar.style.display = 'flex';
                }
            }
        });
    }, { root: null, threshold: 0.1 });

    observer.observe(premierePageSection); // Observer la section "premierepage"

    // Cacher la sidebar si l'écran est petit dès le début
    if (mediaQuery.matches) {
        sidebar.style.display = 'none';
    }
}

// Fonction pour le défilement vers la section "faisonsconnaissance" au clic
function setupScrollToSection() {
    const button = document.querySelector('#goToFaisonsConnaissance');
    const targetSection = document.querySelector('#faisonsconnaissance');

    button.addEventListener('click', () => {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Faire défiler en douceur vers la section
    });
}

// Fonction pour l'effet de machine à écrire
function typeMessage() {
    const welcomeMessage = "Bienvenue sur mon portfolio";
    const welcomeElement = document.getElementById('welcome-message');

    let index = 0;

    function typeWriterEffect() {
        if (index < welcomeMessage.length) {
            welcomeElement.innerHTML += welcomeMessage.charAt(index);
            index++;
            setTimeout(typeWriterEffect, 100); // Ajustez le délai pour la vitesse de l'effet
        }
    }

    typeWriterEffect(); // Commence à taper le message
}


   // Fonction pour ouvrir la modale
   function openModal() {
    document.getElementById('videoModal').style.display = 'block';
}

// Fonction pour fermer la modale
function closeModal() {
    document.getElementById('videoModal').style.display = 'none';
}