const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Event=Matter.Events;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;




function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
	world = engine.world;
 
ground=new Ground(width/2,height,width,20);
  

  for(var k=0; k<=width; k=k+80) {
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j= 75; j<=width; j=j+50){
   plinkos.push(new Plinko(j,75));
  }

  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

   for(var j=75; j<=width; j=j+50){
     plinkos.push(new Plinko(j,275))
   }

   for(var j=50; j<=width; j=j+50){
     plinkos.push(new Plinko(j,375))
   }
  
}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();

  for(i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  if(frameCount % 80 === 0){
    particles.push(new Particles(random(width/2-30,width/2+30),10,10))
  }

  for (var j = 0; j < particles.length; j++) {
   particles[j].velocityY=5;
    particles[j].display();
  }

  for (var h = 0; h < divisions.length; h++) {
  divisions[h].display();
  }

  drawSprites()
}