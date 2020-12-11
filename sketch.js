
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paperBall,paperBallImg,dustbin,dustbinImg,ground;
function preload()
{
	dustbinImg = loadImage('dustbin.png');
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	paperBall=new Paper(75,300);
	ground=new Ground(600,380,1200,20);
	
	dustbin = new Dustbin()
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  ground.display();
  dustbin.display();
  paperBall.display();
  
  
  drawSprites();
}
function keyPressed(){ 
	if(keyCode === UP_ARROW){
		 Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85}); 
		} 
	}


