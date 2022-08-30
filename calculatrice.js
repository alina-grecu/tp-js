/* Pour voir si tout vas bien jusque ici nous allons créer un calculateur en boite de dialogue
(une sorte de calculatrice simplifiée).
Objectif :
- Demandez de faire un choix entre addition – soustraction – multiplication – division
- Indice : pour un retour à la ligne « \n » tant que l’utilisateur ne choisis pas une des quatre
proposition il serait bien de répéter la question.
- Demandez de rentrer un nombre, puis un deuxieme
- Indice : Répéter la demande si un nombre n’est pas rentré, je vous laisse chercher la
fonction qui permet de checker cela.
- Crée 4 fonctions correspond aux 4 méthodes de calculs
- Selon le choix de l’utilisateur appelé la fonction correspondante
- Affichez le résultat
- Proposez à l’utilisateur de recommencer */


function calcul(){
    do {
        var proposition = prompt("Choisir entre addition,\n soustraction,\n multiplication,\n division")
    } while (proposition !== "addition" && proposition !== "soustraction" && proposition !== "multiplication" && proposition !== "division" || proposition == null);
    
    do {
        var nb1 = prompt("Choisissez un premier nombre");
    } while (nb1 == "");

    do {
        var nb2 = prompt("Choisissez un deuxième nombre");
    } while (nb2 == "");
    
    function addition(nb1, nb2) {
        let res1 = (Number(nb1) + Number(nb2));
        alert(res1);
    }
    function soustraction(nb1, nb2) {
        let res2 = (Number(nb1) - Number(nb2));
        alert(res2);
    }
    function multiplication(nb1, nb2) {
        let res3 = (Number(nb1) * Number(nb2));
        alert(res3);
    }
    function division(nb1, nb2) {
        let res4 = (Number(nb1) / Number(nb2));
        alert(res4);
    }
    if(proposition == "addition"){
        addition(nb1, nb2);
    }
    if(proposition == "soustraction"){
        soustraction(nb1,nb2);
    }
    if(proposition == "multiplication"){
        multiplication(nb1,nb2);
    }
    if(proposition == "division"){
        division(nb1,nb2);
    }
}
function main(){
    recommencer = true;
    while(recommencer) {
        calcul();
        recommencer = confirm("Voulez-vous recommencer ?")
    }
}

main();
