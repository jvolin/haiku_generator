var fs = require("fs");
var dictionary = require('./formatData')

console.log(dictionary)
//can't access values at keys
// need to add random val generator

function createHaiku(structure){
  var haiku = ''

  structure[0].forEach(function(elem) {
    haiku += dictionary[elem]
  });

  structure[1].forEach(function(elem) {
    haiku += dictionary[elem]
  });

  structure[2].forEach(function(elem) {
    haiku += dictionary[elem]
  });
  console.log(haiku)
  console.log("this should log a haiku with the structure " + structure);
}

  // structure
  // [[5],[7],[5]]
  // [[2,3][1,3,3][3,2]]
  // [[3,2][2,2,3][2,3]]

createHaiku([[5],[7],[5]], dictionary)

module.exports = {
  createHaiku
};


