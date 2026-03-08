import { openingHours } from "../../utils/opening-hours.js"

const selectHora = document.getElementById("inputHora")

export function hoursLoad() {
  // 1. Limpa o select para evitar duplicados
  selectHora.innerHTML = ""

  // 2. Adiciona uma opção padrão (opcional, mas profissional)
  const optionDefault = document.createElement("option")
  optionDefault.value = ""
  optionDefault.textContent = "Selecione..."
  optionDefault.disabled = true
  optionDefault.selected = true
  selectHora.append(optionDefault)

  // 3. Percorre o array de horários e cria as options
  openingHours.forEach((hour) => {
    const option = document.createElement("option")
    option.value = hour
    option.textContent = hour
    
    selectHora.append(option)
  })
}