//falta a função edit

const btnCreate = document.getElementById('btnCreate')
const btnSave = document.getElementById('btnSave')
const body = document.querySelector('body')
const updateContainer = document.querySelector('#update')

const setItem = (db) => localStorage.setItem('database', JSON.stringify(db))
const getItem = () => JSON.parse(localStorage.getItem('database')) ?? [] //read

const clearList = () => {
  const rows = document.querySelectorAll('#items li')
  rows.forEach(item => item.parentNode.removeChild(item))
}

const updateList = () => {
  const database = getItem()
  clearList()
  database.forEach(createRow)
}

const isValid = () => {
  return document.querySelector('#name').reportValidity()
}

const clearField = () => {
  document.getElementById('name').value = ''
}

const createName = () => {
  if (isValid()) {
    const name = {
      name: document.getElementById('name').value
    }

    const database = getItem()
    database.push(name)
    setItem(database)
    createRow(name)
    clearField()
  }
}

const updateName = (newName, index) => {
  const database = getItem()
  database[index] = newName
  setItem(database)
}

const deleteName = (index) => {
  const database = getItem()
  database.splice(index, 1)
  setItem(database)
  updateList()
}

const createRow = (name, index) => {
  const newRow = document.createElement('li')
  newRow.innerHTML = `
  <span id="span">${name.name}</span>
  <button type="button" id="btnEdit-${index}">edit</button>
  <button type="button" id="btnDelete-${index}">delete</button>`

  document.getElementById('items').appendChild(newRow)
}

const switchName = (name) => {
  newName = document.getElementById('newName').value
  name.name = newName
  console.log(name)

}

const editName = (index) => {
  const name = getItem()[index]
  /* console.log(name) */
  switchName(name)
}


const editDelete = (e) => {
  if (e.target.type == 'button') {
    const [action, index] = e.target.id.split('-')

    if (action == 'btnEdit') {
      updateContainer.style.display = 'block'
      editName(index)

    } else {
      deleteName(index)
    }

  }
}

updateContainer.style.display = 'none'
updateList()

body.addEventListener('click', editDelete)
btnCreate.addEventListener('click', createName)
/* btnSave.addEventListener('click', saveNewName) */
