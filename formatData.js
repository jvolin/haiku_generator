var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){
  var vowels = ['A','E','I','O','U','Y', ]
  var syllablesArr = []


  //should obj be pulled out into a seperate function?
  var obj = {}

  for(var i =0; i<11; i++){
    obj[i] = [];
  }

  var lines = data.toString().split("\n").slice(0,-1);

  lines.forEach(function(line){

    var lineSplit = line.split("  ");
    var sylables = lineSplit[1].split(' ');
    var syls = []  //count of this array is number of sylables in word

    sylables.forEach(function(element){
        for (var j = 0; j<vowels.length; j++){
          if (element.indexOf(vowels[j]) !== -1) {
            if (syls.indexOf(element) === -1 ) {
              syls.push(element);
            }
          }
        }
    });


    if (!lineSplit[1].match(/\d/)) {
      obj[0].push(lineSplit[0]);
    }
    obj[syls.length].push(lineSplit[0])
  });

  //console.log(obj[1])

  return (obj)
}

var dictionary = formatData(cmudictFile);

module.exports = {
  dictionary
}
