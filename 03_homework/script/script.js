// // alert(`Hi!`);

// // task1
// function convertmilestokm(miles) {

//     if (miles >= 0 || miles < 0) {
//         let result = miles * 1.60934;
//         console.log(`${miles}miles is ${result} km`)
//     }


// }

// convertmilestokm(15);

// // task2



// function whoisthewinner(scoreA, scoreB) {
//     if (scoreA > scoreB && typeof (scoreA) === 'number' && typeof (scoreB) === 'number') {
//         console.log(`Team A has beatean Team B by ${scoreA} : ${scoreB}`)
//     } else if (scoreB > scoreA && typeof (scoreA) === 'number' && typeof (scoreB) === 'number') {
//         console.log(`Team B has beatean Team A by ${scoreA} : ${scoreB}`)
//     } else if (scoreA == scoreB && typeof (scoreA) === 'number' && typeof (scoreB) === 'number') {
//         console.log(`The match was a draw with a score of ${scoreA} : ${scoreB}`)
//     } else {
//         console.log(`You wrong`)
//     }
// }
// whoisthewinner(5, 5);


// // task3



// function cashPoint(PIN, enteredAmount, usersDailyLimit = 100, totalMoneyInATM = 300) {
//     if (PIN != 1234) {
//         console.log(`You have the wrong PIN`)
//     }
//     else if (enteredAmount > totalMoneyInATM) {
//         console.log(`ATM doesn't have enough funds`);
//     } else if (enteredAmount > usersDailyLimit) {
//         console.log(`Daily limit reached`);
//     } else {
//         console.log(`You have successfully taken out ${enteredAmount}, and you have ${usersDailyLimit - enteredAmount} left.`)
//     }
// }


// cashPoint(1234, 50);


function feettom(feet) {
    let meters = feet * 0.3048;
    return meters;
}


console.log(feettom(6));


function areaofrectangle(oneside, twoside) {
    let area = oneside * twoside;
    return area;
}
console.log(areaofrectangle(2, 3));


function numberofclasses() {
    let months = 11;
    let classes = 4;
    let sessions = 10;
    let specialclasses = 8;
    let totalclasses = months * sessions * classes + specialclasses;
    return totalclasses;
}

console.log(numberofclasses());



function areaofacircle(radius) {
    let areaofacircle = Math.PI * Math.pow(radius, 2);
    return areaofacircle;

}
console.log(areaofacircle(3));

function priceofaphone(ammountofphones) {
    let totalprice = ammountofphones * (119.95 + ((119.95 * 5) / 100));
    return totalprice;


}
console.log(priceofaphone(2));

console.log("SEDC" + " " + "2018");
console.log("2" + 4);

let sedc = "SEDC";
console.log(sedc + " " + 2018);
console.log(`Hello ${sedc} Academy 2018`);


function difference(a, b) {
    let differenceoftwo = a - b;
    if (((differenceoftwo % 2) == 0) && (differenceoftwo > 10)) {
        console.log(`Perfect!`);
    } else if ((a - b) < 0) {
        console.log(`Error`);
    } else {
        console.log(`Not Perfect`);
    }
    console.log(differenceoftwo);
    // ova nadvor od funkcijata ne go gleda javata!!!!
}

difference(40, 10);

function closerto100(a, b) {
    if (Math.abs(a - 100) < Math.abs(b - 100)) {
        console.log(`Number &quot;${a}&quot; is closer to 100 than number ${b}`);
        console.log(a);
    } else {
        console.log(`Number "${b}" is closer to 100 than number "${a}"`);
    }
}

closerto100(102, 99);


// alert("\"Hello\"");

let year = 1986;
switch ((year - 4) % 12) {

    case 0:
        console.log('Rat')
        break;
    case 0:
        console.log("Rat")
        break;
    case 1:
        console.log("Ox")
        break;
    case 2:
        console.log("Tiger")
        break;
    case 3:
        console.log("Rabbit")
        break;
    case 4:
        console.log("Dragon")
        break;
    case 5:
        console.log("Snake")
        break;
    case 6:
        console.log("Horse")
        break;
    case 7:
        console.log("Goat")
        break;
    case 8:
        console.log("Monkey")
        break;
    case 9:
        console.log("Rooster")
        break;
    case 10:
        console.log("Dog")
        break;
    case 11:
        console.log("Pig")
        break;
    default:
        console.log("Its not a good year")
        break;
}


function averageof3numbers(a, b, c) {
    if (a >= 0 && b >= 0 && c >= 0) {
        averageofthree = (a + b + c) / 3;
        console.log(averageofthree);

    } else {
        console.log(`you wrong!`);
    }
}
averageof3numbers(3, "a", 4);

//  function drinksmashine(typeofdrink, quantity){
//      let coffee = 2;
//      let water = 1;
//      let wine = 5;
//      let total = typeofdrink * quantity;
//      console.log(`${typeofdrink} quantity: ${quantity} total: ${total}`);
//  }

//  drinksmashine(water, 3);


//  ustvari ova gore vaka treba
let typeofdrink = "Coffee";
let numebrofdrinks = 4;
let priceofCoffee = 2;
let priceofJuice = 3;
let priceofWater = 1;
let priceofBeer = 4;
let priceofWine = 5;
let priceofWhisky = 10;
switch (typeofdrink) {
    case "Coffee":
        // console.log(" Coffee " + " Quantity:" + (numebrofdrinks) + " Total:" + (numebrofdrinks * priceofCoffee) + "$");
        console.log(`you ordered ${typeofdrink} quantity: ${numebrofdrinks} and the total price is ` + (numebrofdrinks * priceofCoffee) + "mkd")
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


function sums2numbers(parametar1, parametar2) {
    let sums = parametar1 + parametar2;
    console.log(sums);
    return sums;

}

sums2numbers(2, 3);

let p = [0, 1, 2, 3];
let removedItem = p.pop();
console.log(p);


function sum_sq(array) {
    var sum = 0,
        i = array.length;
    while (i--)
        sum += Math.pow(array[i], 2);
    return sum;
}

console.log(sum_sq([1,2,3,4,5,6,7]));

function squarebetwwennumbers(a, b){
    let result = 0;
   
    while(a <= b){
        result += Math.pow(a, 2);
        a++;
    }
    return result;
}
console.log(squarebetwwennumbers(3, 4));

let num = 1; 
while (num <= 100) { 
	console.log('Number ' + num); 
	num += 1; 
}

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	for (let i=0; i < days.length; i++) {    
	console.log(days[i] + ', '); 
    }
    

    let arr = [2,3,6];						
for(let num of arr){ 
	console.log(num);
}


let groceries = ["Bread", "Milk", "Butter"];
function addToGroceriesList(item){
  if(typeof(item) === "string"){ // Checking if item is string
    groceries.push(item);
    console.log(`You have added ${item} to the list!`);
  } else {
    console.log(`The item ${item} was not added to the list. Sorry.`);
  }
}
// Calling the adding function
addToGroceriesList("Salad");
addToGroceriesList("Cale");
console.log(groceries);

groceries = ["Bread", "Milk", "Butter", "Salad"];
function showGroceriesList(){
  let i = 0, listNum = 1; // listNum = counter for item numeration
  console.log("My groceries list:");
  while(i < groceries.length){
    if(groceries[i] !== null){ // a check to not show deleted items
      console.log(`${listNum}. ${groceries[i]}`);
      listNum++; // We add one if the item is not deleted (null)
    }
    i++;
  }
}
// Calling the showing function
showGroceriesList();

groceries = ["Bread", "Milk", "Butter", "Salad"];
function checkForItemInGroceriesList(item){
  for(let listItem of groceries) {
    if(listItem === item){ // Check if the item is the inputted item
      console.log(`The item ${item} was found!`);
      return listItem; // return always goes out of the function
    }
  }
  console.log(`There was no ${item} item in the list!`);
  return null; // Will not execute if the previous return is executed
}
// Calling the check item function
let searchedItem = checkForItemInGroceriesList("Butter"); // "Butter"
let searchedItem2 = checkForItemInGroceriesList("Milk"); // null

function findNumber(elnumero, formacion){
    let brojalnik = 0;
    for(let chlen of formacion){
        if(chlen === elnumero){
            brojalnik++;
            
            
        } 
    }
    return brojalnik;
    console.log(`There are ${brojalnik} occurences of number ${elnumero} in the array`)

}

console.log(findNumber(3, [2,2,3,3,3,3,3,3,4,5,2,76]));


function calculateTime(numEntered) {
    if (typeof (numEntered) !== "number") {
        return "Please enter a valid number.";
    }
    let hours = Math.floor((numEntered / 60) / 60);
    let minutes = Math.floor((numEntered - ((hours * 60) * 60)) / 60);
    let seconds = Math.floor((numEntered - (((hours * 60) * 60) + (minutes * 60))));
    return `In ${numEntered} there are ${hours}h,${minutes}m,${seconds}s.`;
  }
  let input = parseInt(prompt("Enter a number:"));
  console.log(calculateTime(input));


//   homework part1
// od ilija, istata so for-of reshena tuka samo mora so infinity da se sporeduva


// let array = [2,3,4,5,6,7,8,9];
// function summinmax(){
//     let minn = Infinity;
//     let maxx = -Infinity;
//     for (item of array){
//         if(item < minn)
//         minn = item;
//         if(item > maxx)
//         maxx = item;

//     }
//     let result = maxx + minn;
//     console.log(`the maximun is ${maxx}, the minimus is ${minn} and the sum is ${result}`)
//     return result;


// }
// console.log(summinmax());




