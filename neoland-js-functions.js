// Iteración #1
function sum(numberOne, numberTwo) { 
    if (numberOne > numberTwo)
     { return numberOne; } 
     else { return numberTwo; } }


// Iteración #2
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.']; 
function findLongestWord(param) { 
    let longestWord = ""; 
    for (let i = 0; i < param.length; i++) { 
        if (param[i].length > longestWord.length || longestWord === "") { 
            longestWord = param[i]; } } return longestWord; }

console.log(findLongestWord(avengers)); 

// Iteracion #3
const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumNumbers(numbers) { 
    let sum = 0; for(let k = 0; k < numbers.length; k++) { sum += numbers[k]; } return sum; }
    console.log(sumNumbers(numbers)); 

// Iteración #4

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let sum = 0;
  for(let l = 0; l < param.length; l++) {
    sum += param[l];
  }
  return sum / param.length;
}

const result = average(numbers);
console.log(result);