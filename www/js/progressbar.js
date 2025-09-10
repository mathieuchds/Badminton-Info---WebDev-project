window.onload = () => {
    window.addEventListener("scroll", ()=> {
        let hauteur = document.documentElement.scrollHeight - window.innerHeight; // hauteur du document
        let position = window.scrollY; // Récupère la position où on est
        let largeur = document.documentElement.clientWidth; // Récupère la largeur de la fenetre
        let barre = (position / hauteur) * largeur; // Calcul l'avancement de la barre

        document.getElementById("nav_progress_bar").style.width = barre + "px";
    });
};