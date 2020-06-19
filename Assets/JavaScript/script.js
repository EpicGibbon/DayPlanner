// 1- Display current time using moment.js
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
//2 - Click event to save text area content to locaL STORAGE
$("#currentDay").text(moment().format('ddd MMM Do, YYYY'));
moment().format("YYYY-MM-DD HH:mm");

var dayPlan = description
localStorage.setItem("textarea", textarea);
console.log(localStorage);

//Saving the inputs into a variable
var dayPlan = JSON.parse(localStorage.getItem("textarea"));

$("description").click(function() {
    var dayPlan = $(this);  //get the card that is clicked
    var storage = description.attr("class");  //get the class name of this card
    description.fadeOut();  //hide it
    localStorage.setItem("description", storage);  //save the value
    console.log(description);
  });

//When save is clicked, it saves it to local storage
$(".saveBtn").click(function(event) {
    event.preventDefault();



    storeSave();
  });
//3 - When the app opens, display content for each time block from local storage
    // It can be done with a for loop(more efficient) or by targetting each time block seperartly

//4 - change time block background color depending in the current hour (past, present and future).

