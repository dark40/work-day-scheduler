// hero day
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// change color code between time
// Reference: https://stackoverflow.com/questions/62904905/how-do-i-color-code-time-blocks-using-js
var currentHour = parseInt(today.format("H"));

$("textarea").each(function () {
    var hour = parseInt(this.name);
    if (hour > currentHour) {
        $(this).addClass("future");
    } else if (hour < currentHour) {
        $(this).addClass("past");
    } else if (hour == currentHour) {
        $(this).addClass("present");
    }
});

var am9 = document.querySelector("#t9");
var am10 = document.querySelector("#t10");
var am11 = document.querySelector("#t11");
var pm12 = document.querySelector("#t12");
var pm1 = document.querySelector("#t13");
var pm2 = document.querySelector("#t14");
var pm3 = document.querySelector("#t15");
var pm4 = document.querySelector("#t16");
var pm5 = document.querySelector("#t17");
var pop = document.querySelector("#popUp");

// save to local storage
function saveNotes() {

    var notes = {
        am9: am9.value,
        am10: am10.value,
        am11: am11.value,
        pm12: pm12.value,
        pm1: pm1.value,
        pm2: pm2.value,
        pm3: pm3.value,
        pm4: pm4.value,
        pm5: pm5.value
    }

    localStorage.setItem("notes", JSON.stringify(notes));

}

function renderSavedNotes() {

    var lastNote = JSON.parse(localStorage.getItem("notes"));

    if (lastNote !== null) {
        am9.value = lastNote.am9;
        am10.value = lastNote.am10;
        am11.value = lastNote.am11;
        pm12.value = lastNote.pm12;
        pm1.value = lastNote.pm1;
        pm2.value = lastNote.pm2;
        pm3.value = lastNote.pm3;
        pm4.value = lastNote.pm4;
        pm5.value = lastNote.pm5;
    } else {
        return;
    }

}

// Let the popup show and disappear in 2 seconds. 
function popUp() {
    pop.setAttribute("style", "display:block;");

   setTimeout(() => {
        pop.setAttribute("style", "display:none;");
   }, 2000);
}


$(".saveBtn").click(function () {
    saveNotes();
    renderSavedNotes();
    popUp();
})

function init() {
    renderSavedNotes();
}
init();



