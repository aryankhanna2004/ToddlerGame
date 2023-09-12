/****
 * FSE100: examples for how to link multiple exercises together
 *****/

let currentActivity = 0;
let menuButton, game1Button, game2Button, game3Button;
let imageMainMenu;
let mainMenuSong
let n = 0;
/***** 
  * If you want to load images or sounds into your application,
  * try using preload()
  * https://p5js.org/reference/#/p5/preload
  *****/
function preload(){
  imageMainMenu = loadImage('bg.jpeg');
  mainMenuSong = loadSound('mainMenu.mp3');
  game1Preload();
  game2Preload();
  game3Preload();
}

function switchToMM(){
  background(220);
  currentActivity = 0;
  n = 0;
  // Hide the home page button, show the activity buttons
  menuButton.hide();
  game1Button.show();
  game2Button.show();
  game3Button.show();
  buttonEasy.hide();
  buttonMedium.hide();
  buttonHard.hide();
  
}

function setup() {
  createCanvas(720, 400);
  background(220);
  
  menuButton = createButton('Home Page');
  menuButton.position(630, 10);
  menuButton.mousePressed(switchToMM);
  menuButton.hide();
  
  game1Button = createButton('Game 3');
  game1Button.position(650, 170);
  game1Button.mousePressed(game1Setup);
  game1Button.show();
  
  game2Button = createButton('Game 2');
  game2Button.position(650, 210);
  game2Button.mousePressed(game2Setup);
  game2Button.show();
  
  game3Button = createButton('Game 1');
  game3Button.position(650, 250);
  game3Button.mousePressed(game3Setup);
  game3Button.show();
  
}


function draw() {  
  switch(currentActivity){
    case 0: 
      mainMenu();
      break;
    case 1: 
      game1Draw();
      break;
    case 2: 
      game2Draw();
      break;
    case 3: 
      game3Draw();
      break;

  }
}

function mainMenu(){
  if(n==0){
      mainMenuSong.play(); 
      mainMenuSong.loop();
          }
  n = 1;
  image(imageMainMenu,0,0,720,400)
  textSize(42)
  fill(0,200,0)
  stroke(255)
  text('Choose a game!',220,220)
  if (game1Song.isPlaying()) {
    game1Song.stop();
}
  if (game2Song.isPlaying()) {
    game2Song.stop();
}
  if (game3Song.isPlaying()) {
    game3Song.stop();
}
}

/*****
* mousePressed() is a reserved function that is called whenever
* the user presses the mouse button in the application.
*****/
function mousePressed(){
  // Only game 4 uses the mousePressed function, but the switch statement
  // makes it easy to add the mousePressed functionality for other games.
  switch(currentActivity){
   /* case 1: 
      game1MousePressed();
      break;*/
    case 3: 
      game3MousePressed();
      break;
  }
}