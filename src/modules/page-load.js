import { hoursLoad } from "./hours/hours-load.js"
import { hoursClick } from "./hours/hours-click.js"
import { schedulesFetch } from "./schedules/fetch.js"

const inputData = document.getElementById("inputData")
const inputDataModal = document.getElementById("inputData2")

export function pageLoad() {
  document.addEventListener("DOMContentLoaded", () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    
    const formattedDate = `${year}-${month}-${day}`

    // Define data padrão e mínima para a Home
    inputData.value = formattedDate
    inputData.min = formattedDate

    // Define data padrão e mínima para o Modal
    if (inputDataModal) {
      inputDataModal.value = formattedDate
      inputDataModal.min = formattedDate
    }

    hoursLoad()
    hoursClick()
    schedulesFetch()
  })

  inputData.addEventListener("change", () => {
    schedulesFetch()
  })
}