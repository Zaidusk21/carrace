var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track1Img,car1Img,car2Img,car3Img,car4Img,groundImg

function preload() {
  
  // car1Img=loadImage("C:\Users\ARHAM\Desktop\CarRacingStage1.5\images\car1.png")
  // car2Img= loadImage("C:\Users\ARHAM\Desktop\CarRacingStage1.5\images\car2.png")
  // car4Img=loadImage("C:\Users\ARHAM\Desktop\CarRacingStage1.5\images\car4.png")
  // car3Img =  loadImage("C:\Users\ARHAM\Desktop\CarRacingStage1.5\images\car3.png")

  // track1Img=loadImage("C:\Users\ARHAM\Desktop\CarRacingStage1.5\images\track.jpg")

  // groundImg=loadImage("C:\Users\ARHAM\Desktop\CarRacingStage1.5\images\ground.png")
  car1Img=loadImage("images/car1.png")
  car2Img= loadImage("images/car2.png")
  car4Img=loadImage("images/car4.png")
  car3Img =  loadImage("images/car3.png")
  track1Img=loadImage("images/track.jpg")
  groundImg=loadImage("images/ground.png")

}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
