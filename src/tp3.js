/** TP3: Les objets
  Nous allons déplacer les variables créée précédemment dans des objets.
  Déclarez un objet Personne avec les propriétés nom, prénom et age. N'oubliez pas le constructeur et déclarez les variables avec this .
    Ajoutez une méthode toString() affichant ces propriétés.
  Déclarez un objet Enfant héritant de Personne et ajoutez lui une propriété contenant la classe (niveau scolaire).
    Pour appeler le constructeur parent, vous pouvez utiliser la fonction Objet.call(scope, args...)
    Redéfinissez la méthode toString() pour qu'elle affiche également le niveau scolaire.
  Déclarez un objet Adulte héritant de Personne et ajoutez lui la propriété pour le permis de conduire.
    Pour appeler le constructeur parent, vous pouvez utiliser la fonction Objet.call(scope, args...)
    Redéfinissez la méthode toString() pour qu'elle affiche également l'obtention du permis de conduire.
  Créez des objets enfants et adultes, puis affichez-les en appelant leur méthode toString() .
  A la suite de ces appels, modifiez le nom d'un adulte en accédant directement à sa propriété, puis affichez de nouveau cet adulte
    Que constatez-vous ?
  Modifiez les propriétés de vos objets en en faisant des "variables privées" (en utilisant var ), réexécutez votre code
    Que constatez-vous ?
**/

function Personne(nom, prenom, age){
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.toString = function() {
    return this.nom + " " + this.prenom + " " + this.age;
  }
}

function Enfant(nom, prenom, age, niveauScolaire){
  Personne.call(this, nom, prenom, age);
  this.niveauScolaire = niveauScolaire || "nul";
  this.toString = function() {
    return this.nom + " " + this.prenom + " " + this.age+ " niveau:"+ this.niveauScolaire;
  }
}

function Adulte(nom, prenom, age, permis){
 Personne.call(this, nom, prenom, age);
 this.permis = permis || false;
 this.toString = function() {
   return this.nom + " " + this.prenom + " " + this.age+ " permis"+ this.permis;
 }
}

module.exports = {
  Personne: Personne,
  Enfant: Enfant,
  Adulte: Adulte,
};

var personne = new Personne("Brones", "Alexis", 22);
var enfant = new Enfant("L'enfant","Sauvage",17,"BAC");
var adulte = new Adulte("Brones", "Alexis", 22, true);

adulte.nom = "new Name"; // le nom de l'adulte est maintenant "new Name"

//Si on remplace tout par les this des props par var on obtient que des [object Object] soit des objets "undefined"
