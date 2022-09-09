
// Variables 

let gameMode
let maxScore = "MS"
let threeOut = "TO"

let question
let maxQuestions = 100
let chances = 3


let easy = "E"
let medium = "M"
let hard = "H"
let difficulty

let score = 0

let operator
let OPERATORS = ["+","-","/","*","%"]
let EASY_MODE_OPERATORS = ["+","-"]

let SINGLE_DIGIT = [1,2,3,4,5,6,7,8,9]
let DOUBLE_DIGIT = [10,12,13,14,15,16,17,18,19,20]
let TRIPLE_DIGIT = [100,110,120,130,140,150,160,170,180,190,200]

let randomNumber_1
let randomNumber_2

// Functions

// Found this function online from - (Stackoverflow)
function getRandomElementInArray(list) {
   return list[Math.floor((Math.random()*list.length))];
}

function getRandomNumber(a,x) {
   return Math.ceil(Math.random(a,x) * 10)
}

function AddPoints(amount) {
   if (gameMode == maxScore) {
      console.log(`Correct! Your new score: ${score+amount} `)
   } else {
      console.log(`Correct! Your new score: ${score+amount}, ${chances} chance(s) left. `)
   }
   score += amount
}

function RemovePoints(amount) {
   if (gameMode == maxScore) {
      console.log(`Wrong! Your new score: ${score-amount} `)
   } else {
      chances -= 1
      console.log(`Wrong! Your new score: ${score-amount}, ${chances} chance(s) left. `)
   }
   score -= amount
}

function Skipped() {
   console.log(`Alright, Let's skip that one.`)
}

function HandleDifficulty() {
   if (difficulty == easy) {
      randomNumber_1 = getRandomElementInArray(SINGLE_DIGIT)
      randomNumber_2 = getRandomElementInArray(SINGLE_DIGIT)
      operator = getRandomElementInArray(EASY_MODE_OPERATORS)
   } else if (difficulty == medium) {
      if (operator == "+" || operator == "-") {
         randomNumber_1 = getRandomElementInArray(DOUBLE_DIGIT)
         randomNumber_2 = getRandomElementInArray(DOUBLE_DIGIT)
      } else {
         randomNumber_1 = getRandomElementInArray(SINGLE_DIGIT)
         randomNumber_2 = getRandomElementInArray(SINGLE_DIGIT)
      }
   } else if (difficulty == hard) {
      if (operator == "+" || operator == "-") {
         randomNumber_1 = getRandomElementInArray(TRIPLE_DIGIT)
         randomNumber_2 = getRandomElementInArray(TRIPLE_DIGIT)
      } else if (operator == "*" || operator == "/") {
         randomNumber_1 = getRandomElementInArray(DOUBLE_DIGIT)
         randomNumber_2 = getRandomElementInArray(DOUBLE_DIGIT)
      } else {
         randomNumber_1 = getRandomElementInArray(SINGLE_DIGIT)
         randomNumber_2 = getRandomElementInArray(SINGLE_DIGIT)
      }
   }
}

let OperatorFunctions = {
   ["+"] : function(prompt,num1,num2) {
      if (Number(prompt) == num1 + num2) {
         AddPoints(10)
      } else if (prompt == "Skip" && gameMode == maxScore) {
         Skipped()
      } else {
         RemovePoints(5)
      }
   },
   ["-"] : function(prompt,num1,num2) {
      if (Number(prompt) == num1 - num2) {
         AddPoints(10)
      } else if (prompt == "Skip" && gameMode == maxScore) {
         Skipped()
      } else {
         RemovePoints(5)
      }
   },
   ["/"] : function(prompt,num1,num2) {
      if (Number(prompt) == num1 / num2) {
         AddPoints()
      } else if (prompt == "Skip" && gameMode == maxScore) {
         Skipped()
      } else {
         RemovePoints(5)
      }
   },
   ["*"] : function(prompt,num1,num2) {
      if (Number(prompt) == num1 * num2) {
         AddPoints(10)
      } else if (prompt == "Skip" && gameMode == maxScore) {
         Skipped()
      } else {
         RemovePoints(5)
      }
   },
   ["%"] : function(prompt,num1,num2) {
      if (Number(prompt) == num1 % num2) {
         AddPoints(10)
      } else if (prompt == "Skip" && gameMode == maxScore) {
         Skipped()
      } else {
         RemovePoints(5)
      }
   }
} 

// Selecting the gamemode!

let gameModeSelect = prompt("Choose your game mode! : ")

if (gameModeSelect == maxScore) {
   gameMode = maxScore
} else if (gameModeSelect == threeOut) {
   gameMode = threeOut
}

// Selecting the difficulty

let difficultySelect = prompt("Select your difficulty! : ")

if (difficultySelect == easy) {
   difficulty = easy
} else if (difficultySelect == medium)  {
   difficulty = medium
} else if (difficultySelect == hard) {
   difficulty = hard
}

// Max Score

while (gameMode == maxScore) {
   operator = getRandomElementInArray(OPERATORS)
   HandleDifficulty()
   let question = prompt(`${randomNumber_1} ${operator} ${randomNumber_2} = ?  `)
   OperatorFunctions[operator](question,randomNumber_1,randomNumber_2)
   maxQuestions -= 1
   if (maxQuestions == 0) {
      console.log("Those are all the questions!")
      maxQuestions = 20
      score = 0
      break
   }
}

// Three-Out

while (gameMode == threeOut) {
   operator  = getRandomElementInArray(OPERATORS)
   HandleDifficulty()
   question = prompt(`${randomNumber_1} ${operator} ${randomNumber_2} = ?  `)
   OperatorFunctions[operator](question,randomNumber_1,randomNumber_2)
   if (chances <= 0) {
      console.log(`Your out of chances!, your score was: ${score}`)
      chances = 3
      score = 0
      break
   }
}
