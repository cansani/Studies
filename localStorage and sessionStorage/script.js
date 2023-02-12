const nameForm = document.querySelector('#name-form')
const welcomeContainer = document.querySelector('#welcome')
const logoutBtn = document.querySelector('#logout')

function checkUser() {
  const user = localStorage.getItem('name')

  if (user) {
    nameForm.style.display = 'none'
    welcomeContainer.style.display = 'block'

    const userName = document.querySelector('#username')
    userName.textContent = user
  } else {
    nameForm.style.display = 'block'
    welcomeContainer.style.display = 'none'
  }

}

nameForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const name = document.querySelector('#name')

  localStorage.setItem('name', name.value)
  
  checkUser()
})

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('name')

  checkUser()
})

checkUser()
