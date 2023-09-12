let showtextGame2 = false
let showtext2Game2 = true
let ImgWin;
let bgGame2
let x2 = 100;
let y2 = 150;
let dx2 = 1;
let dy2 = 2;
let rectX2 = 150;
let b2 = 150;
let da2 = 2;
let db2 = 3;
let game2Song;
function game2Preload(){
   ImgWin = loadImage('Game2/win.jpeg');
   bgGame2 = loadImage('Game2/bgGame2.jpeg');
   game2Song = loadSound('game2Song.mp3');
}

function game2Setup() {
  createCanvas(720, 400);
  fill(0, 100, 200);
  game2Song.play();
  radiusGame2 = 50;
  rectL = 100 
  rectW = 50
  V1Game2 = 50
  V2Game2 = 30;
  rectMode(CORNER);
  showtextGame2 = false
  showtext2Game2 = true
  currentActivity = 2;
  // Hide the Activity 2 button, show all the other buttons
  if (game1Song.isPlaying()) {
    game1Song.stop();
}
  if (game3Song.isPlaying()) {
    game3Song.stop();
}
  if (mainMenuSong.isPlaying()) {
    mainMenuSong.stop();
}
  menuButton.show();
  game1Button.show();
  game2Button.hide();
  game3Button.show();
  buttonEasy.hide();
  buttonMedium.hide();
  buttonHard.hide();
  
}



function game2Draw() {
  x2 += dx2;
  y2 += dy2;               
  if (x2 > width) x2 = 0;
  if (y2 > height) y2 = 0;
  x2 += dx2;              
  y2 += dy2;          
  rectX2 += da2;              
  b2 += db2;
  
  if (rectX2 < 0 || rectX2 > 500) { da2 = -da2;  }
  if (b2 < 0 || b2 > 400) {db2 = -db2; }
  
  background(bgGame2);
   line(600,0,600,500)
  
  if(mouseIsPressed){
 
    if(mouseX >= rectX2 && mouseX<=rectX2+rectL&& mouseY<=50+rectW &&mouseY>=50){
    rectL = 0
    rectW = 0
  }
    else if(mouseX >= rectX2 && mouseX<= 30+rectX2 && mouseY<=50+b2 &&mouseY>=b2){
      radiusGame2 = 0;}
    else if(mouseX >= 30 && mouseX<= 50 + V1Game2&& mouseY<=b2 &&mouseY>= b2 - 50){
      V1Game2 = 0;}
    else if(mouseX >= 190 && mouseX<=200+ V2Game2 && mouseY<=300 + V2Game2 && mouseY>=270){
      V2Game2 = 0;}
}
  
  fill(350,160,200)
  rect(rectX2,50,rectL,rectW)
  stroke(50)
  fill(120,50,60)
  circle(50,b2,V1Game2)
  stroke(54)
  fill(150,50,160)
  circle(200,300,V2Game2)
  fill(0)
  stroke(1000)
  circle(rectX2,b2,radiusGame2)
  if(showtext2Game2){
    textSize(22);
    fill(15,30,150)
    text('Pop all the balloons!', 120, 380);
    
  }
  if(showtextGame2){
    textSize(52);
    fill(0,300,0,300);
    text('YOU WON', 150, 120);
    
  }
  if(V2Game2==0 &&rectL==0&&rectW==0&&V1Game2==0&&radiusGame2==0)
{   image(ImgWin,200,150,200,200)
    showtextGame2 = true
  showtext2Game2 = false
 game2Song.stop()
 
     }
}