function console() {
    console.log("hello world");
}

console();
console.log("hello world");

/* Une fonction qui calcule l'imc d'une personne,
    Deux paramètre poid et taille
    la formule poid en kg/ taille² en metre

Une entrée en kg
une entrée en cm donc conversion en m
faire un calcul pour l'imc et afficher le résultat à l'arrondis supérieur
1 chiffre après la virgule.
*/

function imc(poids, taille) {
    let tailleM = taille /100;
    let result = poids / (tailleM*tailleM);
    console.log(result);
}
let poids = prompt("Quel est votre poids en kg ?");
let taille = prompt("Quelle est votre taille en cm");

imc();

/*
    Une fonction qui prend l'heure en entrée 
    et qui renvoie selon l'heure c'est le matin,
    c'est l'après-midi c'est le soir.
    Fait une première version en pseudo code 
*/

function hour(h){
    if (h < 12) {
    console.log("C'est le matin");
    }
    else if (h >= 12 && h < 18) {
    console.log("C'est l'après midi");
    }
    else {
    console.log("c'est le soir");
    }
}

hour(19);

/*
    Faite une comparaison en utilisant un switch sur une variable prénom
    dans le switch vous pouvez checker 3 prénom de fille et 3 garçons
    votre programme demande un prénom
    si vous entrez un des 3 alors console log vous ete un garçon
    pareille pour fille
    sinon console log invalide ou prénom non reconnus
    comparaison insensibles a la casse

    Bonus pour une ternaire moins de 18 ans majeur : mineur*/

var prenom = prompt("Entrer un prénom");
prenom = prenom.toLowerCase();
switch (prenom) {
    case "emma":
    case "marie":    
    case "julie":
        console.log("prénom fille");
        break;
    case "paul":
    case "louis":
    case "jules":
        console.log("prénom garçon");
        break;
    default:
        console.log("Nom introuvable");
        break;
}

/*
Avec la boucle dowhile demandez un prénom jusqu'à l'obtenir
Bonus
Avec un confirm() reposer la question tant que l'utilisateur dit non 

*/

do {
   var prenom = prompt("Ecrire un prénom")
} while (prenom === "" || prenom === null);
console.log(prenom);

/*Pour ce petit tp vous allez créer votre propre erreur à l’aide de « throw new Error() »
- Créez un programme qui demande à l’utilisateur de choisir entre 3 sorts (boule
de feu – trait de glace et chaine d’éclair).
- boule de feu = 40 dégats, trait de glace = 35 dégats et chaine d’éclair = 25 dégat.
- Si l’utilisateur choisis l’un de ses trois sorts, une alerte apparait disant que vous
avez choisis le « nom du sort » qui fait les dégats annoncé ci-desus.
- Si l’utilisateur choisis un sort autre que les trois ci-dessus, vous créez une erreur
et l’affichez.
« Switch case » vous sera utile pour cette exercice.*/

