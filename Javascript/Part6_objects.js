// PART 5: JAVASCRIPT OBJECTS

// Objects are hash tables, they store information in a key-value pair.
// They are very similar to dictionaries in Python.

// Unlike an array, a Javascript Object does NOT retain order, instead you access
// the value you want by entering its corresponding key. They can hold a variety of
// data types, including nested Objects.

// Creating an Object:
var pokemonInfo = { name: "Pikachu", attack: 110 , defense: 85 };

// Call values by their key:
console.log(pokemonInfo['name']);

// Show Entire Object:
// Sometimes differs by browser -
console.dir(pokemonInfo);

// Could also reference itself:
pokemonInfo['attack'] += 1

// Iterate through object:
for (var key in pokemonInfo) {
  // Remember there is no order!
  console.log(key)
  console.log(pokemonInfo[key])
  console.log("\n")
}

// OBJECT Methods:

/*var pokemonInfo = {
    name: "Pikachu",
    attack: 110 ,
    defense: 85,
    pokemonAlert: function(){
      alert('A wild pokemon appeared!')
    }
   };

   pokemonInfo.pokemonAlert()*/

// But what if you (more realistically) want to actually reference an object's
// key-value pairs. For instance, if we want ot include this in our alert?

// You'll need to use the "this" keyword

var pokemonInfo = {
    name: "Pikachu",
    attack: 110 ,
    defense: 85,
    pokemonAlert: function(){
      alert('A wild '+this.name+' appeared!')
    }
   };

pokemonInfo.pokemonAlert()
