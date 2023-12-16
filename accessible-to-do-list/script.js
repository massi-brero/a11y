const todoInput = document.querySelector('#todo_input')
const list = document.querySelector('#list')
const toDoForm = document.querySelector('#to_do_form')
const scFeedback = document.querySelector('#sc_feedback')
const heading = document.querySelector('#heading')
const submitButton = document.querySelector('#submit_button')

toDoForm.addEventListener('submit', (event) => {
  event.preventDefault()
})

submitButton.disabled = true
submitButton.classList.add('invalid')
todoInput.addEventListener('input', () => {
  console.log(console.log(todoInput.checkValidity()))
  if (todoInput.checkValidity()) {
    submitButton.disabled = false
    submitButton.classList.remove('invalid')
  } else {
    submitButton.disabled = true
    submitButton.classList.add('invalid')
  }
})
