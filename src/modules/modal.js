const modal = document.querySelector('.modal-overlay')
const modalOpenButton = document.getElementById('openModalBtn')

// ABRIR O MODAL
function addModal() {
  modal.classList.add("active")
  modalOverlay.setAttribute("aria-hidden", "false");
}

modalOpenButton.addEventListener('click', addModal)

// FECHAR O MODAL
function removeModal() {
  modal.classList.remove("active")
}

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    removeModal()
  }
})