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
        expect(personne.nom).toBe('B');
        expect(personne.prenom).toBe('A');
        expect(personne.getAge()).toBe(22);
    });
    it('should have toString method showing props', function () {
        var personne = new Personne('B','A', 22);
        expect(personne.toString()).toBe("B A 22");
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
         expect(enfant.nom).toBe('B');
         expect(enfant.prenom).toBe('A');
         expect(enfant.getAge()).toBe(22);
         expect(enfant.niveauScolaire).toBe('ZEN');
      });
      it('should have toString method with niveau scolaire prop', function () {
          var enfant = new Enfant('B','A', 22, 'ZEN');
          enfant.niveauScolaire = "zenika";
          expect(enfant.toString()).not.toBe("B A 22 ZEN");
          expect(enfant.toString()).toBe("B A 22 zenika");
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
         expect(adulte.nom).toBe('B');
         expect(adulte.prenom).toBe('A');
         expect(adulte.getAge()).toBe(22);
         expect(adulte.permis).toBe(true);
      });
      it('should have toString method with permis prop', function () {
          var adulte = new Adulte('B','A', 22, true);
          adulte.permis = false;
          expect(adulte.toString()).toBe("B A 22 false")
          expect(adulte.toString()).not.toBe("B A 22 true")
      });
  });

  describe('Personne - modify', function () {
      var Personne;
      beforeEach(function() {
          Personne = tp3.Personne;
      });
      it('shouldnt modify age directly', function () {
          var personne = new Personne('B', 'A', 22);
          personne.age = 23;
          expect(personne.getAge()).not.toBe(23);
          expect(personne.getAge()).toBe(22);
      })
  })
});
