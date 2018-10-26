function checkLeap(year){
    if (year % 4 === 0 && year % 100 !== 0){
        return true;
    }
    else if (year % 400 === 0){
        return true;
    }
    else {
        return false;
    }
}
function checkDate(year, month, day){
    var date = [];
    if (checkLeap(year)){
        date = [31,29,31,30,31,30,31,31,30,31,30,31];
    }
    else {
        date = [31,28,31,30,31,30,31,31,30,31,30,31];
    }
    
    if (day > date[month]){
        return false;
    }
    else {
        return true;
    }
    
}

function validateDate(){
    console.log("hello");
    var month = document.querySelector('.month').value;
    var date = document.querySelector('.date').value;
    var year = document.querySelector('.year').value;
    console.log("month: " +month);
    console.log("date: " +date);
    console.log("year: "+year);
    console.log("is leap: "+checkLeap(year));
    console.log("valid date: " +checkDate(year, month, date));
    
    
        
}

function check(event){
    console.log(event.keyCode);
    var month = document.querySelector('.month').value;
    var date = document.querySelector('.date').value;
    var year = document.querySelector('.year').value;
    
    if (!checkDate(year, month, date)){
        
    }
}

document.onkeydown = function(e){
    var key = e.charCode || e.keyCode;
    console.log("key: " + key);
    var month = document.querySelector('.month').value;
    var date = document.querySelector('.date').value;
    var year = document.querySelector('.year').value;
    if (!checkDate(year, month, date)){
        e.preventDefault();
    }
        
}

/*
document.querySelector('.date').addEventListener('keydown', function(event){
    console.log(event.key);
    var month = document.querySelector('.month').value;
    var date = document.querySelector('.date').value;
    var year = document.querySelector('.year').value;
    
    if (checkDate(year, month, date)){
        document.getElementById('date').disabled = false;
    }else {
        document.getElementById('date').disabled = true;
    }
});
*/