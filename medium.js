//Medium virtual o Busca Fantasmas
// Plataforma interactiva de texto para comunicarse con los muertos del universo digital
//Ref: https://creative-coding.decontextualize.com/text-and-type/
//http://127.0.0.1:8887

var mensajes = "";
var curIndex = 0;
var fuente;

function preload() {
  fuente = loadFont('./Fonts/COURIERTXT.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  textFont(fuente);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(50);
  fill(255);
  textSize(12 + ((curIndex*10) / width)*144); //el texto se agranda mientras crece
  //textSize(12 + (mouseX / width*144));
  var fantasma = mensajes.substring(curIndex, curIndex+50); //secuencia de apariciones
  text(fantasma, random(width), random(height), 800, 400);

  curIndex++;
  if (curIndex > mensajes.length) {
    curIndex = 0;
  }
}

function keyTyped() {
  mensajes += key;
}
