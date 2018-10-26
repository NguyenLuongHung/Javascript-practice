var today = new Date();

var dayList = ['Monday', 'Tuesday', 'Wednesday', 'Tuesday', 'Friday', 'Saturday', 'Sunday'];

var dateIndex = today.getDate();

var date = dayList[dateIndex];

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

if (hour >= 12) {
    hour = hour - 12;
    hour = hour + " PM";
}
else {
    hour = hour + " AM";
}

document.getElementById('hour').innerHTML = hour;
document.getElementById('minute').innerHTML = minute;
document.getElementById('second').innerHTML = second;