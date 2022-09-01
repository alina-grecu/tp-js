/* Générateur de citation 
    - Créez le fichier HTML (attention à la sémantique des balises)
    - Créez le fichier Css pour avoir un visuel le plus proche possible du mien. (font =
    satisfy)

    - Créez les variables nécessaires au projet, prenez 5 minutes pour réfléchir à un
    algorithme, cela vous donneras une idée de vos besoins.
    - Allez chercher $$tout les éléments à modifier dans le DOM et stockez les également.
    - Créez un tableau avec vos citations préférées ainsi que l’auteur correspondant.
    (une dizaine)
    - Créez un évènement sur le clique du bouton « nouvelle citation ».
    - Créez une fonction permettant d’aller piocher une citation aux hasard dans votre
    tableau
    - Créez une fonction permettant d’actualise la citation et l’auteur.
    - Je vous laisse penser à un système pour qu’une citation ne sorte pas deux
    fois de suite.
    - Vous devriez avoir toutes les armes pour avancer, renseignez vous bien sur les
    fonctions mathématiques, elles pourront vous être utiles.
    - Vous pourriez avoir besoin d’une boucle à un endroit et de connaitre la longueur de
    votre tableau. */

let quote = document.getElementsByClassName("citation")[0];
let author = document.getElementsByClassName("auteur")[0];
let btn = document.getElementsByClassName("button");


let quotes = [
    ["Ne demeure pas dans le passé, ne rêve pas du futur, concentre ton esprit sur le moment présent." , "- Buddha"],
    ["Ce que vous proposez, comme d'habitude, c'est de la poudre de perlimpinpin." , "- Emmanuel Macron"],
    ["N'est stupide que la stupidité.",  "- film Forrest Gump"],
    ["Il faut accepter les déceptions passagères, mais conserver l'espoir pour l'éternité." , "- Martin Luther King"],
    ["C'est pas parce qu'ils sont nombreux à avoir tort qu'ils ont raison." , "- Coluche"],
    ["Un intellectuel assis va moins loin qu'un con qui marche." , "- Michel Audiart"],
    ["L'avenir de la vie c'est la mort." , "- Nicole Ferroni"],
    ["La beauté est dans les yeux de celui qui regarde." , "- Oscar Wilde"],
    ["Le souvenir, c'est la présence invisible." , "- Victor Hugo"],
    ["C'est à une demi-heure d'ici. J'y suis dans dix minutes." , "- film Pulp Fiction"],
    ["Messire, messire, un sarrasin dans une charriote du diable ! c'est tout ferré y'a point d'boeuf pour tirer !" , "- film Les Visiteurs"]
]
console.table(quotes);

let displayed = [];

function randomQuote(quotes){
    if(displayed.length === 0){
        for(i = 0; i < quotes.length; i++)
        displayed.push(i);
    }
    var randIndex = Math.floor(Math.random()*displayed.length);
    var randItemIndex = displayed[randIndex];
    displayed.splice(randIndex, 1);
    return quotes[randItemIndex];
}
console.table(randomQuote(quotes));

quote.textContent = randomQuote(quotes);
author.textContent = randomQuote(quotes);
btn.addEventListener("click", randomQuote);