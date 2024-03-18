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
    console.log('Fuso horário selecionado:', selectedTimezone);
    // Aqui você pode adicionar lógica para salvar o fuso horário no backend ou onde for necessário
    MicroModal.close('timezone-modal');
  });

  
const timer = document.getElementById("timer");
const date = document.getElementById("date");

function exibirHoraAtualizada() {
    timer.innerText = Dayjs().tz("Europe/Berlin").format("HH:mm:ss")
    console.log(timer)

    date.innerText = Dayjs().format("dddd")
}

//loop + sleep 

function aguardar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function atualizarHoraRegularmente() {
    while (true) {
        exibirHoraAtualizada();
        await aguardar(1000);
    }
}
atualizarHoraRegularmente();
