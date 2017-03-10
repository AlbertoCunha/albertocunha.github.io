var posicaoX, posicaoY, velocidade;
var foilancado = false;
var bAltura = 20;
var bLargura = 20;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var Caltura = 10;
var Clargura = 500;
var posiX_chao = 0;
var posiY_chao = canvas.height - Caltura;

var img = new Image();
img.src = "./imagens/car.svg";

function desenharChao(){
    context.fillStyle = "#000";
    context.fillRect(posiX_chao, posiY_chao, Clargura, Caltura);
}

function desenharElemento(){
  context.drawImage(img,posicaoX, posicaoY);
  //context.fillStyle = "red";
  //context.fillRect(posicaoX, posicaoY, bLargura, bAltura);


}

function inicializar(){
    posicaoX = -50;
    posicaoY = posiY_chao - 40;
    desenharChao();
    desenharElemento();
}

function LimpaTela(){
  context.fillStyle = "#fff";
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function Loop(){
      LimpaTela();
      posicaoX += velocidade;
      desenharChao();
      desenharElemento();

}

function Lancar(){
      let velo = parseInt(document.getElementById("num").value);
      console.log(typeof velo);
      velocidade = velo;

      if(foilancado == false){
        foilancado = true;
        inicializar();
        console.log(velocidade);
        setInterval(Loop, 40);
      }

      else{
        inicializar();
      }

}
