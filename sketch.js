var road
var man
var man_walking
function preload(){
road=loadAnimation("bomb.png","coin.png","energyDrink.png","path.png","power.png","Runner-1.png","Runner-2.png")
road1=loadImage("power.png")
road2=loadImage("bomb.png")
road3=loadImage("path.png")
road4=loadImage("coin.png")
road5=loadImage("energyDrink.png")
road6=loadImage("Runner-1.png")
road7=loadImage("Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  road=createSprite(300,250)
  road1=createSprite(100,50)
  road2=createSprite(300,250)
  road3=createSprite(300,250)
  road4=createSprite(300,250)
  road5=createSprite(300,250)
  road6=createSprite(300,250)
  road7=createSprite(300,250)
  road.addImage("road")
  road.addAnimation("walking",man_walking)
}

function draw() {
  background("green");
}
