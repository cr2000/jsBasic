console.log(`Hi`);

// // task1homeworkpart1
function theSumOfMinAndMaxInAnArray(array) {

    for (let i = 0; i < array.length; i++) {

        let theminimum = array[i];
        let themaximum = array[i];

        if (typeof (array[i]) !== "number")
            continue;

        for (let i = 0; i < array.length; i++) {

            if (array[i] < theminimum)
                theminimum = array[i];

            if (array[i] > themaximum)
                themaximum = array[i];
        }

        let thesum = theminimum + themaximum;
        console.log(`the maximun is ${themaximum}, the minimum is ${theminimum}, and the sum of those two numbers is ${thesum}`)
        return thesum;
    }
}

theSumOfMinAndMaxInAnArray(["a", "b", 15, "c", 27, 9, 6])

// bez eden for, ama so infinity i index
function theSumOfMinAndMaxInAnArray01(array) {
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) !== "number") {
            continue;
        }
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    console.log(`The maximum is ${max}, the min is ${min}, and the sum of minAndMax is ${max + min}`)
    return min + max;


}

// so for - of i infinity kako sporedba
theSumOfMinAndMaxInAnArray01(["a", "b", 15, "c", 27, 9, 6])

function theSumOfMinAndMaxInAnArray02(array){
    let min = Infinity;
    let max = -Infinity;
    for(let element of array){

        if (typeof (element) !== "number") {
            continue;
        }
        if(element < min){
            min = element;
        }
        if(element > max){
            max = element;
        }
    }
    console.log(`Min${max}, Max${min}, SUM: ${max + min}`)
    return min + max;

}
theSumOfMinAndMaxInAnArray02(["a", "b", 15, "c", 27, 9, 6])










// // task2homework part 2

// // Write a javascript function that:
// // When given 2 arrays of students firstNames and lastNames
// // Will return a new array with students full names
// // Every name should have a numeric value before it
// // Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// // Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]






// // task2homework part 2
function returnfullnames(studentnames, studentlastnames) {
    let fullnamesArray = [];

    for (i = 0; i < studentnames.length; i++) {
        fullnamesArray.push(`${studentnames[i]} ${studentlastnames[i]}`)
    }
    console.log(fullnamesArray);
    return fullnamesArray;

}
returnfullnames([`jack`, `tom`, `stephan`], [`manev`, `trajov`, `banov`]);





// lista vo array

// function printListItems(olHtlmElement, array) {
//     let htmlText = '';
//     for (let element of array) {
//         htmlText += `<li>${element}</li>`;
//     }
//     olHtlmElement.innerHTML = htmlText;
// }
// printListItems(`hello`, [`banov`, `trajov`, `banov`]);








// Task 0: Create an array bonus


// Create a function that takes an number and creates array with all numbers till that number.

// Examples
// createArray(5) ➞  [1, 2, 3, 4, 5]
// createArray(10) ➞  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// createArray(-5) ➞  []
// Notes
// Don't forget to return the result.

// function createArr() {
//     let myArray = [];
//     for(let i = 1; i <= 10; i++){

//     }
//     myArray.push(i);
//     return myArray;
// }

//  console.log(myArray(i));

// Task 0: Create an array bonus
function createArray(b) {
    let array = [];
    for (let i = 0; i < b; i++) {
        array.push(i);

    }
    return array;
}
console.log(createArray(11));







// task1 bonus--

// // Selecting second element from array
// let secondNumberInArray = arrayWithNumber[1];
// console.log(secondNumberInArray);
// Task 1: Return the First Element in an Array
// Create a function that takes an array and returns the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500
// Notes

// const array1 = [1, 2, 3];

// const firstElement = array1.shift();

// console.log(array1);
// // expected output: Array [2, 3]

// console.log(firstElement);
// // expected output: 1




// task1 bonusReturn the First Element in an Array
function returnFirstElement(array) {
    let firstElement = array.shift();
    console.log(`the first element is ${firstElement}`);
    return firstElement;
}

returnFirstElement([7, 3, 4, 5, 2, 77]);
returnFirstElement([1, 2, 3])
returnFirstElement([80, 5, 100])
returnFirstElement([-500, 0, 50])


// task2Reverse an Array bonus
// Write a function to reverse an array.

// prv nachin
function reverse(array) {
    let arrayx = [];     

        arrayx = array.reverse();
          
    console.log(array);
    return arrayx;
}

reverse([7, 2, 3, 4, 5, 6]);
reverse([9, 9, 2, 3, 4]);
reverse([1,2,3,4,5,6]);

// vtor nachin

function reverse2(array){
    let arrayReverse = [];
    for(i = array.length - 1; i >= 0; i--){
        let x = array[i];
        arrayReverse.push(x);
    }
    console.log(arrayReverse);
    return arrayReverse;

}
reverse2([7, 2, 3, 4, 5, 6]);
reverse2([9, 9, 2, 3, 4]);
reverse2([1,2,3,4,5,6]);

// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// Task 3: Find the Index

function searchIfIndexPresent(array, index){
  
    let a = array.indexOf(index);
    console.log(a);
    return a;

}
searchIfIndexPresent([1, 2, 3, 4], 2);
searchIfIndexPresent([2, 4, 6, 8, 10], 8) ;
searchIfIndexPresent([1, 3, 5, 7, 9], 11) ;


//vtor nachin ako indeksot e ednakov na vneseniot broj

function search(array, number) {
    let index;
    for (i = 0; i < array.length; i++) {
        index = i;
        if (array[i] === number) { 
            break;
        }
        else {
            index = -1;
        }    
    }  
    console.log(index);
    return index;      
}

search([1, 2, 3, 4], 2);
search([2, 4, 6, 8, 10], 8) ;
search([1, 3, 5, 7, 9], 11) ;

// task 4


// Task 4: Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.


function check(array, number){
    for(let element of array){
        if(element === number){
            console.log(`${element} is contained.`)
            return element;
        }
    }
    console.log(`No such element`);
}


check([1, 2, 3, 4, 5], 3) 
check([1, 1, 2, 1, 1], 7) 
check([5, 5, 5, 6], 5) 
check([], 5) 




// Task 5: Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.

// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.

// Notes
// Don't forget to return the result.
// If you get an empty array, return an empty array: []


// Task 5: Negate the Array of Numbers
function negate(array){
    let oppositeArray = [];
    for (let element of array){
        element = element * (-1);
        oppositeArray.push(element);

    }
    console.log(oppositeArray);
    return oppositeArray;
}





negate([1, 2, 3, 4])
negate([-1, 2, -3, 4])
negate([]) 


// task6
// Task 6: Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.


function diffMaxMin(array){
    let max = -Infinity;
    let min = Infinity;
    for(let element of array){
        if(element > max)
        max = element;
        if(element < min)
        min = element;
    }
    let difference = max - min;
    console.log(`Smallest number is ${min}, biggest is ${max} and the differnce is ${difference}.`)
    return difference;
}





diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])
// Smallest number is -50, biggest is 32.
diffMaxMin([44, 32, 86, 19])
// Smallest number is 19, biggest is 86.

// Task 7: Multiply by Length
// Create a function to multiply all values in an array by the amount of values in that array.

function MultiplyByLength(array){
    let oppositeArray = [];
    for (let element of array){
        element = element * (2);
        oppositeArray.push(element);

    }
    console.log(oppositeArray);
    return oppositeArray;
}




MultiplyByLength([2, 3, 1, 0]) 
MultiplyByLength([4, 1, 1]) 
MultiplyByLength([1, 0, 3, 3, 7, 2, 1]) 
MultiplyByLength([0]) 




// Task 8: Hurdle Jump
// Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.

// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.


function hurdleJump(array, number){
    for(i=0; i < array.length; i++){
        if(number < array[i]){
            return false

            
        }
    }
    
    return true;
}




console.log(hurdleJump([1, 2, 3, 4, 5], 5)) ;
console.log(hurdleJump([5, 5, 3, 4, 5], 3));
console.log(hurdleJump([5, 4, 5, 6], 10)) ;
console.log(hurdleJump([1, 2, 1], 1) );










// Task 9: Generate a Countdown of Numbers in an Array
function countdown(number){
    let arrayCountdown = [];
    for(i=0; i < number; i++){
        arrayCountdown.push(i);
    }
    console.log(arrayCountdown);
    return arrayCountdown;
}



countdown(10) ;
countdown(9) ;
countdown(0) ;






// Task 10: Odd Up, Even Down



function transform(array){
    let newArr = [];
    
    for(let element of array){
        if(element % 2 === 0){
            newArr.push(element - 1);


        }
        if(element % 2 === 1){
            newArr.push(element + 1);
        }
    }
    console.log(newArr);
    return newArr;
}

transform([1, 2, 3, 4, 5]) 
transform([3, 3, 4, 3]) 
transform([2, 2, 0, 8, 10]) 


