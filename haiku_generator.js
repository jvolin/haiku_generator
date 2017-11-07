var haiku = require('./haiku');
var dictionary = require('./formatData')
var bibleDictionary = require('./compare')
//var createHaiku = require(./)

console.log(haiku([[5],[5,2],[5]], bibleDictionary), '\n')

console.log(haiku([[5],[6,1],[5]], bibleDictionary), '\n')
console.log(haiku([[5],[1,6],[5]], bibleDictionary), '\n')
console.log(haiku([[5],[3,4],[5]], bibleDictionary), '\n')
console.log(haiku([[5],[4,3],[5]], bibleDictionary), '\n')
console.log(haiku([[5],[2,5],[5]], bibleDictionary), '\n')

console.log(haiku([[1,4],[1,1,1,1,3],[2,3]], bibleDictionary), '\n')

console.log(haiku([[3,2],[2,2,3],[3,2]], bibleDictionary))
//console.log(haiku.createHaiku());


  // structure
  // [[5],[7],[5]]
  // [[2,3][1,3,3][3,2]]
  // [[3,2][2,2,3][2,3]]

  //createHaiku([[5],[7],[5]], dictionary)
