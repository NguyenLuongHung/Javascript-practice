const num = Math.ceil(Math.random()*10);
const gum = prompt("Input guess number!");
if (gum == num){
    alert("Good guess!");
}
else {
    alert("Wrong guess, the number is "+num);
}