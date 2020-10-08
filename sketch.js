function setup() {
  createCanvas(800,400);
 

  rect1= createSprite(400,200,20,20);
  rect2= createSprite(200,100,20,20);
  rect1.shapeColor="blue";
  rect2.shapeColor="blue";

}

function draw() {
  background(0,255,0);  

  rect1.x=mouseX;
  rect1.y=mouseY;

  if(rect1.x - rect2.x <= rect1.width/2 + rect2.width/2 &&
    rect2.x - rect1.x <= rect1.width/2 + rect2.width/2 &&
    rect1.y - rect2.y <= rect1.height/2 + rect2.height/2 &&
    rect2.y - rect1.y <= rect1.height/2 + rect2.height/2){

      rect1.shapeColor="red";
      rect2.shapeColor="red";

    }else{

      rect1.shapeColor="blue";
      rect2.shapeColor="blue";

    }
    

  drawSprites();

}