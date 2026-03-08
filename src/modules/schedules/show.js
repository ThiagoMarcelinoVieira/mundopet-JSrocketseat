import { scheduleCancel } from "../../services/api.js"
import { schedulesFetch } from "./fetch.js"

const listManha = document.getElementById("listManha")
const listTarde = document.getElementById("listTarde")
const listNoite = document.getElementById("listNoite")

export function schedulesShow({ schedules }) {
  try {
    // Limpa as listas antes de renderizar para evitar duplicados
    listManha.innerHTML = ""
    listTarde.innerHTML = ""
    listNoite.innerHTML = ""

    schedules.forEach((schedule) => {
      const item = document.createElement("li")
      item.classList.add("appointment-item")
      item.setAttribute("data-id", schedule.id)

      item.innerHTML = `
        <span class="appointment-item__time">${schedule.hour}</span>
        <div class="appointment-item__info">
          <span class="appointment-item__names">
            <span class="pet-name">${schedule.petName}</span>
            <span class="separator">/</span>
            <span class="owner-name">${schedule.ownerName}</span>
          </span>
          <span class="appointment-item__service">${schedule.description}</span>
        </div>
        <button class="appointment-item__remove" type="button">Remover agendamento</button>
      `

      // 1. Captura o botão de remover dentro do item criado
      const removeBtn = item.querySelector(".appointment-item__remove")

      // 2. Configura a ação de remover
      removeBtn.onclick = async () => {
        const isConfirm = confirm(`Deseja realmente cancelar o agendamento de ${schedule.petName}?`)

        if (isConfirm) {
          // Chama a API para deletar do server.json
          await scheduleCancel({ id: schedule.id })
          
          // Recarrega a lista para atualizar a interface imediatamente
          await schedulesFetch()
        }
      }

      // 3. Define em qual seção o horário se encaixa
      const hour = parseInt(schedule.hour.split(":")[0])

      if (hour <= 12) {
        listManha.append(item)
      } else if (hour > 12 && hour <= 18) {
        listTarde.append(item)
      } else {
        listNoite.append(item)
      }
    })
  } catch (error) {
    console.error("Erro ao renderizar agendamentos:", error)
  }
}