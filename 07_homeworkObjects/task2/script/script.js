console.log(`heloo`);

// HOMEWORK PART 2
// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, 
// readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML


// function Book(title, author, readingStatus) {
//     this.title = title;
//     this.author = author;
//     this.status = readingStatus;

//     this.ifReadingStatus = function() {
//         if(this.status === true) {
//             return `Already read the ${title}.`;
//         }
//         if(this.status === false) {
//             return `You still need to read ${title}!`;
//         }
//     }
// }

// let book = new Book (`The Robots of dawn`, `Isaac Asimov`, true);
// console.log(book.ifReadingStatus());

// let secretBook = new Book (`Mockingjay: The Final Book of The Hunger Games`, `Suzanne Collins`, false);
// console.log(secretBook.ifReadingStatus());


let title = document.getElementById("bookName");
let author = document.getElementById("author");
let readingStatus = document.getElementById("readingStatus");
let button = document.getElementById("button");
let printArea = document.getElementById("printArea");
// console.log(printArea);

function Book(title, author, readingStatus){
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;

    this.readingStatusMethod = function(){
        if(this.readingStatus === true){
            return `already read ${title}`
        } else if (this.readingStatus === false){
            reurn `Need to read ${title}`
        }
    }
}

button.addEventListener('click', function() {
    let titleValue = title.value;
    let authorValue = author.value;
    let readingStatusValue = readingStatus.value;
    let book = new Book(titleValue, authorValue, readingStatusValue)
    printArea.innerText = `${book.readingStatusMethod()}`;
})