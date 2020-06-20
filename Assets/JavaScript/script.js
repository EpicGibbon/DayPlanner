// 1- Display current time using moment.js
$("#currentDay").text(moment().format('dddd, MMM Do'));

function timeSlot() {
  const presentTime = moment().hours();
  $(".row").each(function () {
    console.log('this', this);
    const planRow = parseInt($(this).attr("data-time"));
    console.log("planRow", planRow);
    if (planRow < presentTime) {
      console.log("past");
      $(this).addClass("past");
    }
    else if (planRow === presentTime) {
      console.log("present");
      $(this).addClass("present");
    }
    else {
      console.log("future")
      $(this).addClass("future");
    }
  });
}
//When save is clicked, it saves it to local storage
$(document).ready(function(){

$(".saveBtn").click(function (event) {
  event.preventDefault();
  //Grabbing the previous elements value
  var prevVal = $(this).prev("textarea").val();
  var time = $(this).attr("data-time");
  localStorage.setItem(time, prevVal);
});
  
timeSlot();
// const interval = setInterval(timeSlot, 60000);
})
//3 - When the app opens, display content for each time block from local storage
$("#text-nine").val(localStorage.getItem("9"));
$("#text-ten").val(localStorage.getItem("10"));
$("#text-eleven").val(localStorage.getItem("11"));
$("#text-twelve").val(localStorage.getItem("12"));
$("#text-one").val(localStorage.getItem("1"));
$("#text-two").val(localStorage.getItem("2"));
$("#text-three").val(localStorage.getItem("3"));
$("#text-four").val(localStorage.getItem("4"));
$("#text-five").val(localStorage.getItem("5"));

    // It can be done with a for loop(more efficient) or by targetting each time block seperartly

//4 - change time block background color depending in the current hour (past, present and future).