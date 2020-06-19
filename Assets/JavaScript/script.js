// 1- Display current time using moment.js
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
//2 - Click event to save text area content to locaL STORAGE
$("#currentDay").text(moment().format('ddd MMM Do, YYYY'));
moment().format("YYYY-MM-DD HH:mm");
//3 - When the app opens, display content for each time block from local storage
    // It can be done with a for loop(more efficient) or by targetting each time block seperartly

//4 - change time block background color depending in the current hour (past, present and future).

