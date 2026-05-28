const inputNivel = document.getElementById("nivel");
const inputPx = document.getElementById("px");
const valorCompetencia = document.getElementById("competencia");
const modoProgreso = document.getElementById("modoProgreso");
const campoPx = document.getElementById("campoPx");

const tablaPx = [
    { nivel: 1, px: 0 },
    { nivel: 2, px: 300 },
    { nivel: 3, px: 900 },
    { nivel: 4, px: 2700 },
    { nivel: 5, px: 6500 },
    { nivel: 6, px: 14000 },
    { nivel: 7, px: 23000 },
    { nivel: 8, px: 34000 },
    { nivel: 9, px: 48000 },
    { nivel: 10, px: 64000 },
    { nivel: 11, px: 85000 },
    { nivel: 12, px: 100000 },
    { nivel: 13, px: 120000 },
    { nivel: 14, px: 140000 },
    { nivel: 15, px: 165000 },
    { nivel: 16, px: 195000 },
    { nivel: 17, px: 225000 },
    { nivel: 18, px: 265000 },
    { nivel: 19, px: 305000 },
    { nivel: 20, px: 355000 }
];

function limitarNumero(valor, minimo, maximo) {
    let numero = parseInt(valor);

    if (isNaN(numero)) {
        numero = minimo;
    }

    if (numero < minimo) {
        numero = minimo;
    }

    if (numero > maximo) {
        numero = maximo;
    }

    return numero;
}

function obtenerPxPorNivel(nivel) {
    const fila = tablaPx.find(elemento => elemento.nivel === nivel);
    return fila.px;
}

function obtenerNivelPorPx(px) {
    let nivelCalculado = 1;

    for (let i = 0; i < tablaPx.length; i++) {
        if (px >= tablaPx[i].px) {
            nivelCalculado = tablaPx[i].nivel;
        }
    }

    return nivelCalculado;
}

function actualizarCompetencia() {
    const nivel = limitarNumero(inputNivel.value, 1, 20);

    let competencia = 2;

    if (nivel >= 5) competencia = 3;
    if (nivel >= 9) competencia = 4;
    if (nivel >= 13) competencia = 5;
    if (nivel >= 17) competencia = 6;

    valorCompetencia.textContent = `+${competencia}`;
}

function actualizarDesdeNivel() {
    const nivel = limitarNumero(inputNivel.value, 1, 20);

    inputNivel.value = nivel;

    if (modoProgreso.value === "hitos") {
        actualizarCompetencia();
        return;
    }

    inputPx.value = obtenerPxPorNivel(nivel);
    actualizarCompetencia();
}

function actualizarDesdePx() {
    const px = limitarNumero(inputPx.value, 0, 355000);

    inputPx.value = px;
    inputNivel.value = obtenerNivelPorPx(px);

    actualizarCompetencia();
}

function actualizarModoProgreso() {
    if (modoProgreso.value === "px") {
        campoPx.classList.remove("oculto");
        inputNivel.readOnly = true;

        actualizarDesdePx();
    }

    if (modoProgreso.value === "hitos") {
        campoPx.classList.add("oculto");
        inputNivel.readOnly = false;

        actualizarDesdeNivel();
    }
}

inputNivel.addEventListener("input", actualizarDesdeNivel);
inputPx.addEventListener("input", actualizarDesdePx);
modoProgreso.addEventListener("change", actualizarModoProgreso);

actualizarModoProgreso();