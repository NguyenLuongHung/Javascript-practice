function checkLeap(){
    var year = document.getElementById('date__input').value;
    
    if (year % 4 === 0 && year % 100 !==0){
        display(year + ' is leap year');
    }
    else if (year % 400 === 0){
        display(year + ' is leap year');
    }
    else {
        display(year + ' is not leap year');
    }
    
    document.getElementById('date__input').value = "";
}

function display(text){
    document.getElementById("demo").innerHTML = text;
}