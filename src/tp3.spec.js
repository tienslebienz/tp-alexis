describe('tp3', function() {
  var tp3;
  beforeEach(function() {
    tp3 = require('./tp3');
  });

  describe('Personne', function() {
    var Personne;
    beforeEach(function() {
      Personne = tp3.Personne;
    });

    it('should create object', function() {
      var personne = new Personne();
      expect(personne).toBeTruthy();
    });
    it('should have properties', function () {
        var personne = new Personne('B','A', 22);
        expect(personne.nom).toBeDefined();
        expect(personne.prenom).toBeDefined();
        expect(personne.age).toBeDefined();
    });
    it('should have toString() method showing props', function () {
        var personne = new Personne('B','A', 22);
        expect(personne.toString()).toEqual("B A 22");
    });
  });

  describe('Enfant', function () {
      var Enfant;
      beforeEach(function () {
          Enfant = tp3.Enfant;
      });
      it('should create object', function() {
          var enfant = new Enfant();
          expect(enfant).toBeTruthy();
      });
      it('should have niveauScolaire prop', function () {
         var enfant = new Enfant('B','A', 22, 'ZEN');
         expect(enfant.niveauScolaire).toBeDefined();
      });
      it('should have toString method with niveau scolaire prop', function () {
          var enfant = new Enfant('B','A', 22, 'ZEN');
          expect(enfant.toString).toEqual("B A 22 niveau: ZEN")
      });
  });

  describe('Adulte', function () {
      var Adulte;
      beforeEach(function () {
          Adulte = tp3.Adulte;
      });
      it('should create object', function() {
          var adulte = new Adulte();
          expect(adulte).toBeTruthy();
      });
      it('should have permis prop', function () {
         var adulte = new Adulte('B', 'A', 22, true);
         expect(adulte.permis).toBeDefined();
      });
      it('should have toString method with permis prop', function () {
          var adulte = new Adulte('B','A', 22, true);
          expect(adulte.toString).toEqual("B A 22 permis: true")
      });
  })
});
