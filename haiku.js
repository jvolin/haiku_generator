//var dictionary = require('./formatData')
var bibleDictionary = require('./compare')

console.log(bibleDictionary)
var random = function(arrLength){
  return Math.floor(Math.random() * arrLength);
}


function createHaiku(structure){
  var haiku = ''

  structure[0].forEach(function(elem) {

    // can console.log length, but cant store it in a var.. WHY???
    console.log(bibleDictionary[elem].length)
    var size = bibleDictionary[elem].length;
    console.log(size)
    var randomGen = random(size);
    haiku += bibleDictionary[elem][randomGen] + "  "
  });

  haiku += "\n"

  structure[1].forEach(function(elem) {
    var size = bibleDictionary[elem].length;
    var randomGen = random(size);
    haiku += bibleDictionary[elem][randomGen] + "  "
  });

  haiku += "\n"

  structure[2].forEach(function(elem) {
    var size = bibleDictionary[elem].length;
    var randomGen = random(size);
    haiku += bibleDictionary[elem][randomGen] + "  "
  });

  //console.log(haiku)
  return haiku

}

  // structure
  // [[5],[7],[5]]
  // [[2,3][1,3,3][3,2]]
  // [[3,2][2,2,3][2,3]]

createHaiku([[5],[7],[5]], bibleDictionary)

module.exports =
  createHaiku
;
