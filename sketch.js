
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var stone
var boy,boyImage

function preload()
{
	boyImage=loadImage("boy.png")

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

     	groundSprite=createSprite(width/2, height-25, width,10);
	    groundSprite.shapeColor=color("white")

         stone=new  Stone(100,100,50,50)

boy=createSprite(100,200,20,20)
boy.addImge=(boy,"boyImage")
		 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
stone.display();


  drawSprites();
 

}



