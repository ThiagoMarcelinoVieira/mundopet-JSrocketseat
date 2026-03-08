// src/services/api.js
const baseURL = window.location.hostname === 'localhost'
  ? 'http://localhost:3333'
  : 'https://mundopet-api-i378.onrender.com'

export async function fetchSchedules({ date }) {
  try {
    const response = await fetch(`${baseURL}/schedules?date=${date}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Erro ao buscar agendamentos:", error)
    alert("Não foi possível carregar os agendamentos.")
  }
}

export async function scheduleCreate({ id, petName, ownerName, description, date, hour }) {
  try {
    await fetch(`${baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, petName, ownerName, description, date, hour }),
    })

    alert("Agendamento realizado com sucesso!")
  } catch (error) {
    console.error("Erro ao criar agendamento:", error)
    alert("Não foi possível agendar. Tente novamente mais tarde.")
  }
}

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${baseURL}/schedules/${id}`, {
      method: "DELETE",
    })

    alert("Agendamento cancelado com sucesso!")
  } catch (error) {
    console.error("Erro ao cancelar agendamento:", error)
    alert("Não foi possível cancelar o agendamento.")
  }
}