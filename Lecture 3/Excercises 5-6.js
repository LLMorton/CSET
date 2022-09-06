let isDexter = false

function containsAnyLetter(str) {
   return /[a-zA-Z]/.test(str);
 }

// Problem 5

do {
   let number = Number(prompt("Enter number : ")); // Get first number to be multiplied
   let starting = Number(prompt("Start At : ")); // Get number we start multiplying at
   let ending = Number(prompt("End At : ")); // Get number we stop multiplying at 
   if (containsAnyLetter(number) || containsAnyLetter(starting) || containsAnyLetter(ending)) {
      console.log("bro it said enter a number smh");
      break;
   }
   for (let counter = starting; counter <= ending; counter++) {
      let stringPart = number + "*" + counter; // Ex 1 * 1
      let stringPart2 = ` = ${number * counter}`; // Ex = 1
      let combinedString = stringPart + stringPart2; // Adding both those strings
      log(combinedString); // Showing it using console.log
   }
} while (!isDexter) // While not valid keep doing this whole thing



// Problem 6
do {
   let numberToStartAt = Number(prompt("Number to start at : ")) // Number to start at
   let numberToEndAt = Number(prompt("Number to end at : ")) // Number to end at
   let numberToMultiplyByStart = Number(prompt("Number Multiplier Start : ")) // Multiplier start at
   let numberToMultiplyByEnd = Number(prompt("Number Multiplier End : ")) // Multiplier end at
   if (containsAnyLetter(numberToStartAt) || containsAnyLetter(numberToEndAt) || containsAnyLetter(numberToMultiplyByStart) || containsAnyLetter(numberToMultiplyByEnd)) {
      console.log("bro it said enter a number smh")
      break
   }
   for (let count = numberToStartAt; count <= numberToEndAt; count++) { // Loop from startAtNumber to EndAtNumber
      for (let count2 = numberToMultiplyByStart; count2 <= numberToMultiplyByEnd; count2++) { // Another loop for the start and end multipliers
         let string_1 = count + "*" + count2 // Ex. 1 * 1
         let string_2 = ` = ${count * count2}` // Ex. = 1
         let combinedString // Initiliaze combinedString for later use
         if (count2 == numberToMultiplyByEnd) { // If count2 is equal to what our multiplier end is then
            combinedString = string_1 + string_2 + "\n" // Combining string_1 and string_2 but adding a new line for seperation because its the last multiplier, so we know itll sart with a new number
         } else { // Else
            combinedString = string_1 + string_2 // Combining string_1 and string_2
         }
         console.log(combinedString) // Show combined string
      }
   }
} while (!isDexter)
