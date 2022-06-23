// hero day
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

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
var notes = {
    am9: $(9).value,
    am10: $(10).value,
    am11: $(11).value,
    pm12: $(12).value,
    pm1: $(13).value,
    pm2: $(14).value,
    pm3: $(15).value,
    pm4: $(16).value,
    pm5: $(17).value,
}

// clear the local storage on second day




