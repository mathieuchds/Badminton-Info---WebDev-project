document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.icon-accordion-header');
        const content = item.querySelector('.accordion-content');

        header.addEventListener('click', () => { // Dépli et repli les sous parties du menu 
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.accordion-content').classList.remove('active');
                }
            });

            content.classList.toggle('active');
        });
    });
});
