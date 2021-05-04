const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let jurassicPark;

  beforeEach(function () {
      jurassicPark = new Park('Jurassic Park', 1000)
      tRex = new Dinosaur('T-Rex', 'carnivore', 50);
      triceratops = new Dinosaur('Triceratops', 'herbivore', 25)
      brontosaurus = new Dinosaur('Brontosaurus', 'herbivore', 10)
      tRex1 = new Dinosaur('T-Rex', 'carnivore', 45);
      triceratops1 = new Dinosaur('Triceratops', 'herbivore', 20)
      brontosaurus1 = new Dinosaur('Brontosaurus', 'herbivore', 5)
      tRex2 = new Dinosaur('T-Rex', 'carnivore', 55);
      triceratops2 = new Dinosaur('Triceratops', 'herbivore', 30)
      brontosaurus2 = new Dinosaur('Brontosaurus', 'herbivore', 15)
      tRex3 = new Dinosaur('T-Rex', 'carnivore', 75);
      gallimimus = new Dinosaur('Gallimimus', 'omnivore', 1)
  })

  it('should have a name', function(){
      const actual = jurassicPark.name
      assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
      const actual = jurassicPark.ticketPrice
      assert.strictEqual(actual, 1000)
  });

  it('should have a collection of dinosaurs', function(){
      const actual = jurassicPark.collectionOfDinosaurs
      assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
      jurassicPark.addDinosaurToCollection(tRex);
      // const actual = jurassicPark.collectionOfDinosaurs;
      const actual = jurassicPark.collectionOfDinosaurs.length;
      // assert.deepStrictEqual(actual, [dinosaur])
      assert.strictEqual(actual, 1 )
  });

  it('should be able to remove a dinosaur from its collection', function(){
      jurassicPark.addDinosaurToCollection(tRex);
      jurassicPark.removeDinosaur(tRex);
      const actual = jurassicPark.collectionOfDinosaurs.length;
      assert.strictEqual(actual, 0)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    jurassicPark.addDinosaurToCollection(tRex);
    jurassicPark.addDinosaurToCollection(triceratops);
    jurassicPark.addDinosaurToCollection(brontosaurus);
    const actual = jurassicPark.findBiggestAttraction();
    assert.strictEqual(actual, 'T-Rex')
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    jurassicPark.addDinosaurToCollection(tRex1);
    jurassicPark.addDinosaurToCollection(triceratops1);
    jurassicPark.addDinosaurToCollection(brontosaurus1);
    jurassicPark.addDinosaurToCollection(tRex2);
    jurassicPark.addDinosaurToCollection(triceratops2);
    jurassicPark.addDinosaurToCollection(brontosaurus2);
    jurassicPark.addDinosaurToCollection(tRex3);
    const actual = jurassicPark.getDinosaursBySpecies('T-Rex');
    assert.deepStrictEqual(actual,[ tRex1, tRex2,tRex3 ]);
 

  });

  it('should be able to calculate the total number of visitors per day', function(){
    jurassicPark.addDinosaurToCollection(tRex);
    jurassicPark.addDinosaurToCollection(triceratops);
    jurassicPark.addDinosaurToCollection(brontosaurus);
    const actual = jurassicPark.totalGuestsPerDay()
    assert.strictEqual(actual, 85)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    jurassicPark.addDinosaurToCollection(tRex);
    jurassicPark.addDinosaurToCollection(triceratops);
    jurassicPark.addDinosaurToCollection(brontosaurus);
    const actual = jurassicPark.totalGuestsPerYear()
    assert.strictEqual(actual, 31025)
  });

  it('should be able to calculate total revenue for one year', function(){
    jurassicPark.addDinosaurToCollection(tRex);
    jurassicPark.addDinosaurToCollection(triceratops);
    jurassicPark.addDinosaurToCollection(brontosaurus);
    const actual = jurassicPark.totalYearlyRevenue()
    assert.strictEqual(actual, 31025000)
  });




// Extensions

// A park must be able to:

  it('should be able to Remove all dinosaurs of a particular species', function(){
    jurassicPark.addDinosaurToCollection(tRex1);
    jurassicPark.addDinosaurToCollection(triceratops1);
    jurassicPark.addDinosaurToCollection(brontosaurus1);
    jurassicPark.addDinosaurToCollection(tRex2);
    jurassicPark.addDinosaurToCollection(triceratops2);
    jurassicPark.addDinosaurToCollection(brontosaurus2);
    jurassicPark.addDinosaurToCollection(tRex3);
    jurassicPark.removeBySpecies('T-Rex');
    const actual = jurassicPark.collectionOfDinosaurs
    assert.deepStrictEqual(actual, [triceratops1, brontosaurus1, triceratops2, brontosaurus2])
  });

it('Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type', function(){
  jurassicPark.addDinosaurToCollection(tRex1);
  jurassicPark.addDinosaurToCollection(triceratops1);
  jurassicPark.addDinosaurToCollection(brontosaurus1);
  jurassicPark.addDinosaurToCollection(tRex2);
  jurassicPark.addDinosaurToCollection(triceratops2);
  jurassicPark.addDinosaurToCollection(brontosaurus2);
  jurassicPark.addDinosaurToCollection(tRex3);
  jurassicPark.addDinosaurToCollection(gallimimus)
  const actual = jurassicPark.dietTypes();
  assert.deepStrictEqual(actual, { 'carnivore': 3, 'herbivore': 4, 'omnivore': 1 })
  
});
// Example: { 'carnivore': 5, 'herbivore': 2, 'omnivore': 1 }



// Hint: We want to avoid removing items from arrays while iterating over them. This is because iteration uses the index number to access the 
// current item, and if you remove an item during one of the iterations, the position of each of the following items will be changed and lead to 
// unexpected results. You will need to keep this principle in mind when removing all the dinosaurs of a particular species.
});