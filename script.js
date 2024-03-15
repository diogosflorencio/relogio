// import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs@2.0.0-alpha.2/dist/index.mjs'
// import { Dayjs } from 'dayjs';

var Dayjs = require("dayjs")

const timer = document.getElementById("timer");
const date = document.getElementById("date");

function exibirHoraAtualizada() {
    timer.innerText = Dayjs().format("HH:mm:ss")

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
