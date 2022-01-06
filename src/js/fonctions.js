function slider()
{
    const sliders = document.querySelectorAll('.slider'); // Récupération de tout les sliders sur la page
    if (sliders.length > 0) { // Test si minimum 1 slider existe sur la page
        tns({
            items: 2,
            center: true,
            loop: true,
            startIndex: 1,
            swipeAngle: false,
            speed: 400,
            nav: false,
            gutter: 15,
            controlsText: [
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"/></svg>', 
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/></svg>'
            ],
        }); // Lancement du slider avec les options choisies
    }
}

/**
 * Attend que le DOM soit chargé
 */
document.addEventListener("DOMContentLoaded", function() {
    slider(); // exécute la function slider
});