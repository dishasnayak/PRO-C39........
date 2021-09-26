//variables
var background,backgroundImage
var rocket,rocketImage
var asteroidImage,asteroidGroup
var asteroid2,asteroid2Image
var starImage,starsGroup
var restart,gameover
var PLAY=1
var END=0
var gameState=PLAY
var score
var camera

function preload(){
  backgroundImage=loadImage("background.png")
  rocketImage=loadImage("rocket.png")
  asteroidImage=loadImage("asteroid.png")
  starImage=loadImage("star.png")
  gameoverImage=loadImage("gameover.png")
  restartImage=loadImage("restart.png")
}


function setup() {
  createCanvas(1400,600);
  
  background1=createSprite(600,200)
  background1.addImage(backgroundImage)
  background1.scale = 2
  
  rocket=createSprite(70,200,50,50)
  rocket.addImage(rocketImage)
  rocket.scale = 0.4
  
  gameover=createSprite(650,180,50,50)
  gameover.addImage(gameoverImage)
  gameover.scale = 0.9
  gameover.visible=false
  
  restart=createSprite(630,320,50,50)
  restart.addImage(restartImage)
  restart.scale = 0.7
  restart.visible=false
  
  
  
  
  
  //scores and group
  //fruitGroup=createGroup()
  asteroidsGroup=createGroup()
  starsGroup=createGroup()
  
  score=0
}

function draw() {
  if(gameState === PLAY){
    
    if(rocket.isTouching(starsGroup)){
     score=score+1
     starsGroup.destroyEach();
   }
    
    //calling the groups
    asteroids();
    stars();
    
    background1.velocityX = -8

  if (background1.x < 0){
      background1.x = background1.width/2;
  }
  
  if(keyDown(UP_ARROW)){
    rocket.y=rocket.y-10
  }
 
  if(keyDown(DOWN_ARROW)){
    rocket.y=rocket.y+10
  }
    gameover.visible=false;
    restart.visible=false;
    rocket.visible=true;
    if(asteroidsGroup.isTouching(rocket)){
        gameState = END;
  }
  }
  else if (gameState === END) {
      gameover.visible = true;
      restart.visible = true;
    background1.velocityX = 0;
    rocket.visible=false;
     asteroidsGroup.velocityX = 0
    starsGroup.velocityX=0
     
     
    if(mousePressedOver(restart)){
     reset();
    }
    }
  
      
     
  
  
  drawSprites();
  fill("white")
  textSize(25)
  text("STAR collected: "+ score,displayWidth/2.5,40);
}

//restart
function reset(){
  gameState=PLAY
 
  asteroidsGroup.destroyEach();
  starsGroup.destroyEach();
  score=0
  background1.velocityX = 0

  

}

//funtions for asteroids and stars
    function asteroids(){
  if(World.frameCount%50===0){
    var asteroids=createSprite(500,30,20,20)
    asteroids.scale=0.4
    asteroids.addImage(asteroidImage);
    asteroids.y=Math.round(random(20,380));
    asteroids.velocityX=-12
    asteroids.setLifetime=50
    asteroidsGroup.add(asteroids)
  }
}

function stars(){
  if(World.frameCount%80===0){
    var stars=createSprite(600,50,20,20)
    stars.scale=0.4
    stars.addImage(starImage);
    stars.y=Math.round(random(30,400));
    stars.velocityX=-10
    stars.setLifetime=50
    starsGroup.add(stars)
  }
}


  // this code below is for the camera
  //camera.position.x=displayWidth/2
 // camera.position.y=cars[index-1].y
// play()
 // form.hide();
 // console.log(gameState)
 // textSize(30);
 // text("Game Start", 120, 100)
 // Player.getPlayerInfo();

 // if(allPlayers !== undefined){
  //  var display_position = 130;
  var index=0,x=0,y
 // for(var plr in allPlayers){
     index=index+1
     x=x+200
     //deleted some code redo if needed in line 169
     y=y
    // rocket[index-1].x=x
    // rocket[index-1].y=y
     // if (plr === "player" + player.index)
      //  {
         // cars[index-1].shapeColor("pink")
         camera.position.x=rocket[index-1].x
         camera.position.y=displayHeight/2
       // }
     // else
      //  fill("black");

     // display_position+=20;
     // textSize(15);
     // text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
   //}
  //}
