//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ground1,shooter1,sling1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraints = Matter.Constraint;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(300,500,600,20);
	shooter1 = new Shooter(100,450,25);
	sling1 = new Sling(shooter1,100,400);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  shooter1.display();
  sling1.display();

  drawSprites();
 
}



