var canvas ,backGroundImage;

var gameState = 0;
var playerCount , database;
var form , game ,player;

function setup(){
    database = firebase.database();
    canvas = createCanvas(500,500);
    
    game = new Game();
    game.getState();
    
    game.start();
}

function draw(){
    background("white");
    
}

