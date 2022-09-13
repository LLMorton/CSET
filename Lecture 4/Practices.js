//const prompt = require("prompt-sync")()

let array = [1, 2, 3]

// Practice 1a

function one_a() {
   let array = []

   let n = Number(prompt("How many numbers do you want in array?: "))

   for (let i = 0; i <= n - 1; i++) {
      let number = Number(prompt("Enter number to be stored in array: "))
      array[i] = number
   }

   let sum = 0
   for (let i = 0; i <= array.length - 1; i++) {
      sum += array[i]
   }

   console.log(sum)
}


// Practice 1b

function one_b() {
   let array = []

   let userinput = Number(prompt("Enter nth term in sequence : "))

   function fib(num) {
      if (num <= 1) return 1;

      return fib(num - 1) + fib(num - 2)
   }

   console.log(fib(userinput))
}

// Practice 1c

function RemoveElement(arr, index) {
   for (let i = 0; i <= array.length; i++) {
      if (i == index) {
         arr.splice(i, 1)
      }
   }
}

// Practice 1d
function AddElement(arr, element, index) {
   arr.splice(index, 0, element)
}

let lower = {
   "a": "A",
   "b": "B",
   "c": "C",
   "d": "D",
   "e": "E",
   "f": "F",
   "g": "G",
   "h": "H",
   "i": "I",
   "j": "J",
   "k": "K",
   "l": "L",
   "m": "M",
   "n": "N",
   "o": "O",
   "p": "P",
   "q": "Q",
   "r": "R",
   "s": "S",
   "t": "T",
   "u": "U",
   "v": "V",
   "w": "W",
   "x": "X",
   "y": "Y",
   "z": "Z"
}

let upper = {
   "A": "a",
   "B": "b",
   "C": "c",
   "D": "d",
   "E": "e",
   "F": "f",
   "G": "g",
   "H": "h",
   "I": "i",
   "J": "j",
   "K": "k",
   "L": "l",
   "M": "m",
   "N": "n",
   "O": "o",
   "P": "p",
   "Q": "q",
   "R": "r",
   "S": "s",
   "T": "t",
   "U": "u",
   "V": "v",
   "W": "w",
   "X": "x",
   "Y": "y",
   "Z": "z"
}

function toUpper(string) {
   let newString
   for (let i = 0; i <= string.length; i++) {
      if (lower[string[i]]) {
         return newString = string = string.replace(string[i], lower[string[i]])
      }
   }
}

function toLower(string) {
   let newString
   for (let i = 0; i <= string.length; i++) {
      if (upper[string[i]]) {
         newString = string = string.replace(string[i], upper[string[i]])
      }
   }
   return newString
}


// Grocery list manager

let grocery_list = {}

let setupDone = false

let number_of_items_in_grocery_list = Number(prompt("How many items do you have? : "))

for (let i = 0; i <= number_of_items_in_grocery_list - 1; i++) {
   let item = prompt("What item do you want to put in? : ")
   let newString = toLower(item)
   if (grocery_list[newString]) {
      console.log("You already have this item!")
   } else {
      grocery_list[newString] = 1
   }
}

setupDone = true

while (setupDone) {
   let action = prompt("What would you like to do?: ")
   let newString = toLower(action)
   if (newString == "search") {
      let search = prompt("What item are you looking for? : ")
      let newString = toLower(search)
      if (grocery_list[newString]) {
         console.log("Found")
      } else { console.log("Not found.") }
   } else if (newString == "add") {
      let item = prompt("What item would you like to add? : ")
      let newString = toLower(item)
      if (grocery_list[newString]) {
         console.log("You have that item already!")
      } else {
         grocery_list[newString] = 1
      }
   } else if (newString == "remove") {
      let item = prompt("What item would you like to remove? : ")
      let newString = toLower(item)
      if (grocery_list[newString]) {
         delete grocery_list[newString]
      } else {
         console.log("Looks like you dont have that item..!")
      }
      console.log(grocery_list)
   } else if (newString == "exit") {
      console.log("Goodbye!")
      break
   } else if (newString == "show") {
      let count = 0
      for ([key, value] of Object.entries(grocery_list)) {
         count += 1
         let completedString = `${count}. ${key}`
         console.log(completedString)
      }
   }
}
