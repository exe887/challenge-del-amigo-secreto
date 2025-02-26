let nombres = [];
let mostrarGanador = document.getElementById('mensajeSorteo');
let lista = document.getElementById('listaUl');
function agregarElementoLista() {
    let elemento = document.getElementById('elementos').value.trim();
    
    if (elemento.length === 0) {
        mostrarGanador.textContent = 'Debes ingresar un nombre.'
        return;
    }

    if (!verificarSoloTexto(elemento)) {
        mostrarGanador.textContent = 'Debe ingresar solo texto.'
        return;
    }

    if (nombres.includes(elemento)) {
        mostrarGanador.textContent = 'El nombre ya existe en la lista.'
        return;
    }

    
    let li = document.createElement('li');
    li.textContent = elemento;
    lista.appendChild(li);
    activarBoxshadow()
    nombres.push(elemento);
    limpiarCampos();
}

function verificarSoloTexto(texto) {
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Permite letras y espacios
    return regex.test(texto);
}

function limpiarCampos() {
    document.getElementById('elementos').value = '';
}

function limpiarLista() {
    lista.innerHTML = '';
    nombres = [];
}

function sortearUsuarios() {
    if (nombres.length === 0) {
        mostrarGanador.textContent = 'No hay elementos aun.';
    } else{
        if (nombres.length === 1) {
            limpiarMensaje();
            mostrarGanador.textContent = 'no hay suficientes personas para iniciar el sorteo';
        } else {
            limpiarMensaje();
            let sorteo = Math.floor(Math.random() * nombres.length);
            let ganador = nombres[sorteo];
            mostrarGanador.textContent = `El ganador es: ${ganador}`;
        }
    }
}
function limpiarMensaje() {
    mostrarGanador.textContent = ''; /* limpia el mensaje */
}

function reiniciarJuego() {
    limpiarCampos();
    limpiarLista();
    limpiarMensaje();
    desactivarBoxshadow();
}

function activarBoxshadow () {
    if (!lista.classList.contains('box-shadow')) {
        lista.classList.add('box-shadow');
    }
}
function desactivarBoxshadow () {    
    lista.classList.remove('box-shadow')
}