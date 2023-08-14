// *Variables*
// Create a variable and console log the value
let num  = 10
    console.log(num)

// Create a variable, add 10 to it, and alert the value
let secondNum = 20
secondNum = secondNum + 10
alert(secondNum)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNumAndAlert ( n1, n2, n3, n4){
    alert(n1-n2-n3-n4)

}
subFourNumAndAlert(5,4,3,2)


// Create a function that divides one number by another and returns the remainder

function getTheRem (n1, n2){
    return n1 % n2
}
console.log ( getTheRem(12,3) )

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoAlert (n1, n2){
    if (n1 + n2 > 50){
        alert("Jumanji")
    }
}
addTwoAlert(50,1)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multThreeZebra (n1, n2, n3){
    let product = n1 * n2 * n3
    if (product % 3 === 0){
        alert("Zebra")
    }
}
multThreeZebra(3, 3, 1)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function logWordXTimes (word, num){
    for (let i = 1; i <= num; i++){
        console.log(word)
    }
}
logWordXTimes("tight", 10)