
// HOMEWORK 5
// TASK 1

// change text in all p and headers

let headerOne = document.querySelector('#myTitle');
headerOne.innerText = "Text from another dimension";
console.log(headerOne);

document.querySelector("p").innerText = "Easy pretty it's. Exercise an is this";
document.getElementsByClassName("second")[0].innerText = "Hello from the p in the secon div";
document.querySelector("text").innerText += " baloons! ";
document.querySelector("text").style.backgroundColor = "lightblue";


let papa = document.getElementsByTagName("BODY")[0];
let child3 = papa.children[2];
console.log(child3);
console.log(papa);
let secondh1 = child3.firstElementChild;
console.log(secondh1);
secondh1.innerText = "Changed it shall be!"

document.querySelector("h3").innerText = "This also as well."
document.querySelector("h3").style.color = "#34a8eb";



// TASK 2


// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)





partForTheContentOfTheList = document.getElementById('secondtask');
console.log(partForTheContentOfTheList);
let arrayWithNumbers = [1,2,3,4,5,6,7,8,9,0];

function printArray(array){
    
    partForTheContentOfTheList.innerHTML = ""; // clearing element
    // partForTheContentOfTheList = document.createElement('ol';)
    // partForTheContentOfTheList.innerHTML += "<ol>";
    let theList = document.createElement("ol");     
    for(let i=0; i < arrayWithNumbers.length; i++){
        let li = document.createElement('li');
        li.innerText = `${arrayWithNumbers[i]}`;
        theList.appendChild(li);
        // theList.innerText += (`${arrayWithNumbers[i]} + ${arrayWithNumbers[i]}`)

        
    }
    partForTheContentOfTheList.appendChild(theList);

    // partForTheContentOfTheList.innerHTML += "</ol>" 
}
printArray();





// function printNumbers(array) {
//     let ul = document.createElement('ol');

//     for(let i = 0; i < array.length; i++)
//     {
//         let li = document.createElement('li');
//         li.innerText = `${array[i]}`;
//         ul.appendChild(li);
//     }

//     div.appendChild(ul);
// }

// let printOut = printNumbers(array);



// function printArray(array){
//     partForTheContentOfTheList.innerHTML = ""; 
//     // let ol = document.createElement('ol');
//     // partForTheContentOfTheList.innerHTML += "<ol>";
//     for(let element of arrayWithNumbers){
//         partForTheContentOfTheList.innerHTML += `<li>${element}</li>`;
//     }
//     // partForTheContentOfTheList.innerHTML += "</ol>"
// }
// printArray(arrayWithNumbers);
// neznam zasho ne mi dava ordered list

function sumOfNumbersInArray(array){
    
    let sumOfTheElements = 0;
    for(i=0; i < arrayWithNumbers.length; i++){
        sumOfTheElements += arrayWithNumbers[i];
    }
    console.log(sumOfTheElements);
    return sumOfTheElements;
}
sumOfNumbersInArray(arrayWithNumbers);



partForTheContentOfTheList.innerHTML += `</br> The sum of the elements is ${sumOfNumbersInArray()}`;
// kako da go napravam bonusot?!?!? :D:D


// function showTheEquation(array){
//     for(i=0; i<arrayWithNumbers.length; i++){
//         partForTheContentOfTheList.innerText += ` ${arrayWithNumbers[i]} +`
//     }

// }
// showTheEquation();

// BONUS Task 3
// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as header
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)












// od predavanje programche za dom
// let myApp = document.getElementById("app");
// let titleDiv = myApp.firstElementChild;
// let contentDiv = myApp.children[1];

// let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
// let subjects = ["Math", "English", "Science", "Sport"];
// let grades = ["A", "B", "A", "C"];


// function printGrades(subjects, grades, element) {
//     console.log(element);
//     element.innerHTML = ""; // clearing element
//     element.innerHTML += "<ul>";
//     for (let i = 0; i < subjects.length; i++) {
//         element.innerHTML += `<li>${subjects[i]}: ${grades[i]}</li>`;
//     }
//     element.innerHTML += "</ul>"
// }

// function printStudents(students, element) {
//     element.innerHTML = ""; // clearing element
//     element.innerHTML += "<ol>";
//     for (let student of students) {
//         element.innerHTML += `<li>${student}</li>`;
//     }
//     element.innerHTML += "</ol>"
// }


// console.log(printStudents("Josh", "h3"));
// function academyPanel(person, name) {
//     if (person === "student" && name.length >= 2) { // if its student and has name longer than 1 letter
//         titleDiv.innerHTML += "<h1><b>Hello there " + name + "</b></h1>";
//         titleDiv.innerHTML += "<p>Welcome to your student page</p>";
//         contentDiv.innerHTML += "<h3>Your grades:</h3>"
//         console.log(contentDiv);
//         printGrades(subjects, grades, contentDiv);
//     } else if (person === "teacher" && name.length >= 2) {
//         titleDiv.innerHTML += `<h1><b>Hello ${name}!</b></h1>
//       <p>Welcome to your teachers page</p>`;
//         contentDiv.innerHTML += "<h3>Your students:</h3>"
//         printStudents(students, contentDiv);
//     } else {
//         titleDiv.innerHTML += "<h1><b>Your login was unsucessfull</b></h1>";
//         titleDiv.innerHTML += "<p>Please try again!</p>";
//     }
// }

// let input = prompt("Are you a student or a teacher?");
// let name = prompt("What is your name?");
// academyPanel(input, name);














console.log(`endOfCode`);





// let div = document.querySelector(`.container`);


// function createArray(a,b) {

//     let array = [];
//     i = a;
//     while((array[array.length] = i) < b){
    
//         i++;
//     }
//     return array; 
// }
// let array = createArray(1,10);


// function printNumbers(array) {
//     let ul = document.createElement('ol');

//     for(let i = 0; i < array.length; i++)
//     {
//         let li = document.createElement('li');
//         li.innerText = `${array[i]}`;
//         ul.appendChild(li);
//     }

//     div.appendChild(ul);
// }

// let printOut = printNumbers(array);



// function sumNumbers(array) {
//     let p = document.createElement(`p`);
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         sum += array[i];
//         // let li = document.createElement('li');
//     }
//     p.innerText = `${sum}`;

//     div.appendChild(p);
// }

// let printResult = sumNumbers(array);