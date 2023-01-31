const sliderImg = document.querySelectorAll('.sliderimg')
const nextBtn = document.getElementById('next-button')
const prevBtn = document.getElementById('prev-button')

let sliderAtual = 0

function ocultarSlider() {
  sliderImg.forEach(slider => slider.classList.remove('on'))
}

function mostrarSlider() {
  sliderImg[sliderAtual].classList.add('on')
}

nextBtn.addEventListener('click', () => {
  ocultarSlider()
  if (sliderAtual === sliderImg.length -1) {
    sliderAtual = 0
  } else {
    sliderAtual++
  }
  mostrarSlider()
})

prevBtn.addEventListener('click', () => {
  ocultarSlider()
  if (sliderAtual === 0) {
    sliderAtual = sliderImg.length - 1
  } else {
    sliderAtual--
  }
  mostrarSlider()
})