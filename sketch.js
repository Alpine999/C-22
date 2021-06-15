const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here

var bob1
var bob2
var bob3
var bob4
var bob5


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bob_options={
	isStatic: true	
	}
	
	bob1 = Bodies.circle(300,350,35,bob_options);
	bob2 = Bodies.circle(340,350,35,bob_options);
	bob3 = Bodies.circle(380,350,35,bob_options);
	bob4 = Bodies.circle(420,350,35,bob_options);
	bob5 = Bodies.circle(460,350,35,bob_options);

	constructor(body1,body2,pointA,pointB)
{
	this.pointA=pointA
	this.pointB=pointB

	var options={
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.pointA, y:this.pointB}
	}


}
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  
  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
ellipse(bob1.position.x,bob1.position.y,35)
ellipse(bob2.position.x,bob1.position.y,35)
ellipse(bob3.position.x,bob1.position.y,35)
ellipse(bob4.position.x,bob1.position.y,35)
ellipse(bob5.position.x,bob1.position.y,35)

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
