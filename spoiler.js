/*SPOILER
Voici comment va se dérouler notre bouton Spoiler :
- Un bouton s’affiche sur la page proposant d’afficher le message
- L’utilisateur clique sur le bouton, ce qui va activer une condition
• La variable hidden vaut true ? Dans ce cas, on affiche le message, on change
le texte du bouton en « Cacher », et on passe la variable hidden en false
• La variable hidden vaut false ? Dans ce cas, on cache le message, on change
le texte du bouton en « Afficher », et on passe la variable hidden en true */

let button = document.createElement("button");
button.textContent = "Afficher le message";
document.body.append(button);

var hidden = document.querySelector("button");
button.addEventListener("click", buttonAlert);

function buttonAlert(){
    if(hidden = true){
        button.textContent = "Cacher le message";
        alert("Un message");
        hidden = false;
    } else if(hidden = false){
        button.textContent = "Afficher le message";
        hidden = true;
    }
}