console.log("hello world");
var nom = "grecu";
var prenom = "alina";
console.log(nom + ' ' + prenom);

//littéraux de gabarits
console.log(`${nom} ${prenom}`);

//boite de dialogue
alert("attention !");
confirm("confirmer ?");

var confirmer = confirm("confirmer ?");
if (confirmer == true) {
   alert("ok")
}
else {
   alert("pas ok")
};

var question = prompt("ecrire quelque chose");
console.log(question);

var nom = prompt("comment tu t'appelles ?");
if (nom.length < 1 || nom.length > 10) {
   alert("erreur")
}
else {
    console.log("Bonjour " + nom) 
};

/*
    Crée une variable nombre et affecte lui un chiffre ou un nombre
    console.log le type de la variable
    Convertie la variable nombre en STRING
    affiche le 
    Crée une variable chaineDeCaractere et affecte lui un texte
    affiche le 
    Convertie la variable en nombre
    affiche le
    Quel est le ton constat ?
    
    bonus
    Trouve trois façon de convertir 
*/

let nombre = 10;
console.log(typeof nombre);
String(nombre);
console.log(typeof String(nombre));

let chaineDeCharacteres = "texte";
chaineDeCharacteres = "2";
console.log(chaineDeCharacteres);
Number(chaineDeCharacteres);
console.log(Number(chaineDeCharacteres));