

var current = new Date();


var year = current.getFullYear();
var month = current.getMonth();
var date = current.getDate();

function showDate(){
    month += 1;
    var today = date+"/"+month+"/"+year;
    document.getElementById('demo').innerHTML = today;
}