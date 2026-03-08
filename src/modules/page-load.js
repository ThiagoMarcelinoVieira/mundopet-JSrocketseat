import { hoursLoad } from "./hours/hours-load.js"
import { hoursClick } from "./hours/hours-click.js"

export function pageLoad() {
  document.addEventListener("DOMContentLoaded", () => {
    hoursLoad()
    hoursClick()
  })
}