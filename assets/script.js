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


//envoi backend
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    // Écouter l'événement de soumission du formulaire
    form.addEventListener("submit", async function(event) {
        event.preventDefault(); // Empêche la soumission normale du formulaire

        // Récupérer les données du formulaire
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries()); // Convertir FormData en un objet

        // Envoyer les données vers la fonction serverless sur Netlify
        try {
            const response = await fetch("/.netlify/functions/contactForm", {
                method: "POST", // Méthode HTTP utilisée
                headers: {
                    "Content-Type": "application/json" // Indiquer que les données sont en JSON
                },
                body: JSON.stringify(data) // Convertir les données en JSON et les envoyer dans le corps de la requête
            });

            // Convertir la réponse en JSON
            const result = await response.json();

            // Afficher un message de succès ou d'erreur
            if (response.ok) {
                alert("Le message a été envoyé avec succès !");
            } else {
                alert("Une erreur est survenue. Essayez à nouveau.");
            }
        } catch (error) {
            alert("Une erreur est survenue. Essayez à nouveau.");
        }
    });
});
