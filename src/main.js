"use strict"

// DAY JS
import dayjs from "./utils/date.js"

// CSS
import "./styles/global.css"
import "./styles/agenda.css"
import "./styles/modal.css"

// JS
import "./modules/modal.js"
import { hoursLoad } from "./modules/hours/hours-load.js"
import { hoursClick } from "./modules/hours/hours-click.js"

// Importa a lógica de carregamento da página
import { pageLoad } from "./modules/page-load.js"

// Inicia a aplicação
pageLoad()