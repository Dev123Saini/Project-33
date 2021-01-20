var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinko1 = [];
var plinko2 = [];
var plinko3 = [];
var plinko4 = [];
var divisions = [];
var particle;
var count = 0;
var gameState = "play";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinko1.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinko2.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinko3.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinko4.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
 for(var g = 20;g<=260;g=g+80)
 {
   text("500",g,535);
 }

 for(var h = 340;h<=500;h=h+80)
 {
   text("100",h,535);
 }

 for(var t = 580;t<=800;t=t+80)
 {
   text("200",t,535);
 }
  Engine.update(engine);
 
  
   for (var i = 0; i < plinko1.length; i++) {
     
     plinko1[i].display();
     
   }

   for (var i = 0; i < plinko1.length; i++) {
     
    plinko2[i].display();
    
  }

  for (var i = 0; i < plinko1.length; i++) {
     
    plinko3[i].display();
    
  }

  for (var i = 0; i < plinko1.length; i++) {
     
    plinko4[i].display();
    
  }
  
 
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
    particle.display();
    if(particle.body.position.x>15 && particle.body.position.x<280 && particle.body.position.y>760){
        score = score + 500;
        particle = null;
        console.log(score);
        if(count>=5){
          gameState = "end"
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.x>300 && particle.body.position.x<590 && particle.body.position.y>760){
        score = score + 100;
        particle = null;
        if(count>=5) {
        gameState = "end"
    }}
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.x>600 && particle.body.position.x<800 && particle.body.position.y>760){
        score = score + 200;
        particle = null;
        if(count>=5){
         gameState = "end";
      }}
  }

  if(gameState==="end"){
    textSize(100);
    text("Game Over",150,250)
  }

  



}

function mousePressed(){

if(gameState!=="end")
{
  particle = new Particle(mouseX,10,10);
  count++;
}


}