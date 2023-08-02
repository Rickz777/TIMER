function relogio() {
    function criaHoraDosSegundos(segundos2) {
        const data = new Date(segundos2 * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const timer2 = document.querySelector('#timer2');
    document.addEventListener('click', function (e) {
        const elemento = e.target;
        if (elemento.classList.contains('iniciar2')) {
            iniciarTimer();
        }

        if (elemento.classList.contains('pausar2')) {
            clearInterval(tempo);
            timer2.classList.add('red-text');
        }

        if (elemento.classList.contains('zerar2')) {
            clearInterval(tempo);
            segundos2 = 0;
            timer2.innerHTML = '00:00:00';
            timer2.classList.remove('red-text');
        }
    })

    let segundos2 = 0;
    let tempo; // Remova essa linha

    function iniciarTimer() {
        tempo = setInterval(function () { // Remova a declaração "const"
            segundos2++;
            timer2.innerHTML = criaHoraDosSegundos(segundos2);
        }, 1000);
        timer2.classList.remove('red-text');
    }

}

relogio();