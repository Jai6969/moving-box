var box

function setup() {
  createCanvas(400,400);
  box = createSprite(50,75,40,40)
}

function draw() 
{
  
  background("red");
  drawSprites();
if(keyDown("right")){
box.x+=5;  
}
if(keyDown("left")){
  box.x-=5;
}
}




