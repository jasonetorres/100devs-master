//---Easy
//create a function that subtracts two numbers and alerts the difference

//create a function that divides three numbers and console logs the quotient

//create a function that multiplys three numbers and returns the product

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function subTwoAndAlert (n1,n2){
    alert( n1 - n2)
}
//subTwoAndAlert (46, 9)

function divThreeAndAlert (first, second, third){
    console.log( first / second / third)

}

//divThreeAndAlert( 100, 2, 10)

function multThreeNumAndReturn ( num1, num2, num3){
    return num1 * num2 * num3
}
let product = multThreeNumAndReturn (10, 10, 10)
//alert(product)

//function turnInMoney (){
    //let product = multThreeNumAndReturn (4, 10, 10)
    //alert ("$" + product)


//turnInMoney()

//function addTwoAndDivide (n1, n2, n3) {
  //  return (n1 + n2) % n3
//}
//console.log (addTwoAndDivide(50,10,2))
