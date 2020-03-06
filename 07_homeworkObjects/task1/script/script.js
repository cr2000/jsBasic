console.log(`hello`);


// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs


// Template for objects function
function Animal(name, kind) {
    this.name = name;
    this.kind = kind;
    this.speak = function () {
        return `Hey Bro!!!`;
    }
};

// console.log(Animal);


// let dog = new Animal(`Zizi`, `Dog`);
// console.log(`${dog.name} who is a ${dog.kind} says:"${dog.speak()}"`);

// let halfmanBearPig = new Animal(`Tom`, `mutant`);
// console.log(`${halfmanBearPig.name} who actually is a ${halfmanBearPig.kind} also says: "${halfmanBearPig.speak()}"`);

// so promt
let nameA = prompt(`Enter an animals name`);
let kindA = prompt(`Enter the kind`);

function MakeAnimalwithPrompt(name, kind) {

    this.name = name;
    this.kind = kind;
    this.speak = function(){
         return `${this.name} the ${this.kind} says: "Hey Bro!"!`
    }
}

let animal = new MakeAnimalwithPrompt(nameA, kindA);
console.log(animal);
console.log(animal.speak());






// vnes so html elementi
let name = document.getElementById("name");
let kind = document.getElementById("kind");
let button = document.getElementById("button");
let printArea = document.getElementById("placeForText");
console.log(printArea);

function MakeAnimalwithHtmL(name, kind) {

    this.name = name;
    this.kind = kind;
    this.speak = function(){
         return `${this.name} the ${this.kind} says: "Hey Brozef!"!`
    }
}

button.addEventListener("click", function () {
    let nameValue = name.value;
    let kindValue = kind.value;
    let animal = new MakeAnimalwithHtmL(nameValue, kindValue);
    // printArea.innerHTML = "";
    printArea.innerHTML += `${animal.speak()} </br>`
    console.log(animal);
  

});






