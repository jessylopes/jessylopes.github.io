document.addEventListener('DOMContentLoaded', function() {
    setupSidebarVisibility();   // Fonction pour gérer la visibilité de la sidebar
    setupScrollToSection();     // Fonction pour gérer le clic sur le bouton et le défilement
});

// Fonction pour gérer la visibilité de la sidebar
function setupSidebarVisibility() {
    const sidebar = document.querySelector('.sidebar');
    const premierePageSection = document.querySelector('#premierepage');

    sidebar.style.display = 'none'; // Masque la sidebar par défaut

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.id === 'premierepage') {
                sidebar.style.display = 'none'; // Masquer la sidebar sur la première page
            } else {
                sidebar.style.display = 'flex'; // Afficher la sidebar sur les autres sections
            }
        });
    }, { root: null, threshold: 0.1 });

    observer.observe(premierePageSection); // Observer la section "premierepage"
}

// Fonction pour le défilement vers la section "faisonsconnaissance" au clic
function setupScrollToSection() {
    const button = document.querySelector('#goToFaisonsConnaissance');
    const targetSection = document.querySelector('#faisonsconnaissance');

    button.addEventListener('click', () => {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Faire défiler en douceur vers la section
    });
}

// Fonction pour ecriture machine a ecrire 
document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = "Bienvenu sur mon portfolio";
    const welcomeElement = document.getElementById('welcome-message');

    let index = 0;

    function typeMessage() {
        if (index < welcomeMessage.length) {
            welcomeElement.innerHTML += welcomeMessage.charAt(index);
            index++;
            setTimeout(typeMessage, 100); // Ajustez le délai pour la vitesse de l'effet
        }
    }

    typeMessage(); // Commence à taper le message
});












