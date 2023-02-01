const display = document.getElementById('display')
const btnNumeros = document.querySelectorAll('[id*=tecla]')
const btnOperador = document.querySelectorAll('[id*=operador]')

let novoNum = true
let operador
let numAnterior

const operacaoPendente = () => operador !== undefined

const calcular = () => {
  if (operacaoPendente()) {
    const numAtual = parseFloat(display.textContent.replace(',', '.'))
    novoNum = true
    const resultado = eval(`${numAnterior}${operador}${numAtual}`)
    atualizarDisplay(resultado)
  }
}

const atualizarDisplay = (texto) => {
  if (novoNum) {
    display.textContent = texto.toLocaleString('BR')
    novoNum = false
  } else {
    display.textContent += texto.toLocaleString('BR')
  }
}

const inserirNum = (e) => atualizarDisplay(e.target.textContent)

btnNumeros.forEach(num => num.addEventListener('click', inserirNum))

const selecionarOperador = (e) => {
  if (!novoNum) {
    calcular()
    novoNum = true
    operador = e.target.textContent
    numAnterior = parseFloat(display.textContent.replace(',', '.'))
  }
}

btnOperador.forEach(op => op.addEventListener('click', selecionarOperador))

const ativarIgual = () => {
  calcular()
  operador = undefined
}

document.getElementById('igual').addEventListener('click', ativarIgual)

const limparDisplay = () => display.textContent = ''

document.getElementById('limparDisplay').addEventListener('click', limparDisplay)

const limparCalculo = () => {
  limparDisplay()
  operador = undefined
  novoNum = true
  numAnterior = undefined
}

document.getElementById('limparCalculo').addEventListener('click', limparCalculo)

const removerUltimoNum = () => display.textContent = display.textContent.slice(0, -1)

document.getElementById('backspace').addEventListener('click', removerUltimoNum)

const inverterSinal = () => {
  novoNum = true
  atualizarDisplay(display.textContent * -1)
}

document.getElementById('inverter').addEventListener('click', inverterSinal)

const existeDecimal = () => display.textContent.indexOf(',') !== -1

const existeValor = () => display.textContent.length > 0

const inserirDecimal = () => {
  if (!existeDecimal()) {
    if (existeValor()) {
      atualizarDisplay(',')
    } else {
      atualizarDisplay('0,')
    }
  }
}

document.getElementById('decimal').addEventListener('click', inserirDecimal)

const teclado = {
  '0': 'tecla0',
  '1': 'tecla1',
  '2': 'tecla2',
  '3': 'tecla3',
  '4': 'tecla4',
  '5': 'tecla5',
  '6': 'tecla6',
  '7': 'tecla7',
  '8': 'tecla8',
  '9': 'tecla9',
  '/': 'operadorDividir',
  '+': 'operadorSomar',
  '-': 'operadorSubtrair',
  '*': 'operadorMultiplicar',
  '=': 'igual',
  'Enter': 'igual',
  'Backspace': 'backspace',
  'c': 'limparDisplay',
  'Escape': 'limparCalculo',
  ',': 'decimal'
}

const acionarTeclado = (event) => {
  const tecla = event.key

  const teclaPermitida = () => Object.keys(teclado).indexOf(tecla) !== -1

  if(teclaPermitida()) {
    document.getElementById(teclado[tecla]).click()
  }
}

document.addEventListener('keydown', acionarTeclado)

