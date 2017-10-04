const modal = document.getElementById('booking-modal')
const bookButtons = document.querySelectorAll('button')
const close = document.getElementById('close')

bookButtons.forEach(function(button){
  button.addEventListener("click", openModal, test)
})

close.addEventListener("click", closeModal)

function openModal() {
  modal.className = 'modal'
}

function closeModal() {
  modal.className = 'hidden'
}

function test() {
  console.log('The button works')
}
