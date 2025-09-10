window.onload = () => {
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const useremail = document.getElementById("useremail");
    const birthdate = document.getElementById("birthdate");
    const userpwd = document.getElementById("userpwd");
    const username = document.getElementById("username");



    function FieldManagmentName(field) { // Gére la validité de nom/prenom
        if (field.value == "") {
            field.style.border = "2px solid #cc0000";
        } else {
            field.style.border = "2px solid green";
        }
    }

    function FieldManagmentEmail(field) { // Gére la validité de l'email
        if ((field.value == "") || (!(/@.*\./).test(field.value))) {
            field.style.border = "2px solid #cc0000";
        } else {
            field.style.border = "2px solid green";
        }
    }

    // Gestion date // 

    function estDateValide(dateString) {

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

    function tenYears(date) {
        var dateParts = date.split('/');
        var day = parseInt(dateParts[0], 10);
        var month = parseInt(dateParts[1], 10) - 1;
        var year = parseInt(dateParts[2], 10);
        var date = new Date(year, month, day);

        var now = new Date();
        var tenYears = new Date(now.getFullYear() - 10, now.getMonth(), now.getDate());
        return date < tenYears;
    }

    function existDate(date) {
        var dateParts = date.split('/');
        var day = parseInt(dateParts[0], 10);
        var month = parseInt(dateParts[1], 10) - 1;
        var year = parseInt(dateParts[2], 10);
        var date = new Date(year, month, day);

        var now = new Date();
        return date < now;
    }

    function oneUndredYears(date) {
        var dateParts = date.split('/');
        var day = parseInt(dateParts[0], 10);
        var month = parseInt(dateParts[1], 10) - 1;
        var year = parseInt(dateParts[2], 10);
        var date = new Date(year, month, day);

        var now = new Date();
        var oneUndredYears = new Date(now.getFullYear() - 200, now.getMonth(), now.getDate());
        return date > oneUndredYears;
    }

    function FieldManagmentDate(field) {
        if ((!estDateValide(field.value)) || (!existDate(field.value)) || (!tenYears(field.value)) || (!oneUndredYears(field.value))) {
            field.style.border = "2px solid #cc0000";
        } else {
            field.style.border = "2px solid green";
        }
    }

    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_\-;:!?\./\*&\$]).{12,}$/;
    function FieldManagmentPassword(field) { // Gestion couleur mdp
        if ((field.value == "") || (!regex.test(field.value))) {
            field.style.border = "2px solid #cc0000";
        } else {
            field.style.border = "2px solid green";
        }
    }

    function FieldManagmentUsername(field) { // Gestion couleur username
        if (field.value.length < 6) {
            field.style.border = "2px solid #cc0000";
        } else {
            field.style.border = "2px solid green";
        }
    }

    firstname.addEventListener("blur", function () { // Gestion couleur prénom
        FieldManagmentName(firstname)
    });
    firstname.addEventListener("keyup", function () {
        FieldManagmentName(firstname)
    });
    lastname.addEventListener("blur", function () { // Gestion couleur nom
        FieldManagmentName(lastname)
    });
    lastname.addEventListener("keyup", function () {
        FieldManagmentName(lastname)
    });
    userpwd.addEventListener("blur", function () { // Gestion mdp
        FieldManagmentPassword(userpwd)
    });
    userpwd.addEventListener("keyup", function () {
        FieldManagmentPassword(userpwd)
    });
    useremail.addEventListener("blur", function () { // Gestion couleur email
        FieldManagmentEmail(useremail)
    });
    useremail.addEventListener("keyup", function () {
        FieldManagmentEmail(useremail)
    });
    birthdate.addEventListener("blur", function () { // Gestion couleur date
        FieldManagmentDate(birthdate)
    });
    birthdate.addEventListener("keyup", function () {
        FieldManagmentDate(birthdate)
    });
    username.addEventListener("blur", function () { // Gestion couleur username
        FieldManagmentUsername(username)
    });
    username.addEventListener("keyup", function () {
        FieldManagmentUsername(username)
    });
}