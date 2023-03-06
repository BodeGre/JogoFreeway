//Variaveis do Carro

let yCarros = [40,96,152,210,270,318];
let xCarros = [600,600,600,600,600,600];
let velocidadeCarros = [2,3,3.8,5,3.3,2.4];
let comprimentoCarro = 55;
let alturaCarro = 40;

function mostraCarro(){
  for(let i = 0; i<imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }

}

function movimentaCarro(){
    for(let i = 0; i<imagemCarros.length; i++){
      xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaParaInicio(){
  for(let i = 0; i<imagemCarros.length; i++){
    if(passouTodaAtela(xCarros[i])){
    xCarros[i] = 600;
  }

  }

}

function passouTodaAtela(xCarro){
  return xCarro< -50;
}