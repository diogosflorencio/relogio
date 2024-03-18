// import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs@2.0.0-alpha.2/dist/index.mjs'
// import { Dayjs } from 'dayjs';

import Dayjs from "dayjs";
import MicroModal from "micromodal";
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') 
Dayjs.extend(utc)
Dayjs.extend(timezone)


// Abrir o modal ao clicar no botão de edição
document.getElementById('edit-button').addEventListener('click', function() {
  MicroModal.show('timezone-modal');
});

// Salvar o fuso horário selecionado ao clicar no botão de salvar
document.getElementById('save-button').addEventListener('click', function() {
  var selectedTimezone = document.getElementById('timezone-select').value;
  MicroModal.close('timezone-modal');
  atualizarHoraRegularmente(selectedTimezone)
});
  
const timer = document.getElementById("timer");
const date = document.getElementById("date");

function exibirHoraAtualizada(param) {
  timer.innerText = Dayjs().tz(param).format("HH:mm:ss")
  date.innerText = Dayjs().format("dddd")
}
//loop + sleep 

function aguardar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function atualizarHoraRegularmente(param) {
    while (true) {
        exibirHoraAtualizada(param);
        await aguardar(1000);
    }
}
atualizarHoraRegularmente(param);
