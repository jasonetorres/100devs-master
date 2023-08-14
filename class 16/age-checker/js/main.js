//Create a conditonal that checks their age

//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
let age = 3
if (age < 16){
    console.log("you ain't driving")
} else if( age<18){
    console.log("you hating out there")
}else if(age<21){
    console.log("you ain't sipping")
}else if(age<25){
    console.log("you aint renting")
}else if(age<=30){
    console.log("you ain't buying")
}else if(age>30){
    console.log("you old")
}
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
//--- Easy
//create a variable and assign it a number
let num = 1
//minus 10 from that number
num = num - 10
//print that number to the console
console.log(num)
//--- Medium
//create a variable that holds a value from the input
let inputedVal = document.querySelector("#danceDanceRevolution").value
//add 25 to that number
inputedVal = inputedVal + 25
//alert that number
alert(inputedVal)

//--- Hard
//create a variable that holds the h1
const h1Holder = document.querySelector("h1")

//add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener("click", sum)
function sum(){
    console.log (num + Number(inputedVal) )
}