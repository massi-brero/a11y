const todoInput = document.querySelector('#todo_input')
const list = document.querySelector('#list')
const toDoForm = document.querySelector('#to_do_form')
const scFeedback = document.querySelector('#sc_feedback')
const heading = document.querySelector('#heading')
const submitButton = document.querySelector('#submit_button')

toDoForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const task = todoInput.value

  removeValue()
  addTaskToDOM(task)
  screenreaderFeedback(task)
})

submitButton.disabled = true
submitButton.classList.add('invalid')
todoInput.addEventListener('input', () => {
  if (todoInput.checkValidity()) {
    submitButton.disabled = false
    submitButton.classList.remove('invalid')
  } else {
    submitButton.disabled = true
    submitButton.classList.add('invalid')
  }
})

const addTaskToDOM = (task) => {
  const id = generateID()
  const taskItem = createElement('li', '', list)
  const checkbox = createElement('input', null, taskItem, {
    type: 'type',
    value: 'checkbox',
  })
  checkbox.setAttribute('id', id)
  checkbox.setAttribute('class', 'custom_checkbox')
  createElement('label', task, taskItem, {
    type: 'for',
    value: id,
  })
  createElement('button', 'Delete Task', taskItem, {
    type: 'class',
    value: 'delete_task',
  })
}

const removeValue = () => {
  todoInput.value = ''
}

const screenreaderFeedback = (task, feedback = 'added') => {
  scFeedback.textContent = `${task} ${feedback}.`
}

/**
 * attribute needs to be passed as {type: 'xyz', value: '1122'}
 */
const createElement = (tagName, textNode, parent, attribute = null) => {
  const node = document.createElement(tagName)

  if (textNode) {
    const text = document.createTextNode(textNode)
    node.appendChild(text)
  }

  if (attribute && 'type' in attribute && 'value' in attribute) {
    node.setAttribute(attribute.type, attribute.value)
  }

  isDOM(parent) && parent.appendChild(node)
  return node
}

const isDOM = (el) => el && (el instanceof Element || el instanceof Document)

const generateID = () => {
  const idPrefix = 'task_num_'
  const tasks = document.querySelectorAll('#list > li')

  if (Array.isArray(tasks)) {
    return `${idPrefix}${tasks.length}`
  }
  return null
}
