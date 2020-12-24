const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var score=0;
var backgroundImg;
function preload(){
   getBackgroundImage();
}
function setup(){
  createCanvas(800,700);
  engine=Engine.create();
  world=engine.world;  
 
  base1 = new Ground(400,650,200,20);
  base2 = new Ground(550,300,200,20);
  ground = new Ground(400,690,800,20);
  box1 = new Box(325,635,30,40);
  box2 = new Box(355,635,30,40);
  box3 = new Box(385,635,30,40);
  box4 = new Box(415,635,30,40);
  box5 = new Box(445,635,30,40);
  box6 = new Box(475,635,30,40);
  box7 = new Box(355,595,30,40);
  box8 = new Box(385,595,30,40);
  box9 = new Box(415,595,30,40);
  box10 = new Box(445,595,30,40);
  box11 = new Box(372,550,30,40);
  box12 = new Box(402,550,30,40);
  box13 = new Box(432,550,30,40);
  box14 = new Box(387,510,30,40);
  box15 = new Box(417,510,30,40);
  box16 = new Box(403,475,30,40);
 
  box17 = new Box(475,285,30,40);
  box18 = new Box(505,285,30,40);
  box19 = new Box(535,285,30,40);
  box20 = new Box(565,285,30,40);
  box21 = new Box(595,285,30,40);
  box22 = new Box(625,285,30,40);
  box23 = new Box(505,265,30,40);
  box24 = new Box(535,265,30,40);
  box25 = new Box(565,265,30,40);
  box26 = new Box(595,265,30,40);
  box27 = new Box(522,195,30,40);
  box28 = new Box(552,195,30,40);
  box29 = new Box(582,195,30,40);
  box30 = new Box(537,160,30,40);
  box31 = new Box(567,160,30,40);
  box32 = new Box(553,125,30,40);

  hexagon = new Polygon(300,350,30,30);

  rope = new Rope(hexagon.body,{x:200,y:300});




}
function draw(){
  if(backgroundImg){
    background(backgroundImg);
    }
    else{
        background("black");
    }
   
   Engine.update(engine);
   fill("white");
   text("Drag the Hexagon and release it to knock down the targets. ENJOY!",300,20);
   text("Press Space for a second chance.",300,35);

   textSize(15);  
   stroke("black");
   fill("black");
   text("SCORE= " + score,50,100);

   base1.display();
   base2.display();
   ground.display();
   hexagon.display();
   fill("blue");
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   box22.display();
   
   fill("red");
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box23.display();
   box24.display();
   box25.display();
   box26.display();
   

   fill("pink");
   box11.display();
   box12.display();
   box13.display();
   box27.display();
   box28.display();
   box29.display();


   fill("yellow");
   box14.display();
   box15.display();
   box30.display();
   box31.display();
   
   fill("green");
   box16.display();
   box32.display();

   rope.display();

   box1.score();
   box2.score();
   box3.score();
   box4.score();
   box5.score();
   box6.score();
   box7.score();
   box8.score();
   box9.score();
   box10.score();
   box11.score();
   box12.score();
   box13.score();
   box14.score();
   box15.score();
   box16.score();
   box17.score();
   box18.score();
   box19.score();
   box20.score();
   box21.score();
   box22.score();
   box23.score();
   box24.score();
   box25.score()
   box26.score();
   box27.score();
   box28.score();
   box29.score();
   box30.score();
   box31.score();
   box32.score();

  
}
function mouseDragged(){
    Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    rope.fly();
}

function keyPressed(){
   if(keyCode === 32){
    Matter.Body.setPosition(hexagon.body,{x:300,y:350});
    rope.attach(hexagon.body);
   }
}

async function getBackgroundImage(){
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
   
 if(hour>=06 && hour<19){
      bg="bg.png";
  }
  else{
      bg="bg2.jpg";
  }
  backgroundImg=loadImage(bg);
}