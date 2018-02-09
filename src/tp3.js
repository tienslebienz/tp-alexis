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

function Personne(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    var age = age;
    Personne.prototype.getAge = function() {
        return age;
    };
    Personne.prototype.setAge = function(newAge) {
        age = newAge;
    };
    Personne.prototype.toString = function() {
        return (
            this.nom +
            ' ' +
            this.prenom +
            ' ' +
            Personne.prototype.getAge.call(this)
        );
    };
    Object.defineProperty(this, 'nom', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: nom,
    });
}

function Enfant(nom, prenom, age, niveauScolaire) {
    Personne.call(this, nom, prenom, age);
    this.niveauScolaire = niveauScolaire || 'nul';
    this.toString = function() {
        return (
            Personne.prototype.toString.call(this) + ' ' + this.niveauScolaire
        );
    };
    this.getAge = function() {
        return Personne.prototype.getAge();
    };
    this.setAge = function(age) {
        return Personne.prototype.setAge();
    };
}

function Adulte(nom, prenom, age, permis) {
    Personne.call(this, nom, prenom, age);
    this.permis = permis || false;
    this.toString = function() {
        return Personne.prototype.toString.call(this) + ' ' + this.permis;
    };
    this.getAge = function() {
        return Personne.prototype.getAge();
    };
    this.setAge = function(age) {
        return Personne.prototype.setAge();
    };
}

module.exports = {
    Personne: Personne,
    Enfant: Enfant,
    Adulte: Adulte,
};
