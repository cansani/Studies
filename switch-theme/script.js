const main = document.querySelector('main')
const button = document.querySelector('.container button')

button.addEventListener('click', () => {
  main.classList.toggle('dark')
})