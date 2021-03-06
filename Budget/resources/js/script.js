<<<<<<< HEAD
// Budget Controller

var budgetController = (function(){
    
    var Expense = function (id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
    
    var Income = function (id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
    
    
})();

// UI Controller

var UIController = (function(){
    
    var DOMStrings = {
        inputType: '.add__type',
        inputValue: '.add__value',
        inputDescription: '.add__description',
        addBtn: '.add__btn',
        deleteBtn: '.item__delete--btn',
        incomeList: '.income__list',
        expenseList: '.expense__list'
    }
   
    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                value:  document.querySelector(DOMStrings.inputValue).value,
                description: document.querySelector(DOMStrings.inputDescription).value
            }
        },
        
        getDOMStrings: function(){
            return DOMStrings;
        }
    }
    
    
})();

// App Controller

var controller = (function(budgetCtrl, UICtrl){
    
    var DOM = UICtrl.getDOMStrings();
    
    var addToList = function(){
        var obj = UICtrl.getInput();
        var  newHtml, html, element;
        if (obj.type === 'inc'){
            element = document.querySelector(DOM.incomeList);
            html = '<div class="item clearfix"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">%percentage%</div><div class="item__delete"><button class="item__delete--btn"><i class="icon ion-ios-close-circle"></i>Del</button></div></div></div>';
        }
        else if (obj.type === 'exp'){
            element = document.querySelector(DOM.expenseList);
            html = '<div class="item clearfix"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">%percentage%</div><div class="item__delete"><button class="item__delete--btn"><i class="icon ion-ios-close-circle"></i>Del</button></div></div></div>'
        }
        
        newHtml = html.replace('%description%', obj.description);
        newHtml = newHtml.replace('%value%', obj.value);
        newHtml = newHtml.replace('%percentage%', '10%');
        
        element.insertAdjacentHTML('beforeend', newHtml);
    }
    
    var deleteItem = function(){
        
    }
    
    document.querySelector(DOM.addBtn).addEventListener('click',addToList);
    document.querySelector(DOM.deleteBtn).addEventListener('click',deleteItem);
    
    
=======
var budgetController = (function(){
    
    var x = 23;
    
    var add = function(a){
        return x+a;
    }
    
    var minus = function(a){
        return x-a;
    }
    
    return {
        publicText: function(b){
            return add(b);
        }
        
       
    }
    
})();

var UIController = (function() {
    
    // Some code later
    
})();

var controller = (function(budgetCtrl, UICtrl){
    
    var z = budgetCtrl.publicText(2);
    
    return {
        anotherPublic: function(){
            console.log(z);
        }
    }
    
>>>>>>> 4ee6c047f347ddff37e4188978002e1cbb67ecfc
    
})(budgetController, UIController);