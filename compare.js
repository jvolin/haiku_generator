var fs = require('fs');

//CMUDICT
var cmudictFile = readCmudictFile('./cmudict.txt');
var lines = cmudictFile.toString().split("\n").slice(0,-1);

//BIBLE
var bible = readBible('./bible.txt')
var bibleSet = new Set(bible)
var bibleArr = Array.from(bibleSet)

//READ FILES
function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function readBible(file){
  return fs.readFileSync(file).toString().replace(/\n/g, ' ')
  .toUpperCase()
  .split(' ')
}
//COMMON WORDS
var commonWords = combine(lines)

//COMBINE
function combine(txtLines) {
  var commonArr = []
  txtLines.forEach(function(line){
    var lineSplit = line.split(' ');
    var word = lineSplit[0];
    var syls = lineSplit.slice(2)
    if (bibleArr.indexOf(word) !== -1){
      commonArr.push([[word], syls])
    }
  });
  return commonArr
}

//FORMAT DATA
function formatData(arr){
  var vowels = ['A', 'E', 'I', 'O', 'U', 'Y']

  var obj = {}
    for (var i = 0; i < 7; i++){
      obj[i] = [];
    }

  arr.forEach(function(elem){

    var sylables = elem[1].toString().split(',');
    var syls = []  //count of this array is number of sylables in word

    sylables.forEach(function(element){
      for (var j = 0; j < vowels.length; j++){
        if (element.indexOf(vowels[j]) !== -1) {
          if (syls.indexOf(element) === -1 ) {
            syls.push(element);
          }
        }
      }
    });
    obj[syls.length].push(elem[0])
  })
  console.log(obj)
  return obj
}

var bibleDictionary = formatData(commonWords)

module.exports = bibleDictionary
