let bx;
let by;
let boxSize = 75;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let boxInPlace = true
let error
let buttonEasy
let buttonMedium
let buttonHard
let rect1 
let showtext5 = true
let showtext6 = false
let showtext7 = false;
let game3Song;
let Bg3;
function game3Preload(){
  game3Song = loadSound('game3Song.mp3');
  Bg3 = loadImage('Bg3.jpeg');
}

function game3Setup() {
  createCanvas(720, 400);
  game3Song.play();
 currentActivity = 3;
  bx = width / 2.0;
  by = height / 2.0;
  rectMode(RADIUS);
  strokeWeight(2);
  showtext6 = false
  showtext7 = false;
  // Hide the Activity 3 button, show all the other buttons
  menuButton.show();
  game1Button.show();
  game2Button.show();
  game3Button.hide();
  
  
  buttonEasy = createButton('Easy');
  buttonEasy.position(650, 50);
  buttonEasy.mousePressed(Easy);
  buttonMedium = createButton('Medium');
  buttonMedium.position(650, 90);
  buttonMedium.mousePressed(Medium);
  buttonHard = createButton('Hard');
  buttonHard.position(650, 130);
  buttonHard.mousePressed(Hard);
  if (game2Song.isPlaying()) {
    game2Song.stop();
}
  if (game1Song.isPlaying()) {
    game1Song.stop();
}
  if (mainMenuSong.isPlaying()) {
    mainMenuSong.stop();
}
  }

function game3Draw() {
  background(Bg3)
  line(600,0,600,500)
    if(showtext5){
  textSize(22)
  fill(0)
  stroke(255)
  text(' Choose',630, 300)
  text('   a '  ,  630,  330)
  text(' mode! ' , 630, 360) 
  
  }
    if(showtext6){
    textSize(42)
  fill(0,200,0)
  stroke(255)
  text('YOU WON',220,220)
    
    }  
   if(showtext7){
     textSize(22)
    fill(255)
text('Drag the middle box to the corner box',140, 390);   
    }
  if (
    mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  ) {
    overBox = true;
    if (!locked) {
      stroke(30);
      fill(244, 122, 158);
    }
  } else {
    stroke(156, 39, 176);
    fill(244, 122, 158);
    overBox = false;
  }

  // The box
  fill(200)
  rect(100,100,75,75)
  rect1 = rect(bx, by, boxSize, boxSize);
  
}

function game3MousePressed() {
  if (overBox && !boxInPlace) {
    locked = true;
    fill(0);
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
    
  }
}

function mouseReleased() {
  locked = false;
  if(bx < 120 + error && bx > 20 - error && by > 20-error && by< 120 + error){
  boxInPlace = true; 
  showtext5 = true
  showtext6 = true
  showtext7 = false
  
}
}
function Easy(){
  error = 10
  bx = 360
  by = 200
  boxInPlace = false;
  showtext5 = false;
  showtext6 = false;
  showtext7 = true;
}
function Medium(){
  error = 3
  bx = 360
  by = 200
  boxInPlace = false;
  showtext5 = false
  showtext6 = false;
  showtext7 = true;
}
function Hard(){
 error = 0; 
  bx = 360
  by = 200
  boxInPlace = false;
  showtext5 = false
  showtext6 = false;
  showtext7 = true;
}


