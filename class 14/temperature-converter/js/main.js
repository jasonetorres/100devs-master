document.querySelector("#yell").addEventListener("click", run)

function run (){
    console.log("YO")

    let firstName = document.querySelector('#firstName').value

    firstName = firstName * 9/5 + 32

    document.querySelector('#placeToYell').innerText = firstName
}
