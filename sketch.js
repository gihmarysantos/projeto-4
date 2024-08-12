let imagem;
let musica;

function setup() {
  createCanvas(1000, 800);
  palavra = amoras();
  musica.loop();
}
function preload(){
  imagem = loadImage("imagem.jfif");
  musica = loadSound("musica.mp3")
}
function draw() {
  background("violet");
  image(imagem,0,0,1000,800)
  giovanna();
  robertofeioso();
  amoras();
}

function giovanna(){
  textSize(50);
  textAlign(CENTER,CENTER);
}
function giovanna(){
  let minimo = 0;
  let maximo = width;
  let seguir = map(mouseX, 0,width, 1,palavra.length);
  let inicio = palavra.substring(0,seguir);
  text(inicio,500,400);
  
}
function robertofeioso(){
  fill("lightblue")
  textSize(50);
  textAlign(CENTER,CENTER)
  
  
  }
function amoras(){
  let palavras = ["me da um ingresso bruninho lindo e perf"];
  return random(palavras);
}