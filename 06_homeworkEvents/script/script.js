console.log(`hi`);

// task1
let who = document.getElementById("myInput1");
console.log(who);
let when = document.getElementById("myInput2");
console.log(when);
let where = document.getElementById("myInput3");
console.log(where);
let myButton = document.getElementById("generate");
console.log(myButton);
let story = document.getElementById("story");
console.log(story);

myButton.innerText = "Generate!";

function generateStory(who, where, when) {
    story.innerHTML += `There was a hero named ${who}. He lived in ${where} in the times of ${when}. It was a great hero indeed.`;
}
myButton.addEventListener("click", function () {
    generateStory(who.value, where.value, when.value)
    who.value = "";
    where.value = "";
    when.value = "";
});


// task2

let rows = document.getElementById("rows");
let columns = document.getElementById("columns");
let table = document.getElementById("table");
let myCreateTableButton = document.getElementById("createTable");
// console.log(myCreateTableButton);





function createTable(rows, columns) {



    table.innerHTML = "";

    for (let r = 0; r < parseInt(rows, 10); r++) {

        let x = table.insertRow(r);
        console.log(x);
        for (let c = 0; c < parseInt(columns, 10); c++) {
            let y = x.insertCell(c);
            console.log(y);
            y.innerHTML = "Row-" + r + " Column-" + c;
        }
    }
}

myCreateTableButton.addEventListener("click", function () {
    createTable(rows.value, columns.value)
    rows.value = "";
    columns.value = "";

});