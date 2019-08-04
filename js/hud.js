
var counter1 = document.getElementById('counter1').getContext('2d');
var counter2 = document.getElementById('counter2').getContext('2d');
var counter3 = document.getElementById('counter3').getContext('2d');
var counter4 = document.getElementById('counter4').getContext('2d');

var no = 0; // Starting Point
var pointToFill = 4.72;  //Point from where you want to fill the circle 4.72
var cw1 = counter1.canvas.width;  //Return canvas width
var cw2 = counter2.canvas.width;  //Return canvas width
var cw3 = counter3.canvas.width;  //Return canvas width
var cw4 = counter4.canvas.width;  //Return canvas width
var ch1 = counter1.canvas.height; //Return canvas height
var ch2 = counter2.canvas.height; //Return canvas height
var ch3 = counter3.canvas.height; //Return canvas height
var ch4 = counter4.canvas.height; //Return canvas height
var diff;   // find the different between current value (no) and trageted value (100)

function fillCounter(){
    diff = ((no/100) * Math.PI*2*10);
    
    counter1.clearRect(0,0,cw1,ch1);   // Clear canvas every time when function is call
    counter2.clearRect(0,0,cw2,ch2); 
    counter3.clearRect(0,0,cw3,ch3); 
    counter4.clearRect(0,0,cw4,ch4); 

    counter1.lineWidth = 15;     // size of stroke
    counter2.lineWidth = 15;
    counter3.lineWidth = 15;
    counter4.lineWidth = 15;

    counter1.fillStyle = '#fff';     // color that you want to fill in counter/circle
    counter2.fillStyle = '#fff';
    counter3.fillStyle = '#fff';
    counter4.fillStyle = '#fff';

    counter1.strokeStyle = '#F5E0A9';  
    counter2.strokeStyle = '#F5E0A9'; 
    counter3.strokeStyle = '#F5E0A9'; 
    counter4.strokeStyle = '#F5E0A9';   // Stroke Color
    
    counter1.textAlign = 'center';
    counter2.textAlign = 'center';
    counter3.textAlign = 'center';
    counter4.textAlign = 'center';
    
    counter1.font = "25px monospace";    //set font size and face
    counter2.font = "25px monospace"; 
    counter3.font = "25px monospace"; 
    counter4.font = "25px monospace"; 
    
    counter1.fillText(no+'%',100,110);       //fillText(text,x,y);
    counter2.fillText(no+'%',100,110); 
    counter3.fillText(no+'%',100,110); 
    counter4.fillText(no+'%',100,110); 
    
    counter1.beginPath();
    counter2.beginPath();
    counter3.beginPath();
    counter4.beginPath();
    counter1.arc(100,100,40,pointToFill,diff/10+pointToFill);    //arc(x,y,radius,start,stop) "taille du cerlce"
    counter2.arc(100,100,40,pointToFill,diff/10+pointToFill); 
    counter3.arc(100,100,40,pointToFill,diff/10+pointToFill); 
    counter4.arc(100,100,40,pointToFill,diff/10+pointToFill); 
    
    counter1.stroke();   // to fill stroke
    counter2.stroke(); 
    counter3.stroke(); 
    counter4.stroke(); 
    
    // now add condition
    
    if(no >= health)// valeurs
    {
        clearTimeout(fill);     //fill is a variable that call the function fillcounter()
    }
    no++;
}

//now call the function

var fill = setInterval(fillCounter,10);     //call the fillCounter function after every 50MS