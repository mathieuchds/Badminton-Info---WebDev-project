document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginform');
    var responseDiv = document.getElementById('output');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(loginForm);

        var xhr = new XMLHttpRequest();

        xhr.onload = function() {
            if (xhr.status === 200) {
                responseDiv.textContent = xhr.responseText;
                if(xhr.responseText.substring(0, 7) == "Bonjour"){ // Affichage du message de bienvenu
                    loginForm.style.display = "none";
                    responseDiv.style.display = "flex";
                }
            } else {
                responseDiv.textContent = 'Erreur lors de la requête.';
            }
        };

        xhr.open('POST', loginForm.action);
        if(formData.get("username") === ""){
            formData.delete('username');
        }
        if(formData.get("userpwd") === ""){
            formData.delete('userpwd');
        }
        xhr.send(formData);
    });

});