// a box to input the temperature you are looking to convert
//create the code in js that will allow someone to put the temp in and convert to 
// the specified temp
//create an output
// 0 -> 32 
// need the value that is in C 


// convert from C to F 

// show it


document.querySelector('#temp').addEventListener('click', convert)

function convert() {
    let temp = document.querySelector('#temp').value

    temp = temp * 9/5 + 32 
    
    document.querySelector('#tempInF').innerText = temp

}