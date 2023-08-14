let phoneNumber = "";

document.querySelector('#one').addEventListener('click', appendNumber.bind(null, '1'));
document.querySelector('#two').addEventListener('click', appendNumber.bind(null, '2'));
document.querySelector('#three').addEventListener('click', appendNumber.bind(null, '3'));
document.querySelector('#four').addEventListener('click', appendNumber.bind(null, '4'));
document.querySelector('#five').addEventListener('click', appendNumber.bind(null, '5'));
document.querySelector('#six').addEventListener('click', appendNumber.bind(null, '6'));
document.querySelector('#seven').addEventListener('click', appendNumber.bind(null, '7'));
document.querySelector('#eight').addEventListener('click', appendNumber.bind(null, '8'));
document.querySelector('#nine').addEventListener('click', appendNumber.bind(null, '9'));
document.querySelector('#phoneNumber').addEventListener('click', clearPhoneNumber);

function appendNumber(number) {
  phoneNumber += number;
  document.querySelector('#phoneNumber').innerText = phoneNumber;
}

function clearPhoneNumber() {
  phoneNumber = "";
  document.querySelector('#phoneNumber').innerText = phoneNumber;
}

function zero() {
  var video = document.getElementById("video");
  video.removeAttribute("hidden");
}
