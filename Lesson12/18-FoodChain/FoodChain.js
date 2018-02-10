var eatsPlants = false;
var eatsAnimals = false;

var category = (eatsAnimals && eatsPlants) ? "omnivore" : (eatsPlants) ? "herbivore" : (eatsAnimals) ? "carnivore" : undefined;

console.log(category);