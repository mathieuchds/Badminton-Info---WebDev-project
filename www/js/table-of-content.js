window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll(".article-section");
    var links = document.querySelectorAll('.table-of-contents li');
    var activeIndex = -1; // Indice de la section active

    sections.forEach(function(section, index) {
        var position = section.getBoundingClientRect();

        if (position.top <= window.innerHeight && position.bottom >= 0){ // Vérifie si une partie de la section est visible dans la fenêtre 
            if (activeIndex === -1 || position.top < sections[activeIndex].getBoundingClientRect().top) { // Si la section actuelle est plus haute que la section active précédente, met à jour l'indice
                activeIndex = index;
            } 
        }
    });

    links.forEach(function(link) {
        link.classList.remove('active');
    });

    if (activeIndex !== -1) {
        links[activeIndex].classList.add('active'); 
    }
});
