let Img1;
let Img2;
let circleY;
let x = 100;
let y = 150;
let dx = 1;
let dy = 2;
let rectX = 150;
let b = 150;
let da = 2;
let db = 3;
let showtext= true
let showtext1= true
let showtext2= false
let showtext3= false
let showtext4= false
let showImage = false;
let game1Song;
let winAudio
let rectY = 150;
let s= 0;
function game1Preload(){
  Img1 = loadImage('Game1/Image1.jpeg');
  Img2 = loadImage('Game1/Win.webp');
  game1Song = loadSound('game1Song.mp3');
winAudio = loadSound('winAudio.wav');
}
function game1Setup() {
  createCanvas(720, 400);
  fill(0, 100, 200);
  game1Song.play();
  r = 50;
  rectL = 100 
  rectW = 50
  w = 50
  m = 30;
  s=0;
  currentActivity = 1;
  showtext1= true
  showtext2= false
  showtext3= false
  showtext4= false
  showImage = false;
  rectMode(CORNER);
   if (game2Song.isPlaying()) {
    game2Song.stop();
}
  if (game3Song.isPlaying()) {
    game3Song.stop();
}if (mainMenuSong.isPlaying()) {
    mainMenuSong.stop();
}
  // Hide the Game 1 button, show all the other navigation buttons
  menuButton.show();
  game1Button.hide();
  game2Button.show();
  game3Button.show();
  buttonEasy.hide();
  buttonMedium.hide();
  buttonHard.hide();
 
}

function game1Draw() {
  clear()
  background(Img1);
  line(600,0,600,500)
  
  x += dx;
  y += dy;               
  if (x > 600) x = 0;
  if (y > height) y = 0;
  x += dx;              
  y += dy;          
  rectX += da;              
  b += db;
  
  if (rectX < 0 || rectX > 500) {da = -da;  }
  if (b < 0 || b > 400) {db = -db; }
 
  
  if(mouseIsPressed){ 
    if(mouseX >= rectX && mouseX<=rectX+rectL&& mouseY<=50+rectW &&mouseY>=50&&showtext1){
    rectL = 0
    rectW = 0
    showtext1 = false
    showtext2 = true
  }
    else if(mouseX >= rectX && mouseX<= 30+rectX&& mouseY<=50+b &&mouseY>=b&&showtext3){
      r = 0
     
      showtext3 = false
    showtext4 = true
    }
    else if(mouseX >= 30 && mouseX<= 50 + w&& mouseY<=b&&mouseY>= b - 50 && showtext2){
      showtext2 = false
    showtext3 = true
       
      w = 0;}
    else if(mouseX >= 190 && mouseX<=200+ m && mouseY<=300 + m && mouseY>=270 && showtext4){
      m = 0;
    showtext4 = false}
}
  //
  if (showtext1)
  {textSize(22)
    fill(255,10,200)
  text('Pop the pink rectangle!', 100, 380)
  }
  if(showtext2)
  {textSize(22)
    fill(165,42,42)
  text('Pop the brown balloon!', 100, 380)
  }
  if(showtext3)
  {textSize(22)
    fill(0,0,0)
  text('Pop the black balloon!', 100, 380)
  }
  if(showtext4)
  {textSize(22)
    fill(128,0,128)
  text('Pop the purple balloon!', 100, 380)
  }
  if(showImage){
  image(Img2, 160, 160,250,250); 
    
    
  }
  //
  fill(350,160,200)
  rect(rectX,50,rectL,rectW)
  stroke(50)
  fill(120,50,60)
  circle(50,b,w)
  stroke(54)
  fill(150,50,160)
  circle(200,300,m)
  fill(0)
  stroke(1000)
  circle(rectX,b,r)
  //
  if(m==0 &&rectL==0&&rectW==0&&w==0&&r==0)
{   textSize(52);
    fill(0,300,0,300)
    text('YOU WON', 150, 120);
     showtext4 = false
     showImage = true;
   game1Song.stop();
 
   abc(s)
   s = 1;
     }

}
function abc(s){
  if(s==0){
  winAudio.play();  }
  
}