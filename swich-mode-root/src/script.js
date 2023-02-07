const inputTrocar = document.querySelector('input')
const elementoRoot = document.documentElement

const temaClaro = {
  '--background-color': '#fff',
  '--text-color': '#000',
  '--button-color': '#ff9100',
}

const temaEscuro = {
  '--background-color': '#23232e',
  '--text-color': '#fff',
  '--button-color': '#00b4d8',
}

inputTrocar.addEventListener('change', () => {
  const inputMarcado = inputTrocar.checked
  if (inputMarcado) {
    trocarTema(temaEscuro)
  } else {
    trocarTema(temaClaro)
  }
})

function trocarTema(tema) {
  for(let prop in tema) {
    trocarPropriedade(prop, tema[prop])
  }
}

function trocarPropriedade(propriedade, valor) {
  elementoRoot.style.setProperty(propriedade, valor)
}

//elementoRoot.style.setProperty(prop, tema[prop])