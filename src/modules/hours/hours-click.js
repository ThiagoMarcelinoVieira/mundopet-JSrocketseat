export function hoursClick() {
  const selectHora = document.getElementById("inputHora")
  // Captura o ícone do relógio
  const clockIcon = document.querySelector(".select-wrapper img:first-child")

  // Se clicar no ícone, abre o seletor
  if (clockIcon) {
    clockIcon.onclick = () => {
      selectHora.showPicker?.() // Tenta abrir o menu nativo
      selectHora.focus()
    }
  }

  selectHora.addEventListener("change", (event) => {
    const selectedHour = event.target.value
    
    if (selectedHour) {
      selectHora.classList.add("selected")
      console.log("Horário selecionado:", selectedHour)
    }
  })
}