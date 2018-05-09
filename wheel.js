var guessNum = document.getElementById('guess-num')
var clue = document.getElementById('clue')
var wordDash = document.getElementById('word-dash')
var ltrInput = document.getElementById('letter-input')
var ltrSubmit = document.getElementById('letter-submit')
var wordInput = document.getElementById('word-input')
var wordSubmit = document.getElementById('word-submit')
var newWordBtn = document.getElementById('new-word-btn')

guessNum = 5
// word/hints
var wordArray = []
var hintArray = []

function Word (word,hint){
  wordArray.push(word)
  hintArray.push(hint)
}

var one = new Word('hello','greeting')
var two = new Word('goodbye','leaving greeting')
var three = new Word('shoe','wear on feet')
var four = new Word('water','what rain is made of')
var five = new Word('snow','frozen water')
var six = new Word('six','sixHint')
var seven = new Word('seven','sevenHint')
var eight = new Word('eight','eightHint')
var nine = new Word('nine','nineHint')
var ten = new Word('ten','tenHint')

// random number for choosing word/clues
function random(){
  return (Math.floor(Math.random()*10))
}
var randomNum = random()

console.log(wordArray[randomNum]+hintArray[randomNum]);
// word split into array for comparison
var splitWord = (wordArray[randomNum].split(''));
// example of array joined back into word
console.log(wordArray[randomNum].split('').join(''));
// replaces letters
function dash(){
    for (let i = 0; i < splitWord.length; i++) {
      splitWord.splice(i,1,"#")
      wordDash.innerHTML = splitWord.join('')
    }
  }
console.log(dash())
// places clue on page
clue.innerHTML = "clue: " + hintArray[randomNum]
