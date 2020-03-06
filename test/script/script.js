let myButton = document.getElementById("myBtn");
let inputName = document.getElementById("inputName");
let inputNumber = document.getElementById("inputNumber");
let result = document.getElementById("result");


function addToPhoneBook(name, number, element){
    element.innerHTML += `<li>${name}: ${number}</li>`;
}
myButton.addEventListener("click", function(){
    addToPhoneBook(inputName.value, inputNumber.value, result)
    inputName.value = "";
    inputNumber.value = 0;
});