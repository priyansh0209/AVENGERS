var space,spaceImg;
var stone,stoneImg,stoneGroup;
var thanos,thanosImg,thanosGroup;
var iron,ironImg;
var score;
score=0;
var gamestate;
gamestate="play"

function preload(){
spaceImg=loadImage("space.jpg")
  stoneImg=loadImage("stone.jpg")
  thanosImg=loadImage("thanos.jpg")
  ironImg=loadImage("iron.jpg")
}

function setup() {
  createCanvas(600,600);
 space=createSprite(300,300);
  space.scale=3;
  space.addImage(spaceImg);
  thanosGroup=new Group();
  stoneGroup=new Group();
  iron=createSprite(300,300);
  iron.addImage(ironImg)
  iron.scale=0.5
}

function draw() {
  background("black")
  textSize(30)
  stroke("blue")
  text("SCORE:"+score,100,100)
  textSize(50)
  stroke("red")
  text("GAME OVER!!",150,300);
   if(gamestate==="play"){ if (keyDown("left_arrow")){
      iron.x=iron.x-5;
      }
  if (keyDown("right_arrow")){
      iron.x=iron.x+5;
      }
  if (keyDown("space")){
      iron.velocityY=-5;
      }
 if (thanosGroup.isTouching(iron)||iron.y>600){
   iron.destroy();
   gamestate="end";
 }
  if  (stoneGroup.isTouching(iron)){
   stoneGroup.destroyEach();
    score=score=1;
  }
  iron.velocityY=iron.velocityY+0.5
  spawn();
 drawSprites();
}
}

function spawn(){
  if (frameCount%600===0){
  stone=createSprite(200,-50);
    stone.x=Math.round(random(75,525));
  stone.addImage(stoneImg);
    stone.scale=0.3
    stone.velocityY=1;
    stone.lifetime=1000;
    stoneGroup.add(stone);
  }
   if (frameCount%250===0){
    thanos=createSprite(100,-5);
    thanos.x=Math.round(random(75,525));
    thanos.lifetime=1000;
    thanos.scale=0.4;
    thanos.velocityY=1;
    thanos.addImage(thanosImg);
    thanosGroup.add(thanos);
    }
}