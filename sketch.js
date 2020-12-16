function setup() {
  createCanvas(400,400);
  fixedrect=createSprite(200,200,50,80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(300,200,80,30);
  movingrect.shapeColor="green";
  fixedrect.debug=true;
  movingrect.debug=true;
  fixedrect.velocityX=2;
  movingrect.velocityX=-2;
}

function draw() {
  background("pink");  
 // movingrect.x=mouseX;
 // movingrect.y=mouseY;
  console.log(movingrect.x-fixedrect.x );
  // bounceoff 
  if(movingrect.x-fixedrect.x < fixedrect.width/2+ movingrect.width/2
    && fixedrect.x-movingrect.x < fixedrect.width/2+ movingrect.width/2)
    {
       movingrect.velocityX=movingrect.velocityX * (-1);
       fixedrect.velocityX=fixedrect.velocityX * (-1);

    }
    if( movingrect.y-fixedrect.y < fixedrect.height/2+ movingrect.height/2
      && fixedrect.y-movingrect.y < fixedrect.height/2+ movingrect.height/2){
        movingrect.velocityY=movingrect.velocityY * (-1);
       fixedrect.velocityY=fixedrect.velocityY * (-1);

      }

  // is touching
  /*
  if(movingrect.x-fixedrect.x < fixedrect.width/2+ movingrect.width/2
    && fixedrect.x-movingrect.x < fixedrect.width/2+ movingrect.width/2
    && movingrect.y-fixedrect.y < fixedrect.height/2+ movingrect.height/2
    && fixedrect.y-movingrect.y < fixedrect.height/2+ movingrect.height/2){
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }
  else
  {
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }
  */

  drawSprites();
  
}