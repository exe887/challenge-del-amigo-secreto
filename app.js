let nombres = [];
let mostrarGanador = document.getElementById('mensajeSorteo');

function agregarElementoLista() {
    let elemento = document.getElementById('elementos').value.trim();
    let lista = document.getElementById('listaUl');

    if (elemento.length === 0) {
        alert('Debe ingresar un elemento');
        return;
    }

    if (!verificarSoloTexto(elemento)) {
        alert('Debe ingresar solo texto');
        return;
    }

    if (nombres.includes(elemento)) {
        alert('El nombre ya existe en la lista');
        return;
    }

    let li = document.createElement('li');
    li.textContent = elemento;
    lista.appendChild(li);
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
    let lista = document.getElementById('listaUl');
    lista.innerHTML = '';
    nombres = [];
}

function sortearUsuarios() {
    mostrarGanador;
    let sorteo = Math.floor(Math.random() * nombres.length);
    let ganador = nombres[sorteo];
    if (nombres.length === 0) {
        mostrarGanador.textContent = 'No hay elementos aun.';
    } else{
        if (nombres.length === 1) {
            limpiarMensaje();
            mostrarGanador.textContent = 'no hay suficientes personas para iniciar el sorteo';
        } else {
            limpiarMensaje();
            mostrarGanador.textContent = `El ganador es: ${ganador}`;
        }
    }
}
function limpiarMensaje() {
    mostrarGanador;
    mostrarGanador.textContent = '';
}
function reiniciarSorteo() {
    mostrarGanador;
    mostrarGanador.textContent = '';
}

function reiniciarJuego() {
    limpiarCampos();
    limpiarLista();
    reiniciarSorteo();
    limpiarMensaje();
}