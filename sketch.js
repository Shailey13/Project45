var iss_img, bg_img;
var spacecraft1_img, spacecraft2_img, spacecraft3_img, spacecraft4_img;
var bg;
var iss, spacecraft;
var hasDocked = false;

function preload() {
  iss_img = loadImage("iss.png");
  bg_img = loadImage("spacebg.jpg");
  spacecraft1_img = loadImage("spacecraft1.png");
  spacecraft2_img = loadImage("spacecraft2.png");
  spacecraft3_img = loadImage("spacecraft3.png");
  spacecraft4_img = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(displayWidth/2, displayHeight/2, 50, 50);
  bg.addImage(bg_img);
  bg.scale = 2.2;

  iss = createSprite(800, 170, 50, 50);
  iss.addImage(iss_img);
  iss.scale = 0.8;

  spacecraft = createSprite(300, 400, 50, 50);
  spacecraft.addImage(spacecraft1_img);
  spacecraft.scale = 0.2;

}

function draw() {
  background(255,255,255);  
  
  
  if (!hasDocked) {

    if (keyDown(LEFT_ARROW)) {
      spacecraft.addImage(spacecraft3_img);
      spacecraft.velocityX = -2.5
    }
    if (keyDown(RIGHT_ARROW)) {
      spacecraft.addImage(spacecraft4_img);
      spacecraft.velocityX = 2.5
    }
    if (keyDown(UP_ARROW)) {
      spacecraft.addImage(spacecraft2_img);
      spacecraft.velocityY = -2.5
    }
    if (keyDown(DOWN_ARROW)) {
      spacecraft.addImage(spacecraft1_img);
      spacecraft.velocityY = 2.5
    }
    if (spacecraft.x >= 760 && spacecraft.y <= 300) {
      hasDocked = true;
    }
  } else {
    spacecraft.velocityX = 0;
    spacecraft.velocityY = 0;
    textSize(50);
    fill("");
    text("Docking Successful!", 800, 400);
  }
  drawSprites();
}