var fixrect,movingrect,obj1,obj2;
function setup() {
  createCanvas(800,400);
 fixrect =createSprite(400, 200, 50, 50);
 movingrect=createSprite(200,200,50,50);
 obj1 =createSprite(700, 200, 50, 50);
 obj2=createSprite(600,200,50,50);
fixrect.velocityX=-3;
movingrect.velocityX=3;


}

function draw() {
  background(0);  
obj2.x=World.mouseX;
obj2.y=World.mouseY;
if(isTouching(obj1, obj2)){
  obj1.shapeColor = "blue";
  obj2.shapeColor = "blue";
}
else {
  obj1.shapeColor = "green";
  obj2.shapeColor = "green";
}
bounceoff(movingrect,fixrect);
  drawSprites();
}
