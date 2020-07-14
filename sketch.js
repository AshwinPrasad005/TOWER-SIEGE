//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ground1,shooter1,sling1,ground2,ground3,box1,box2,box3,box4,box5,box6,box7,box8,box9,ground4,box1B,box2B,box3B,box4B,box5B,box6B,box7B,box8B,box9B;
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

	shooter1 = new Shooter(100,100,50,50);
	sling1 = new Sling(shooter1.body,{x:100,y:300});

	ground1 = new Ground(300,500,600,20);
	ground2 = new Ground(100,400,100,10);
	ground3 = new Ground(450,450,200,10);
	ground4 = new Ground(450,250,200,10);

	box1 = new Box(400,425,25,25);
	box2 = new Box(425,425,25,25);
	box3 = new Box(450,425,25,25);
	box4 = new Box(475,425,25,25);
	box5 = new Box(500,425,25,25);
	box6 = new Box(425,400,25,25);
	box7 = new Box(450,400,25,25);
	box8 = new Box(475,400,25,25);
	box9 = new Box(450,375,25,25);

	box1B = new Box(400,225,25,25);
	box2B = new Box(425,225,25,25);
	box3B = new Box(450,225,25,25);
	box4B = new Box(475,225,25,25);
	box5B = new Box(500,225,25,25);
	box6B = new Box(425,200,25,25);
	box7B = new Box(450,200,25,25);
	box8B = new Box(475,200,25,25);
	box9B = new Box(450,175,25,25);


	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	// Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);
  
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box1B.display();
  box2B.display();
  box3B.display();
  box4B.display();
  box5B.display();
  box6B.display();
  box7B.display();
  box8B.display();
  box9B.display();
  
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



