import Dayjs from "dayjs";
import MicroModal from "micromodal";
import 'dayjs/plugin/utc';
import 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

Dayjs.extend(utc);
Dayjs.extend(timezone);

// Abrir o modal ao clicar no botão de edição
document.getElementById('edit-button').addEventListener('click', function() {
  MicroModal.show('timezone-modal');
});

var selectedTimezone = "America/Sao_Paulo";
// Salvar o fuso horário selecionado ao clicar no botão de salvar
document.getElementById('save-button').addEventListener('click', function() {
  selectedTimezone = document.getElementById('timezone-select').value;
  MicroModal.close('timezone-modal');
  atualizarHoraRegularmente()
  exibirHoraAtualizada(selectedTimezone);
});
  
const timer = document.getElementById("timer");
const date = document.getElementById("date");

async function atualizarHoraRegularmente() {
  while (true) {
    const p = selectedTimezone; // Definindo a variável p dentro do loop
    exibirHoraAtualizada(p);
    await aguardar(1000);
  }
}

function exibirHoraAtualizada(param) {
  console.log(timer.innerText = Dayjs().tz(param).format("HH:mm:ss"))
  date.innerText = Dayjs().format("dddd");
}

function aguardar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Obtendo o fuso horário padrão do navegador como parâmetro inicial

atualizarHoraRegularmente();
exibirHoraAtualizada(selectedTimezone);