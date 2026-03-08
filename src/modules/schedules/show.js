const listManha = document.getElementById("listManha")
const listTarde = document.getElementById("listTarde")
const listNoite = document.getElementById("listNoite")

export function schedulesShow({ schedules }) {
  try {
    // Limpa as listas antes de renderizar
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

      // Define em qual seção o horário se encaixa
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
    console.error(error)
  }
}