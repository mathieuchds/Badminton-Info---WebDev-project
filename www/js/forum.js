document.addEventListener('DOMContentLoaded', function() {
    var Form = document.getElementById('form');
    var responseDiv = document.getElementById('out');

    Form.addEventListener('submit', function(event) {

        event.preventDefault();

        var formData = new FormData(Form);

        var xhr = new XMLHttpRequest(); 

        xhr.onload = function() {
            if (xhr.status === 200) {
                responseDiv.style.display = "block";
                responseDiv.textContent = 'Message envoyé !';
                setTimeout(function() {
                    responseDiv.style.display = "none";
                }, 10000); 
            } else {
                responseDiv.textContent = 'Erreur lors de la requête.';
            }
        };

        xhr.open('POST', Form.action);
        xhr.send(formData);
        getMessagesFromServer();
    });
});

function getMessagesFromServer() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Traiter la réponse du serveur
                var messages = JSON.parse(xhr.responseText);
                displayMessages(messages);
            } else {
                console.error('Erreur lors de la requête:', xhr.status);
            }
        }
    };
    xhr.open('GET', '../htbin/chatget.py', true);
    xhr.send();
}

// Fonction pour afficher les messages sur la page
function displayMessages(messages) {
    messages.reverse();
    var messagesDiv = document.getElementById('output');
    while (messagesDiv.firstChild){
        messagesDiv.removeChild(messagesDiv.firstChild);
    }
    //messagesDiv = document.createElement("output");

    messages.forEach(function(message) {
        var finalmessage = document.createElement('div');
        finalmessage.className = "block-message"
        var messageinfo = document.createElement('div');
        messageinfo.className = "info-message"

        var messagenom = document.createElement('p');
        messagenom.className = "nom";
        messagenom.textContent = message.user;
        messageinfo.appendChild(messagenom);

        var messageheure = document.createElement('p');
        messageheure.className = "heure";
        messageheure.textContent = message.time;
        messageinfo.appendChild(messageheure);

        var messagedate = document.createElement('p');
        messagedate.className = "date";
        messagedate.textContent = message.date;
        messageinfo.appendChild(messagedate);

        finalmessage.appendChild(messageinfo);

        var messageelement = document.createElement('p');
        messageelement.className = "message";
        messageelement.textContent = message.msg;
        finalmessage.appendChild(messageelement);

        messagesDiv.appendChild(finalmessage);
    });
}

// Appeler la fonction pour récupérer les messages lorsque la page est chargée
window.onload = function() {
    getMessagesFromServer();
};
