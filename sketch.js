const Engine=Matter.Engine 
const World=Matter.World 
const Bodies=Matter.Bodies


//Create namespace for Engine
//Create namespace for World
//Create namespace for Bodies
//Create namespace for Body


function setup() {
  createCanvas(400,400);
//create the engine
  //Add world to the engine
  engine= Engine.create()
  world=engine.world;

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ground = Bodies.rectangle(200,350,400,10,ground_options);
  World.add(world,ground);
  ball2 = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball2);
  ball3 = Bodies.circle(300,10,20,ball_options);
  World.add(world,ball3);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  rect(ground.position.x,ground.position.y,400,10)
  //write a rectangle function to display ground.
 


  
  
}

