const form = document.getElementById("form"); // get l'élément de type form

form.addEventListener("submit", function(event) {
    var responseDiv = document.getElementById("output"); // initialise l'endroit ou sera envoyé la réponse

    var lastname = document.getElementById("lastname").value;
    if (lastname === "") {  // Vérifie les conditions pour le champ lastname
        event.preventDefault();
        responseDiv.textContent = "Veuillez entrer un nom";
        return;
    }
    
    var firstname = document.getElementById("firstname").value;    
    if (firstname === "") { // Vérifie les conditions pour le champ firstname
        event.preventDefault();
        responseDiv.textContent = "Veuillez entrer un prénom";
        return; 
    }


    var useremail = document.getElementById("useremail").value;
    if (!(/@.*\./).test(useremail)) {    // Vérifie si l'adresse email contient un caractère "@"
        event.preventDefault();
        responseDiv.textContent = "Veuillez entrer une adresse email valide";
        return; 
    }

    var birthdate = document.getElementById("birthdate").value;
    function estDateValide(dateString) {    // Vérifie si la date est valide
        var dateParts = dateString.split('/');
        var day = parseInt(dateParts[0], 10);
        var month = parseInt(dateParts[1], 10) - 1;
        var year = parseInt(dateParts[2], 10);
        var date = new Date(year, month, day);
        
        if (isNaN(date.getTime()) || dateString.trim() === "") {
            return false;
        }
        var formattedDate = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();
        return dateString === formattedDate;
    }

    function tenYears(date){    //Vérifie si la personne a au moins 10 ans
        var dateParts = date.split('/');
        var day = parseInt(dateParts[0], 10);
        var month = parseInt(dateParts[1], 10) - 1;
        var year = parseInt(dateParts[2], 10);
        var date = new Date(year, month, day);

        var now = new Date();
        var tenYears = new Date(now.getFullYear() - 10, now.getMonth(), now.getDate());
        return date < tenYears;
    }

    function twoUndredYears(date){
        var dateParts = date.split('/');
        var day = parseInt(dateParts[0], 10);
        var month = parseInt(dateParts[1], 10) - 1;
        var year = parseInt(dateParts[2], 10);
        var date = new Date(year, month, day);

        var now = new Date();
        var twoUndredYears = new Date(now.getFullYear() - 200, now.getMonth(), now.getDate());
        return date > twoUndredYears;
    }

    function existDate(date){   //Vérifie si la date existe déjà
        var dateParts = date.split('/');
        var day = parseInt(dateParts[0], 10);
        var month = parseInt(dateParts[1], 10) - 1;
        var year = parseInt(dateParts[2], 10);
        var date = new Date(year, month, day);

        var now = new Date();
        return date < now;
    }

    //appel des 3 fonctions de vérification de date
    if (! estDateValide(birthdate)){
        event.preventDefault();
        responseDiv.textContent = "Veuillez entrer une date valide";
        return;
    }

    if (! existDate(birthdate)){
        event.preventDefault();
        responseDiv.textContent = "La date rentrée n'existe pas encore";
        return;
    }

    if (! twoUndredYears(birthdate)){
        event.preventDefault();
        responseDiv.textContent = "La date rentrée est trop ancienne";
        return;
    }

    if (! tenYears(birthdate)){
        event.preventDefault();
        responseDiv.textContent = "Vous devez avoir plus de 10 ans pour vous inscrire";
        return;
    }

    var username = document.getElementById("username").value;
    if (username.length < 6) {  // Vérifier les conditions pour le champ username
        event.preventDefault();
        responseDiv.textContent = "Veuillez entrer un nom d'utilisateur";
        return; 
    }


    var userpwd = document.getElementById("userpwd").value;
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_\-;:!?\./\*&\$]).{12,}$/;
    if (! regex.test(userpwd)) {    //Vérifie si le mot de passe contient bien les informations requises
        event.preventDefault();
        responseDiv.textContent = "Le mot de passe doit contenir au moins 12 caractères, dont une majuscule, une minuscule, un chiffre et un caractère spécial";
        return;
    }
});