var path,pathImg;
var boy,boyImg;
var leftBoundary,rightBoundary;
var i;

function preload(){
  //pre-load images
pathImg=loadImage("path.png");
boyImg=loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);

  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=3;
  path.scale=1.2;

  //create sprites here
boy=createSprite(180,340,30,30);
boy.addAnimation("running",boyImg);
boy.scale=0.10;

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;

}





function draw() {
  background("0");
 
  path.velocityY=4 ;
 
boy.x=World.mouseX;

  edges=createEdgeSprites();
  
 boy.collide(edges[3]);
boy.collide(leftBoundary);
boy.collide(rightBoundary);

 if (path.y > 400){
  path.y = height/2;
}

drawSprites();
}