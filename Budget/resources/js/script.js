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
    
    
})(budgetController, UIController);