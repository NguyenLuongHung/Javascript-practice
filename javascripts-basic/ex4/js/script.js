function rotate(id){
    var element = document.getElementById("demo");
    var textNode = element.childNodes[0];
    var text = textNode.data;
    
    setInterval(function(){
        
        text = text.charAt(text.length-1)+text.substring(0, text.length-1);
        textNode.data = text;
    }, 500);
}