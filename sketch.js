//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ground1,shooter1,sling1,ground2,ground3,box1,box2,box3,box4;
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
	ground2 = new Ground(100,400,100,10);
	ground3 = new Ground(450,450,125,10);

	box1 = new Box(425,425,25,25);
	box2 = new Box(475,425,25,25);
	box3 = new Box(450,400,75,25);
	box4 = new Box(450,350,50,50)

	shooter1 = new Shooter(100,450,25);
	sling1 = new Sling(shooter1.body,{x:100,y:300});

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
  ground2.display();
  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();

  shooter1.display();
  sling1.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(shooter1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling1.fly();
}

function keyPressed(){
	if(keyCode == 32){
	sling1.attach(shooter1.body);
	}
}



