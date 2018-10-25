
var DOMstrings = {
    finalIncome : '.final-income',
    incomeDisplay : '.incomeDisplay',
    expenseDisplay : '.expenseDisplay',
    optionChoice : "option-choice",
    numberInput : 'number-input',
    keyInput : 'key-input',
    incomeList : '.income-list',
    expenseList : '.expense-list'
};



/* Display -------------------------


/* Calculate -----------------------

/* Add item to list

*/

function addItem(){
    
    var e = document.getElementById(DOMstrings.optionChoice);
    var chosen = e.options[e.selectedIndex].text;
    
    var keyInput = document.getElementById(DOMstrings.keyInput).value;
    var numberInput = document.getElementById(DOMstrings.numberInput).value;
    var element;
    var html = 's';
    
    if (chosen === "income"){
        html = '<li><div class="col span-1-of-2"><span class="key">%key%</span></div><div class="col span-1-of-2 value"><span class="value">%value%</span><button onclick="removeItem()"><i class="icon ion-ios-close-circle-outline"></i></button></div></li>'
        element = DOMstrings.incomeList;
    }
    
    else if (chosen === "expense"){
        html = '<li><div class="col span-1-of-2"><span class="key">%key%</span></div><div class="col span-1-of-2 value"><span class="value">%value%</span><button onclick="removeItem()"><i class="icon ion-ios-close-circle-outline"></i></button></div></li>'
        element = DOMstrings.expenseList;
    }
    
    var newHtml = html.replace("%key%", keyInput);
    newHtml = newHtml.replace("%value%", numberInput);
    
    document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
}
