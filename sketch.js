const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies


var engine,world,object,ground
function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  var options={
restitution:1

  }
  object=Bodies.circle(200,200,50,options)
  World.add(world,object)
  console.log(object)
  console.log(object.position.x)
  console.log(object.position.y)



  var ground_options={
    isStatic: true
  }
  ground=Bodies.rectangle(200,390,400,20,ground_options)
  World.add(world,ground)



}

function draw() {
  background(0);  
  Engine.update(engine)
 ellipseMode(RADIUS)
  ellipse(object.position.x,object.position.y,50,50)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50)
 drawSprites();
}