const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var OVO;
var canvas, angle, tower, ground, cannon;
var PIU_PIU_PIU = [];
var TO_XTRESSADO;
var foda_se = [];
var boatAnimation = [];
var boatSpritedata;
var boatSpritesheet;
var brokenAnimation = [];
var brokenSpritedata;
var brokenSpritesheet;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  boatSpritedata = loadJSON("./assets/boat/boat.json");
  boatSpritesheet = loadImage("./assets/boat/boat.png");
  brokenSpritedata = loadJSON("./assets/boat/brokenboat.json")
  brokenSpritesheet = loadImage("./assets/boat/brokenboat.png")
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);
angleMode(DEGREES);  
angle = 20;
cannon = new Cannon(180,110,130,100,angle);
OVO = new Cannonball(cannon.x,cannon.y);

var boatFrames = boatSpritedata.frames;
for(var i = 0; i<boatFrames.lenght;i++){
  var pos = boatFrames[i].position;
  var img = boatSpritesheet.get(pos.x,pos.y,pos.w,pos.h);
  boatAnimation.push(img)
}
var brokenFrames = brokenSpritedata.frames;
for(var i = 0; i<brokenFrames.lenght;i++){
  var pos = brokenFrames[i].position;
  var img = brokenSpritesheet.get(pos.x,pos.y,pos.w,pos.h);
  brokenAnimation.push(img)
}
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);
for(var i = 0; i<PIU_PIU_PIU.length;i++){
  ATIREI_O_PAU_NO_GATO_TO (PIU_PIU_PIU[i],i)
  NUPEGUEISEMQUERER(i)
}
  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  cannon.show();
  MADERAAAAAA();

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  
}
function keyPressed(){
  if(keyCode===32){
   var OVO = new Cannonball(cannon.x,cannon.y);
   PIU_PIU_PIU.push(OVO);

  }
}

function keyReleased() {
  if(keyCode===32){
   PIU_PIU_PIU[PIU_PIU_PIU.length-1].shoot();
  }
}
function ATIREI_O_PAU_NO_GATO_TO (ball,index){
  if(ball){
    ball.show();
    if(ball.body.position.x >= width || ball.body.position.y >= height-50){
      ball.remove(index);
    }
  }
}
function MADERAAAAAA() {
  if(foda_se.length>0){
    if(foda_se[foda_se.length-1]===undefined || foda_se[foda_se.length-1].body.position.x<width-300){
      var positions = [-40,-60,-70,-20];
      var position = random(positions);
     var TO_XTRESSADO = new Piratas_do_caribean(width-79,height-60,170,170,position,boatAnimation);
    foda_se.push(TO_XTRESSADO);
    }
    for(var i = 0; i<foda_se.length;i++){
      if(foda_se[i]){
        Matter.Body.setVelocity(foda_se[i].body,{x:-0.9,y:0});
        foda_se[i].show();
        foda_se[i].animate();
      }
    }
  }else{
  var TO_XTRESSADO = new Piratas_do_caribean(width-79,height-60,170,170,-80,boatAnimation);
    foda_se.push(TO_XTRESSADO);
  }

}
function NUPEGUEISEMQUERER(index){
  for(var i = 0; i<foda_se.length;i++){
    if(PIU_PIU_PIU[index] !== undefined && foda_se[i] !== undefined){
      var colision = Matter.SAT.collides(PIU_PIU_PIU[index].body,foda_se[i].body);
      if(colision.collided){
        foda_se[i].remove(i);
        Matter.World.remove(world,PIU_PIU_PIU[index].body);
        delete PIU_PIU_PIU[index];
      }
    }

  }

}

