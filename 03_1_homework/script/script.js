// script.js to homework3.1


// task1

function convertminutestoseconds() {
    minutes = prompt(`Please input the number of minutes:`);
    if(minutes >=0 || minutes < 0){
    seconds = minutes * 60;
    alert(`${minutes} minutes are ${seconds} seconds`);
    } else{
        alert(`Please enter a valid number`);
    }
}


// convertminutestoseconds();



// task2


function addonetonumber() {
    theinput = prompt("Please input the number:");

    addition = parseInt(theinput) + Number(1);
    alert(addition);
    typeof(theinput);

}
addonetonumber();

// sakav da ja npisham 
// addition = theinput + 1;
// ama mi davashe 21 ako vnesam 2 na primer. 
// **kako da napravam prompt ako vnese nesto shto ne e broj da kazhuva `vnesi broj`?








// task3




function converthrstoseconds() {
    hrs = prompt(`Please input the number of hours:`);
    if (hrs >= 0 || hrs < 0) {
        seconds = hrs * 3600;
        alert(`${hrs} hrs are ${seconds} seconds`);
    } else {
        alert(`Please enter a valid number`);
    }
}


converthrstoseconds();


// task4

function remainder(number1, number2) {

    result = number1 % number2;
    console.log(result);
}
remainder(5, 5);


// task5

function farm(chickens, cows, pigs) {
    numberoflegs = chickens * 2 + cows * 4 + pigs * 4
    console.log(numberoflegs);
}

farm(2, 2, 2);




// var str = 'Life, the universe and everything. Answer:';

// console.log(str + ' ' + str.length);


// let x = 'Mozilla';
// let empty = '';

// console.log(x + ' is ' + x.length + ' code units long');
// /* "Mozilla is 7 code units long" */

// task6

function comparestring(input1, input2) {

    if (input1.length == input2.length) {

        console.log(`true`);
    } else {

        console.log(`false`);
    }
}


comparestring("hie", "hey");


// task7

function isitplural(){
word = prompt(`Hey enter a word`);
if ((word.endsWith('s')) == true){
    console.log(`The word is plural`);
    } else{
        console.log(`It's not pluraaal`);
    }

}

isitplural();





// task8




function match(inputOne, inputTwo) {
    inputTwo = prompt(`wordone`);
    inputOne = prompt(`wordtwo`)
    if(inputOne.toLowerCase() === inputTwo.toLowerCase()){
        return true;
    }  else {
        return false;
    }
}
console.log(match());
// console.log(match("hello", "hELLo"));
// console.log(match("motive", "emotive"));
// console.log(match("venom", "VENOM")); 
// console.log(match("mask", "mAskinG")); 



// task9

function whatMonthIsIt(month) {
    // month = prompt(`Enter a number between 1 and 12`);
    switch (month) {
        
        case 1:
            return "January";
            
        case 2:
            return "February";
            
        case 3:
            return "March";
            
        case 4:
            return "April";
            
        case 5:
            return "May";
            
        case 6:
            return "June";
            
        case 7:
            return "July";
            
        case 8:
            return "August";
            
        case 9:
           return "September";
            
        case 10:
            return "October";
            
        case 11:
            return "November";
            
        case 12:
            return "December";
            
        default:
            return "We are on Mars, please switch!";
    }
}
// kako da ja napravam so prompt?
console.log(whatMonthIsIt(3));


// task10

// function truthyorfalsey(){
//     if (NaN === NaN){
//     console.log(`its falsey`);
//     } else{
//         console.log(`its truthy`);
//     }
// }
//  truthyorfalsey();


function isTruthy(value) {
    if(value) {
        return "1";
    } else {
        return "0";
    }
}

console.log(isTruthy(2));
console.log(isTruthy(false));
console.log(isTruthy(""));
console.log(isTruthy("false"));






console.log(`Finished.`);