window.addEventListener('load', () => { 
    var menuButton = document.getElementById("menuButton");
    var menuContent = document.getElementById("menuContent");
    var darker = document.getElementById("overlay"); // Filtre sombre

    menuButton.addEventListener("click", () => { // Lorsque l'on clique sur le bouton
        if (menuContent.style.display === "block") {
            menuContent.style.display = "none";
            darker.style.display = "none"; // Filtre sombre
        } else {
            menuContent.style.display = "block";
            darker.style.display = "block"; // Filtre sombre
        }
    });
});