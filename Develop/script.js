
// Set current date and time at top of website
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
var currentTime = moment();
currentTime = currentTime.startOf("hour");
var beforeTime = moment().startOf('day').add(9, "hours");


// Time blocks

// Time blocks implemented to html
// 9 AM 
var am9 = beforeTime.add(0, "h");
// var time1 = beforeTime;
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
