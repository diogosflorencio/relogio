// import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs@2.0.0-alpha.2/dist/index.mjs'
import { dayjs } from 'dayjs';

const timer = document.getElementById("timer");
const date = document.getElementById("date");

function exibirHoraAtualizada() {
    timer.innerText = dayjs().format("HH:mm:ss")

    date.innerText = dayjs().format("dddd")
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
