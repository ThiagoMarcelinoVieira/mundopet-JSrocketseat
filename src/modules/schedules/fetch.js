import { fetchSchedules } from "../../services/api.js"
import { schedulesShow } from "./show.js"

export async function schedulesFetch() {
  // 1. Obtém o valor do input de data (o calendário do topo)
  const selectedDate = document.getElementById("inputData").value

  // 2. Busca os agendamentos na API filtrando pela data
  const schedules = await fetchSchedules({ date: selectedDate })
  
  // 3. Exibe os agendamentos na tela
  schedulesShow({ schedules })
}