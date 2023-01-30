const btnLigar = document.getElementById('ligar')
const btnDesligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')

function isBroken() {
  return lampada.src.indexOf('quebrada') > -1 //a funçao isBroken faz com que parte da string = 'quebrada' seja procurada dentro do array e caso ela retorne um numero > -1 a condiçao é dada como true ou seja a parte da string foi encontrada (metodo indexOf).
}

function turnOn() {
  if (!isBroken()) { //se retornar false, ou seja nao achar parte da string = 'quebrada' dentro do array:
    lampada.src = '../public/images/ligada.jpg' //executara normalmente, tanto para turnOn quanto para turnOff.
  }
}

function turnOff() {
  if (!isBroken()) { 
    lampada.src = '../public/images/desligada.jpg'
  }
}

btnLigar.addEventListener('click', turnOn)

btnDesligar.addEventListener('click', turnOff)

lampada.addEventListener('mouseover', turnOn)

lampada.addEventListener('mouseleave', turnOff)

lampada.addEventListener('dblclick', () => {
  lampada.src = '../public/images/quebrada.jpg'
}) //Depois do dblclick, o array de src tambem "guarda" como valor a "palavra" 'quebrada' em qualquer posiçao, o que faz com que as funcoes turnOn e turnOff caiam na condiçao do If e inves de retornar false retornam true, nao podendo ser mais executadas.

