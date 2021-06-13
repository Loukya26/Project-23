const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(1370,650);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerBase = new ComputerBase(1070,450,180,150)
   playerBase = new PlayerBase(300,450,180,150)
   player = new Player(285,playerBase.body.position.y-153,50,180)
   computerPlayer = new Player(1055,computerBase.body.position.y-150,50,180)

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY",655, 100);

   //Display Playerbase and computer base 
     computerBase.display()
     playerBase.display()
    
   //display Player and computerplayer
     player.display()
     computerPlayer.display()

}
