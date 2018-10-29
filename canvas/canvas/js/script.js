var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

/*---------------------- Rectable ------------------------------*/
///* Fill color for rectangle */
//c.fillStyle = 'rgba(255, 0, 0, 0.5)';
//
///* Draw rectangle */
//c.fillRect(100, 100, 100, 100);
//c.fillStyle = 'rgba(0, 255, 0, 0.5)';
//c.fillRect(300, 200, 100, 100);
//
//c.fillStyle = 'rgba(0, 0, 255, 0.5)';
//c.fillRect(500, 300, 100, 100);
//
//console.log(c);


/*---------------------- Straight Line ------------------------------*/
//// Line
//c.beginPath();
//c.moveTo(100, 100);
//c.lineTo(500, 300);
//c.lineTo(700, 300);
//c.lineTo(700, 500);
//
//// Color for stroke
//c.strokeStyle = "#ff0000";
//c.stroke();

/*---------------------- Arc / Circle ------------------------------*/

// Arc / Cirlcle
//var increment = 0;
//for (var i = 0; i < 2500;i++){
//    var x = Math.random() * window.innerWidth;
//    var y = Math.random() * window.innerHeight;
//    
//    c.beginPath();
//    c.arc(x, y, 50, 0, Math.PI * 2 , false);
//    
//    c.stroke();
//}




function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    
    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2 , false);
        c.strokeStyle = "blue";
        c.stroke();
        c.fill();
        this.update();
    }
    
    this.update = function(){
        this.x += this.dx;
        this.y += this.dy;

        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
    }
}


var circleArray = [];

for (var i = 0; i < 1000; i++){
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var radius = 30;
    var dx = Math.random() - 0.5;
    var dy = Math.random() - 0.5;
    circleArray.push(new Circle(x, y, dx, dy, radius));
    
}

console.log(circleArray);




function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0 ,0, window.innerWidth, window.innerHeight);
    
    for (var i = 0; i < circleArray.length;i++){
        circleArray[i].draw();
    }
    
   
}


animate();



















