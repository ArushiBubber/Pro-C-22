const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world,object;



function setup(){
  var canvas=createCanvas(400,400);

  engine = Engine.create();
  world = Engine.world;
//creating engine body

  //options for the engine 
  var options ={
isStatic : false
  }

  //use 2nd module called bodies 
  object = Bodies.rectangle(200, 100, 50, 50 , options);
//after adding bodies we have to add box in the world 

  World.add(world, object);
    
  console.log(object);
}
function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
    rect(object.position.x, object.position.y,50,50);
  
}
