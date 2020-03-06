console.log(`hello`);

// <!-- CREATE A GREETING APP WITH JQUERY
// Create an input
// Create a button
// When clicked the button should print a greet message in an h1 header
// Ex: input: Dragan output message: Hello there Dragan!

// You must use JQuery to complete the task -->


// Selector
let input = $(`input`);
let button = $(`#theButton`);
let placeForText = $(`#printArea`);

// Event
button.click (function(){
    let inputVal = $(`input`).val();
    $(`#areaForText`).text(`Helo there ${inputVal}!`);
})