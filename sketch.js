
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;;
var paperImg

function preload(){
	paperImg = loadImage("paperImg.png");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new Box(1000,650);
	paperObject=new Paper(200,450,10);
	groundObject=new Ground(width/2,670,width,20);
	paperObject.scale = 0.5;
	//Create a Ground
	

	//var render = Render.create({
	  //element: document.body,
	  //engine: engine,
	  //options: {
	    //width: 1200,
	    //height: 700,
	    //wireframes: false
	  //}
	//});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(170);
  
  paperObject.display(); 
  dustbinObj.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}