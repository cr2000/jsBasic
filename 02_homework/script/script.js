// script.js
console.log("Hello from Javascript");


// task1

let number1 = 3;
let number2 = 7;
let number3 = 8;

let average = (number1 + number2 + number3) / 3
console.log(average);

// kako da napisham deka The numbers can't be letters or negative numbers?



// Coffee - 2$
// Juice - 3$
// Water - 1$
// Beer - 4$
// Wine - 5$
// Whisky - 10$



// task2


let typeofdrink = "Tom";
let numebrofdrinks = 4; 
let priceofCoffee = 2;
let priceofJuice = 3;
let priceofWater = 1;
let priceofBeer = 4;
let priceofWine = 5;
let priceofWhisky = 10;

switch (typeofdrink) {
    case "Coffee":
        console.log(" Coffee " + " Quantity:" + (numebrofdrinks) + " Total:" + (numebrofdrinks * priceofCoffee) + "$");
        break;
    case "Juice":
        console.log(" Juice " + " Quantity:" + (numebrofdrinks) + " Total:" + (numebrofdrinks * priceofJuice) + "$");
        break;
    case "Water":
        console.log(" Water " + " Quantity:" + (numebrofdrinks) + " Total:" + (numebrofdrinks * priceofWater) + "$");
        break;
    case "Beer":
        console.log(" Beer " + " Quantity:" + (numebrofdrinks) + " Total:" + (numebrofdrinks * priceofBeer) + "$");
        break;
    case "Wine":
        console.log(" Wine " + " Quantity:" + (numebrofdrinks) + " Total:" + (numebrofdrinks * priceofWine) + "$");
        break;
    case "Whisky":
        console.log(" Whisky " + " Quantity:" + (numebrofdrinks) + " Total:" + (numebrofdrinks * priceofWhisky) + "$");
        break;
    default:
        console.log("We are in the wrong universe");
        break;
}

// task3


let min = 1;
let max = 6;
let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    // document.write("Random Number Generated : " + random ); 

switch (random) {
    case 1:
        console.log("You are on the right track");
        break;
    case 2:
        console.log("Danger is near");
        break;
    case 3:
        console.log("Luck will find you");
        break;
    case 4:
        console.log("You are about to make a mistake");
        break;
    case 5:
        console.log("Your future is unclear");
        break;
    default:
        console.log("You broke it!")


}
