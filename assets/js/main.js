const timer = document.querySelector('#timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let contador = 0;
let intervalo;

function formatarTempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    const horasFormatadas = String(horas).padStart(2, '0');
    const minutosFormatados = String(minutos).padStart(2, '0');
    const segundosFormatados = String(segundosRestantes).padStart(2, '0');

    return `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
}

function iniciarContador() {
    if (!intervalo) {
        intervalo = setInterval(function () {
            contador++;
            timer.innerHTML = formatarTempo(contador);
        }, 1000);
    }
    timer.classList.remove('red-text');
}

iniciar.addEventListener('click', function (event) {
    iniciarContador();
});

pausar.addEventListener('click', function (event) {
    clearInterval(intervalo);
    intervalo = null;
    timer.classList.add('red-text');
});

zerar.addEventListener('click', function(event) {
    clearInterval(intervalo);
    contador = 0;
    timer.innerHTML = formatarTempo(contador);
    timer.classList.remove('red-text');
});
