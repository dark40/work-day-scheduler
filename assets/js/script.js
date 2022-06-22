// hero day
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

// change color code between time
var currentHour = parseInt(today.format("H"));

$("textarea").each(function() {
    var hour = parseInt(this.id);
    if (hour > currentHour){
        $(this).addClass("future");
    } else if (hour < currentHour) {
        $(this).addClass("past");
    } else if (hour == currentHour) {
        $(this).addClass("present");
    }
});

// save to local storage for only a day 




