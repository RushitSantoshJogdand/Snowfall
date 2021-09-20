const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;;
var hour;

var snow1 = "snow1.jpg";

var snowFall;

function preload()
{
	getBackgroundImg();

}


function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;


  snowFall = new Snow(400, 300, 100, 100);
  // snowFall2 = new Snow(200, 200, 100, 100);

  // for(var i = 0; i < snowFall; i++){
  //   snowFall.display();
  // }



}

function draw() {
  if(backgroundImg)
     background(backgroundImg);

  Engine.update(engine);

    
  // if(frameCount%60===0){
  //   snowFall.push(new Snow(random(0,800),0));
  // }


  // for (var k = 0; k < snowFall; k++) {
  //   snowFall[k].display();
  // }

    snowFall.display();

}

async function getBackgroundImg(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

  var responseJSON = await response.json();

  var dateTime = responseJSON.datetime;
  
  var hour = dateTime.slice(11,13);

  if(hour>=0 && hour<18){
    snow1 = "snow1.jpg";
  }
  else if(hour>=18 && hour<19){
    snow1 = "snow2.jpg";
  } 
  else if(hour>=19 && hour<22){
    snow1 = "snow3.jpg";
  }

backgroundImg = loadImage(snow1);
}
