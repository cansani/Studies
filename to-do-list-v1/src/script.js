const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? []

const setBanco = (banco) => localStorage.setItem('todoList', JSON.stringify(banco))

const criarItem = (texto, status, indice) => {
  const item = document.createElement('label')
  item.classList.add('todo__item')
  item.innerHTML = `
    <input type="checkbox" ${status} data-index=${indice}>
    <div>${texto}</div>
    <input type="button" value="X" data-index=${indice}>
  `
  document.getElementById('todoList').appendChild(item)
}

const limparTarefas = () => {
  const todoList = document.getElementById('todoList')
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild)
  }
}

const atualizarTela = () => {
  limparTarefas()
  const banco = getBanco()
  banco.forEach((item, indice) => criarItem(item.texto, item.status, indice))
}

const inserirItem= (e) => {
  const tecla = e.key
  const text = e.target.value
  if (tecla === 'Enter') {
    const banco = getBanco()
    banco.push({'texto': text, 'status': ''})
    setBanco(banco)
    atualizarTela()
    e.target.value = ''
  }
}

const removerItem = (indice) => {
  const banco = getBanco()
  banco.splice(indice, 1)
  setBanco(banco)
  atualizarTela()
}

const atualizarItem = (indice) => {
  const banco = getBanco()
  banco[indice].status = banco[indice].status === '' ? 'checked' : ''
  setBanco(banco)
  atualizarTela()
}

const clickItem = (event) => {
  const elemento = event.target
  if (elemento.type === 'button') {
    const indice = elemento.dataset.index
    removerItem(indice)
  } else if (elemento.type === 'checkbox') {
    const indice = elemento.dataset.index
    atualizarItem(indice)
  }
}

document.getElementById('newItem').addEventListener('keypress', inserirItem)
document.getElementById('todoList').addEventListener('click', clickItem)

atualizarTela()







