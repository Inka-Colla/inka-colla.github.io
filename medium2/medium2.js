//Medium virtual
// Plataforma interactiva de texto con data fantasma

var mensajes = "";
var xpos = 0;
var ypos = 0;
var hoyo = 40;
var curIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  textAlign(CENTER);
  textSize(hoyo);
}

function draw() {
  background(50);
  fill(255);

//texto desaparece por el hoyo
  if(hoyo == 0) {
    mensajes = "";
    xpos = 0;
    ypos = 0;
    hoyo = 40;
    textSize(hoyo);
  }

//ruta de texto
  if(mensajes != "") { // 'if' para que no se mueva si no hay texto
    xpos = xpos + 1.5;
    ypos = ypos + 1;
    text(mensajes, xpos, ypos, 500,400);
  }

//se chupa el texto
  if(xpos > width/3) {
    hoyo -= 1; // hoyo = hoyo - 1
    textSize(hoyo);
  }
}

function keyTyped() {
  mensajes += key;
//  if(keyCode == DELETE){ --- cómo se borra???
//    mensajes = mensajes.substring(0,mensajes.length-2);
//}
}
