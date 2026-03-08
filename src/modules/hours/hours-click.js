export function hoursClick() {
  const selectHora = document.getElementById("inputHora")

  selectHora.addEventListener("change", (event) => {
    // Aqui você pode adicionar lógica futura, como verificar disponibilidade
    console.log("Horário selecionado:", event.target.value)
  })
}