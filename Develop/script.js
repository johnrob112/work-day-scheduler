
// Set current date and time at top of website
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
var currentTime = moment();
currentTime = currentTime.startOf("hour");

// Set start of day at 9am
var beforeTime = moment().startOf('day').add(9, "hours");


// Time blocks

// Time blocks implemented to html
// 9 AM 
var am9 = beforeTime.add(0, "h");
am9 = am9.format('hh:mm A');
$(".block1").text(am9);
// 10 AM
var am10 = beforeTime.add(1, "h");
am10 = am10.format('hh:mm A');
$(".block2").text(am10);
// 11 AM
var am11 = beforeTime.add(1, "h");
am11 = am11.format('hh:mm A');
$(".block3").text(am11);
// 12 PM
var pm12 = beforeTime.add(1, "h");
pm12 = pm12.format('hh:mm A');
$(".block4").text(pm12);
// 1 PM
var pm1 = beforeTime.add(1, "h");
pm1 = pm1.format('hh:mm A');
$(".block5").text(pm1);
// 2 PM
var pm2 = beforeTime.add(1, "h");
pm2 = pm2.format('hh:mm A');
$(".block6").text(pm2);
// 3 PM
var pm3 = beforeTime.add(1, "h");
pm3 = pm3.format('hh:mm A');
$(".block7").text(pm3);
// 4 PM
var pm4 = beforeTime.add(1, "h");
pm4 = pm4.format('hh:mm A');
$(".block8").text(pm4);
// 5 PM
var pm4 = beforeTime.add(1, "h");
pm4 = pm4.format('hh:mm A');
$(".block9").text(pm4);


function testTime() {
    // Add 9AM
    am9 = moment().startOf('day').add(9, "hours");
    // Adjusts current time to the hour
    currentTime = currentTime.startOf("hour");
    // Add if/else for the different time slots to determine past/present/future
    if (currentTime.isAfter(am9)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(am9)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(am9)) {
        $(".form9").addClass("present");
    };
    // 10AM
    am10 = moment().startOf('day').add(10, "hours");
    if (currentTime.isAfter(am10)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(am10)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(am10)) {
        $(".form10").addClass("present");
    };
    // 11AM
    am11 = moment().startOf('day').add(11, "hours");
    if (currentTime.isAfter(am11)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(am11)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(am11)) {
        $(".form11").addClass("present");
    };
    // pm12 12PM
    pm12 = moment().startOf('day').add(12, "hours");
    // Add pm12 if/else
    if (currentTime.isAfter(pm12)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isBefore(pm12)) {
        $(".form12").addClass("future");
    }
    else if (currentTime.isSame(pm12)) {
        $(".form12").addClass("present");
    };
    // 1PM
    pm1 = moment().startOf('day').add(13, "hours")
    if (currentTime.isAfter(pm1)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(pm1)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(pm1)) {
        $(".form1").addClass("present");
    };
    // 2PM
    pm2 = moment().startOf('day').add(14, "hours");
    if (currentTime.isAfter(pm2)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isBefore(pm2)) {
        $(".form2").addClass("future");
    }
    else if (currentTime.isSame(pm2)) {
        $(".form2").addClass("present");
    };
    // pm3 3M
    pm3 = moment().startOf('day').add(15, "hours");
    // Add pm3 if/else
    if (currentTime.isAfter(pm3)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isBefore(pm3)) {
        $(".form3").addClass("future");
    }
    else if (currentTime.isSame(pm3)) {
        $(".form3").addClass("present");
    };
    // 4pm
    pm4 = moment().startOf('day').add(16, "hours");
    if (currentTime.isAfter(pm4)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isBefore(pm4)) {
        $(".form4").addClass("future");
    }
    else if (currentTime.isSame(pm4)) {
        $(".form4").addClass("present");
    };
    // 5pm
    pm5 = moment().startOf('day').add(17, "hours");
    if (currentTime.isAfter(pm5)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isBefore(pm5)) {
        $(".form5").addClass("future");
    }
    else if (currentTime.isSame(pm5)) {
        $(".form5").addClass("present");
    };
}


testTime();
// Loops through input area to get item from local storage
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
// Test loop:
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    // form - control
    $(".form" + x[i]).val(dataHour);
}


// Event listener to save to local stroage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});