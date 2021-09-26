
function preload(){
  bg1 = loadImage("city background 1.jpg");
  bg2 = loadImage("city background 2.jpg");
  bg3 = loadImage("city background 3.jpg");
  bg4 = loadImage("city background 4.jpg");
  bg5 = loadImage("city background 5.jpg");
  //jerry_jerryimg = loadImage("jerry running 1.gif");
  //scoobimg = loadImage("scooby running 2.gif");
  gif_loadImg = loadImage("scooby running 2.gif");
  gif_createImg = createImg("scooby running 2.gif");
// gif_createImg.resize(10,10)

  //gif_loadImg = loadImage("jerry running 1.gif");
  //gif_createImg = createImg("jerry running 1.gif");
}


function setup() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if(isMobile){
    canW = displayWidth; 
    canH = displayHeight; 
    createCanvas(displayWidth+80, displayHeight);

  } else{
    canW = windowWidth; 
    canH = windowHeight; 
    createCanvas(windowWidth, windowHeight);
  }
  
  scene = createSprite(200,500,4000,1600);
  scene.addImage("scene", bg1);
  scene.velocityX = -3
  scene.scale = 3.5

ground = createSprite(width/2,height - 20,width,5)
ground.shapeColor = "black"


  
}

function draw() {
  background(255);
  //image(bg1,0,0,displayWidth+80,displayHeight);  
  //image (gif_loadImg,0,0);
  
  gif_createImg.position(10,580)
  gif_createImg.size(100,50)
  
  if(scene.x < 250){
    //scene.x = scene.width/2
    var scene1 = createSprite(400,500,4000,1600);
    scene1.addImage("scene", bg1);
    scene1.velocityX = -3
    scene1.scale = 3.5
  }
  drawSprites();
}