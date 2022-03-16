
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bolinhadegorfe
var bolinhadegorfe3
var bolinhadegorfe2

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var ball_options = {
		restitution : 0.95,
		frictionAir : 0.01
		
	  
	  
	  }
	
	  var ground_options = {
		isStatic : true
	  }
	
	bolinhadegorfe = Bodies.circle(300,10,40,ball_options);
	World.add(world,bolinhadegorfe)
	
	bolinhadegorfe2 = Bodies.circle(300,10,30,ball_options);
	World.add(world,bolinhadegorfe2)
	
	bolinhadegorfe3 = Bodies.circle(300,10,60,ball_options);
	World.add(world,bolinhadegorfe3)
	
	
	Engine.run(engine);
  

	
	ground = Bodies.rectangle(200,550,800,20,ground_options);
	World.add(world,ground);

}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  drawSprites();
 
  
  ellipse(bolinhadegorfe.position.x,bolinhadegorfe.position.y,40);
  ellipse(bolinhadegorfe2.position.x,bolinhadegorfe2.position.y,30);
  ellipse(bolinhadegorfe3.position.x,bolinhadegorfe3.position.y,60);

}



