var ball;
var suelo;
var left;
var right;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}

	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.

	suelo=new Ground(width/2,570,width,20);
	left=new Ground(600,500,20,120);
	right=new Ground(700,500,20,120);

	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  suelo.show();
  left.show();
  right.show();
  
  ellipse(ball.position.x,ball.position.y,20,20);

 
}


function keyPressed() {
	if(keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:60,y:-55});
	}
}


