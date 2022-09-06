function log(input) {
   console.log(input);
}

// Problem 1
function FindMinimumOf2(num1,num2) {
   let minimum; // A variable for use later
   if (num1 < num2) { // See if first number is less
      minimum = num1; // If it is then assign it to "minimum"
   } else if (num2 < num1) { // See if second number is less
      minimum = num2; // If it is hen assign i to "minimum"
   }
   return minimum; // Return it so that we can access it when we call the function
}

function FindMinimumOf3(num1,num2,num3) {
   let actualMinimum; // Variable for later use
   let minimum = FindMinimum(num1,num2); // Use previous function to determine minimum
   if (minimum < num3) { // If the minimum from function is less than 3rd
      actualMinimum = minimum; // Set minimum from function to minimum
   } else if (minimum > num3) { // If the minimum from function is greater we know that num3 is less
      actualMinimum = num3; // Set num3 to the minimum
   }
   return actualMinimum; // Return minimum
}

function FindMinimum(num1,num2,num3) {
   let min; // Variable for later use
   let mode; // If it will be caluclating 2 or 3 numbers
   if (num3) { // If it finds a 3rd parameter
      mode = "Min3"; // The mode is changed to Min3
   } else { // Else
      mode = "Min2"; // The mode is change to Min2
   }
   if (mode == "Min3") { // If the mode is Min3 (if 3 parameters)
      min = FindMinimumOf3(num1,num2,num3); // Set minimum variable to minimum of 3 numbers
   } else if (mode == "Min2") { // If the mode is Min2 (if 2 parameters)
      min = FindMinimumOf2(num1,num2); // Set minimum variable to minimum of 2 numbers
   }
   return min; // Return the minimum
}

// Problem 2
function isEven(n) {
   let even = 0; // If its 0 it is even
   let odd = 1; // If its 1 it is odd
   if (n == even) { // If n is 0
      return true; // It is even return true
   } else if (n == odd) { // If n is 1
      return false; // It is odd return false
   } else { // if it is any other number
      return isEven(n - 2); // Use the function inside an then subtract that number by 2 because every other number is even
   }
}

// Problem 3

// Nth term of the series 1
function quadratic(t1,t2,t3,nth) {
   let diff1 = t2 - t1;
   let diff2 = t3 - t2;
   let diff3 = diff2 - diff1;
   if (diff1 + diff3 == diff2) {
      let firstPart = diff3 / 2;
      //--------------------
      let n1 = -firstPart * Math.pow(1,2);
      let n2 = -firstPart * Math.pow(2,2);
      //--------------------
      let l1 = (t1 + n1);
      let l2 = (t2 + n2);
      let finalDifference = Math.abs(l2-l1)
      let equation = firstPart * Math.pow(nth,2) - firstPart * nth + finalDifference
      return equation
   }
}

// Nth term of the series 2
function factorial(nth) {
   if ( nth == 0 ) return 1;
   return nth * factorial(nth - 1)
}

// Nth term of the Fibonacci sequence
let fibonacci = (num) => {
   if(num < 2){
     return num;
   }
   return fibonacci(num - 1) + fibonacci(num - 2)
}

// HCF
function findHCF(num1,num2) {
   while (Math.max(num1,num2) % Math.min(num1,num2) !== 0) {
      if (num1 > num2) {
         num1 %= num2
      } else {
         num2 %= num1
      }
   }
   return FindMinimumOf2(num1,num2)
}


function findLCM(num1,num2) {
   let min = FindMinimumOf2(num1,num2)
   while(true) {
      if (min % num1 == 0 && min % num2 == 0) {
         break;
      }
      min++;
   }
   return min;
}

// Calculator

let selected
let operator
let isValid = false

function menu() {
   console.log("Please select an option -")
   console.log("Press 1 to add")
   console.log("Press 2 to subtract")
   console.log("Press 3 to multiply")
   console.log("Press 4 to divide")
   console.log("Press 5 to quit.")
}

// menu()

function promptNumbers() {
   let num1 = Number(prompt("Enter first number : "))
   let num2 = Number(prompt("Enter the second number: "))
   if (operator == "+") {
      log(num1 + num2)
   } else if (operator == "-") {
      log(num1 - num2)
   } else if (operator == "*") {
      log(num1 * num2)
   } else if (operator == "/") {
      log(num1 / num2)
   }
   menu()
}

do {
   selected = prompt("")
   if (Number(selected) == 1) {
      operator = "+"
      promptNumbers(operator)
   } else if (Number(selected) == 2) {
      operator = "-"
      promptNumbers(operator)
   } else if (Number(selected) == 3) {
      operator = "*"
      promptNumbers(operator)
   } else if (Number(selected) == 4) {
      operator = "/"
      promptNumbers(operator)
   } else if (Number(selected) == 5) {
      log("Quitting.")
      break
   } else {
      log("Please select a valid input.")
   }
} while (!isValid)
