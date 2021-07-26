const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;


var engine,world;
var bgImg;
var snow = [];



function preload(){

  bgImg=loadImage("snow3.jpg");

}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

 // snow=new Snow(random(100,800),random(10,400),10);

  
 

  
}

function draw() {
  background(bgImg); 
  
  Engine.update(engine);

  if(frameCount%60=== 0){
    snow.push(new Snow(random(10,200), 10,10) )
  }
  

//snow1.display();
for (var i = 0; i < snow.length; i++) {
  snow[i].display();
}

  //drawSprites();
}