const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
  }
  
  Park.prototype.addDinosaurToCollection = function(dinosaur){
    this.collectionOfDinosaurs.push(dinosaur)
  };

  Park.prototype.removeDinosaur = function(dinosaur){
    let index = this.collectionOfDinosaurs.indexOf(dinosaur)    
    this.collectionOfDinosaurs.splice(index,1)
  };

    
  Park.prototype.findBiggestAttraction = function(){
    // let biggestAttraction;
    this.collectionOfDinosaurs.sort(function sortByGuests(a,b) {
      return b.guestsAttractedPerDay > a.guestsAttractedPerDay;
    });

    // let biggestDinosaurs = [];
    // let biggestNumber = 0;
    // this.collectionOfDinosaurs.forEach(function(dinosaur) {
    //   if (dinosaur.guestsAttractedPerDay === biggestNumber) {
    //     biggestDinosaurs.push(dinosaur);
    //   } else if (dinosaur.guestsAttractedPerDay > biggestNumber) {
    //     biggestDinosaurs = [dinosaur];
    //     biggestNumber = dinosaur.guestsAttractedPerDay;
    //   }}
    // });
    // return biggestDinosaurs;
    return this.collectionOfDinosaurs[0]['species']
  };
    // let visitorsAttracted = []
    // for (let dino in this.collectionOfDinosaurs) {
    //     visitorsAttracted.push(dino.guestsAttractedPerDay)
    // };
    // let biggestAttraction = Math.max(visitorsAttracted)
    // return biggestAttraction

  Park.prototype.getDinosaursBySpecies = function (species){
      let dinosaursFound = [];
      for (let dinosaur of this.collectionOfDinosaurs) {
          if (dinosaur.species === species) {
            dinosaursFound.push(dinosaur)}
      }
      return dinosaursFound
  }

  Park.prototype.totalGuestsPerDay = function(){
      let total = 0
      for (let dinosaur of this.collectionOfDinosaurs) {
          total += dinosaur.guestsAttractedPerDay
      }
      return total
  }
  
  Park.prototype.totalGuestsPerYear = function() {
    let total = 0
    for (let dinosaur of this.collectionOfDinosaurs) {
        total += dinosaur.guestsAttractedPerDay
    }
    total = total * 365

    return total
  }

  Park.prototype.totalYearlyRevenue = function(){
    let total = 0
    for (let dinosaur of this.collectionOfDinosaurs) {
        total += dinosaur.guestsAttractedPerDay
    }
    return total * 365 * this.ticketPrice;
    // let yearlyRevenue = yearlyTotal * this.ticketPrice
    // return yearlyRevenue
  }

  Park.prototype.removeBySpecies = function(species) {
    let filteredDinosaurs = this.collectionOfDinosaurs.filter(function(dinosaur){
      return dinosaur.species != species;
    });
    this.collectionOfDinosaurs = filteredDinosaurs;
  }

  Park.prototype.dietTypes = function(){
    let diets = {};
    this.collectionOfDinosaurs.forEach(function (dinosaur) {
      if (diets[dinosaur.diet]) {
        diets[dinosaur.diet] += 1;
      } else {
        diets[dinosaur.diet] = 1;
      };
    });
    return diets;
  };


  module.exports = Park;