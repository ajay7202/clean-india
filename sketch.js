
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 bin = loadImage("dustbingreen.png")
 paperball = loadImage("paper.png")
}

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;
ground = new Ground(600,height,1200,25);
paperball = new Paperball(320,320,25,27);
bin = new Bin(780,348,100,90);
bin2 = new Bin2(880,344,20,80);
bin3 = new Bin3(830,380,120,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  paperball.display(); 
  ground.display();
  bin.display();
  //bin2.display();
 // bin3.display();
   
  drawSprites();
 
}

function keyPressed() {
   if (keyCode === UP_ARROW){
    //paperball = loadImage("paper.png")
      Matter.Body.applyForce(paperball.body,paperball.body.position,{x:100,y:-100}); } }