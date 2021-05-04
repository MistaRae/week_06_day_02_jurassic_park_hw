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
        return a.guestsAttractedPerDay - b.guestsAttractedPerDay;
    });
    return this.collectionOfDinosaurs[this.collectionOfDinosaurs.length -1]['species']
  };
    // let visitorsAttracted = []
    // for (let dino in this.collectionOfDinosaurs) {
    //     visitorsAttracted.push(dino.guestsAttractedPerDay)
    // };
    // let biggestAttraction = Math.max(visitorsAttracted)
    // return biggestAttraction

  Park.prototype.getDinosaursBySpecies = function (species){
      let dinosaursFound = []
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
    let yearlyTotal = total * 365
    let yearlyRevenue = yearlyTotal * this.ticketPrice
    return yearlyRevenue
  }


  module.exports = Park;