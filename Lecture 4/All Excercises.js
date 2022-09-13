const prompt = require("prompt-sync")();

// Excercise 1a
function Max(...args) {
   let greatest
   for (let count = 0; count <= args.length - 1; count++) {
      if (args[count] < args[count + 1]) {
         greatest = args[count + 1]
      }  
   }
   return greatest
}

// Excercise 1b
function Reverse() {
   let string = prompt("Enter a number to be reversed : ")
   let array = []
   for (let i = 0; i <= string.length - 1; i++) {
      array[i] = string[i]
   }
   array.reverse()
   console.log(...array)
}

// Excercise 1c

let lower = {
   "a" : "A",
   "b" : "B",
   "c" : "C",
   "d" : "D",
   "e" : "E",
   "f" : "F",
   "g" : "G",
   "h" : "H",
   "i" : "I",
   "j" : "J",
   "k" : "K",
   "l" : "L",
   "m" : "M",
   "n" : "N",
   "o" : "O",
   "p" : "P",
   "q" : "Q",
   "r" : "R",
   "s" : "S",
   "t" : "T",
   "u" : "U",
   "v" : "V",
   "w" : "W",
   "x" : "X",
   "y" : "Y",
   "z" : "Z"
}

let upper = {
   "A" : "a",
   "B" : "b",
   "C" : "c",
   "D" : "d",
   "E" : "e",
   "F" : "f",
   "G" : "g",
   "H" : "h",
   "I" : "i",
   "J" : "j",
   "K" : "k",
   "L" : "l",
   "M" : "m",
   "N" : "n",
   "O" : "o",
   "P" : "p",
   "Q" : "q",
   "R" : "r",
   "S" : "s",
   "T" : "t",
   "U" : "u",
   "V" : "v",
   "W" : "w",
   "X" : "x",
   "Y" : "y",
   "Z" : "z"
}

function toUpper(string) {
   let newString
   for (let i = 0; i <= string.length; i++) {
      if (lower[string[i]]) {
         newString = string = string.replace(string[i],lower[string[i]])
      }
   }
   console.log(newString)
}

function toLower(string) {
   let newString
   for (let i = 0; i <= string.length; i++) {
      if (upper[string[i]]) {
         newString = string = string.replace(string[i],upper[string[i]])
      }
   }
   console.log(newString)
}

// Excercise 1d
function invertCase(string) {
   let array = []
   for (let i = 0; i <= string.length; i++) {
      if (upper[string[i]]) {
         array[i] = upper[string[i]]
      } else if (lower[string[i]]) {
         array[i] = lower[string[i]]
      }
   }
   console.log(...array)
}
