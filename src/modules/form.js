import { scheduleCreate } from "../services/api.js"
import { schedulesFetch } from "./schedules/fetch.js"

const formElement = document.querySelector("form")
const btnAgendar = document.getElementById("btnAgendar")
const modal = document.getElementById("modalOverlay")
const inputTelefone = document.getElementById("inputTelefone")

btnAgendar.onclick = async (event) => {
  event.preventDefault()

  try {
    const ownerName = document.getElementById("inputTutor").value.trim()
    const petName = document.getElementById("inputPet").value.trim()
    const description = document.getElementById("inputServico").value.trim()
    const date = document.getElementById("inputData2").value
    const hour = document.getElementById("inputHora").value

    if (!ownerName || !petName || !description || !date || !hour) {
      return alert("Por favor, preencha todos os campos para agendar!")
    }

    const id = new Date().getTime().toString()

    await scheduleCreate({ id, petName, ownerName, description, date, hour })

    await schedulesFetch()

    // 1. Limpa o formulário e campos manualmente
    if (formElement) formElement.reset()
    document.getElementById("inputTutor").value = ""
    document.getElementById("inputPet").value = ""
    document.getElementById("inputServico").value = ""
    document.getElementById("inputTelefone").value = ""
    
    // 2. Remove o foco para evitar erro de acessibilidade
    document.activeElement.blur()

    // 3. Fecha o modal
    modal.classList.remove("active")

    setTimeout(() => {
      modal.setAttribute("aria-hidden", "true")
    }, 100)

  } catch (error) {
    console.error("Erro ao agendar:", error)
  }
}

// Formatação do telefone mantida
inputTelefone.addEventListener("input", () => {
  let value = inputTelefone.value.replace(/\D/g, "")
  if (value.length > 11) value = value.slice(0, 11)
  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, "($1) $2 $3-$4")
  } else if (value.length > 6) {
    value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3")
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,5})$/, "($1) $2")
  }
  inputTelefone.value = value
})