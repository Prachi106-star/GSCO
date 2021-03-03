var call,wall;
var call2;
var call3;
var call4;
var speed,weight;
var speed2,speed3,speed4;
function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);

  speed2=random(55,90);
  speed3=random(55,90);
  speed4=random(55,90);

  car2=createSprite(50,150,50,10);
  car2.velocityX = speed2 ;

  car3=createSprite(50,250,50,10);
  car3.velocityX = speed3 ;

  car4=createSprite(50,350,50,10);
  car4.velocityX = speed4 ;

  car=createSprite(50,50,50,10);
  car.velocityX = speed ;
  wall=createSprite(1500,200,30,350);
  wall.shapecolor = "white";

  
}

function draw() {
  background("black");
  if(wall.x-car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
   var deformation = 0.5*weight*speed*speed/22509 ; 
    if(deformation<100){
      car.shapeColor =color(255,0,0);
 }
  if (deformation>100&&deformation<180){
   car.shapeColor =color(230,230,0);
 }
 if (deformation>180) {
   car.shapeColor =color(0,255,0);
 }

  }

  if(wall.x-car2.x < (car2.width + wall.width)/2){
    car2.velocityX = 0;
   var deformation = 0.5*weight*speed2*speed2/22509 ; 
    if(deformation<100){
      car2.shapeColor =color(255,0,0);
 }
  if (deformation>100&&deformation<180){
   car2.shapeColor =color(230,230,0);
 }
 if (deformation>180) {
   car2.shapeColor =color(0,255,0);
 }

 }

 if(wall.x-car3.x < (car3.width + wall.width)/2){
  car3.velocityX = 0;
 var deformation = 0.5*weight*speed3*speed3/22509 ; 
  if(deformation<100){
    car3.shapeColor =color(255,0,0);
}
if (deformation>100&&deformation<180){
 car3.shapeColor =color(230,230,0);
}
if (deformation>180) {
 car3.shapeColor =color(0,255,0);
}

}

if(wall.x-car4.x < (car4.width + wall.width)/2){
  car4.velocityX = 0;
 var deformation = 0.5*weight*speed4*speed4/22509 ; 
  if(deformation<100){
    car4.shapeColor =color(255,0,0);
}
if (deformation>100&&deformation<180){
 car4.shapeColor =color(230,230,0);
}
if (deformation>180) {
 car4.shapeColor =color(0,255,0);
}

}


  drawSprites();
}