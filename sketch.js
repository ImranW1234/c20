var movingRect;
var fixedRect;

function setup(){
createCanvas(1000,800);

movingRect = createSprite(700,400,60,60);
fixedRect = createSprite(200,400,80,70);

movingRect.shapeColor = "blue";
fixedRect.shapeColor = "yellow";

}

function draw(){
background(155);

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
  movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
  fixedRect.y - movingRect.y <fixedRect.height/2 + movingRect.height/2) {
movingRect.shapeColor = "red";
fixedRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "yellow";
}

//console.log(movingRect.y - fixedRect.y);


drawSprites();
}