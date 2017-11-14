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
  });
});
