
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1, treeImg, boyImg, boy, tree;

function preload()
{
	treeImg = loadImage("Images/tree.png");
//	boyImg = loadImage("Images/boy.png");
	

}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    //boy = createSprite(200,525,20,20);
	//boy.addImage(boyImg);
	//boy.scale = 0.1;
		
	
	ground = new Ground(500,590,1000,20);
	stone = new Stone(200,200,70);
	sling = new Chain(stone.body,{x:200, y:50});
	mango1 = new Mango(700,300,60);
	mango2 = new Mango(760,250,60);
	mango3 = new Mango(800,390,60);
	mango4 = new Mango(675,400,60);
	mango5 = new Mango(900,400,60);
	mango6 = new Mango(870,300,60);
	mango7 = new Mango(550,350,60);
	mango8 = new Mango(800,200,60);
	boy = new Boy (100,515,200,200);
	
	tree = createSprite(750,400,20,20);
	tree.addImage(treeImg);
	tree.scale = 0.4;

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("grey");

  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  sling.display();
  ground.display();
  stone.display();  
  boy.display();

}


