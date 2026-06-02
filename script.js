const inputNivel = document.getElementById("nivel");
const inputPx = document.getElementById("px");
const valorCompetencia = document.getElementById("competencia");
const modoProgreso = document.getElementById("modoProgreso");
const campoPx = document.getElementById("campoPx");
const tablaPxContenedor = document.getElementById("tablaPxContenedor");
const tablaPxElemento = document.getElementById("tablaPx");

const inputCaBase = document.getElementById("caBase");
const botonEscudo = document.getElementById("botonEscudo");
const competenciaEscudos = document.getElementById("competenciaEscudos");
const valorCaTotal = document.getElementById("caTotal");
const tipoArmadura = document.getElementById("tipoArmadura");
const notaCaTotal = document.getElementById("notaCaTotal");

const inputPgActuales = document.getElementById("pgActuales");
const inputPgMaximos = document.getElementById("pgMaximos");
const inputPgTemporales = document.getElementById("pgTemporales");

const valorIniciativa = document.getElementById("iniciativa");
const valorPercepcionPasiva = document.getElementById("percepcionPasiva");
const botonInspiracion = document.getElementById("botonInspiracion");
const inspiracionFlotante = document.getElementById("inspiracionFlotante");

const aptitudMagica = document.getElementById("aptitudMagica");
const modificadorAptitudMagica = document.getElementById("modificadorAptitudMagica");
const cdConjuros = document.getElementById("cdConjuros");
const bonoTempCD = document.getElementById("bonoTempCD");
const ataqueConjuros = document.getElementById("ataqueConjuros");
const bonoTempAtaqueConjuro = document.getElementById("bonoTempAtaqueConjuro");
const reiniciarConjuros = document.getElementById("reiniciarConjuros");

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

const atributos = {
    fue: {
        input: document.getElementById("fue"),
        modificador: document.getElementById("mod-fue"),
        salvacion: document.getElementById("salvacion-fue"),
        habilidades: {
            atletismo: document.getElementById("habilidad-atletismo")
        }
    },

    des: {
        input: document.getElementById("des"),
        modificador: document.getElementById("mod-des"),
        salvacion: document.getElementById("salvacion-des"),
        habilidades: {
            acrobacias: document.getElementById("habilidad-acrobacias"),
            "juego-manos": document.getElementById("habilidad-juego-manos"),
            sigilo: document.getElementById("habilidad-sigilo")
        }
    },

    con: {
        input: document.getElementById("con"),
        modificador: document.getElementById("mod-con"),
        salvacion: document.getElementById("salvacion-con"),
        habilidades: {}
    },

    int: {
        input: document.getElementById("int"),
        modificador: document.getElementById("mod-int"),
        salvacion: document.getElementById("salvacion-int"),
        habilidades: {
            arcano: document.getElementById("habilidad-arcano"),
            historia: document.getElementById("habilidad-historia"),
            investigacion: document.getElementById("habilidad-investigacion"),
            naturaleza: document.getElementById("habilidad-naturaleza"),
            religion: document.getElementById("habilidad-religion")
        }
    },

    sab: {
        input: document.getElementById("sab"),
        modificador: document.getElementById("mod-sab"),
        salvacion: document.getElementById("salvacion-sab"),
        habilidades: {
            medicina: document.getElementById("habilidad-medicina"),
            percepcion: document.getElementById("habilidad-percepcion"),
            perspicacia: document.getElementById("habilidad-perspicacia"),
            supervivencia: document.getElementById("habilidad-supervivencia"),
            animales: document.getElementById("habilidad-animales")
        }
    },

    car: {
        input: document.getElementById("car"),
        modificador: document.getElementById("mod-car"),
        salvacion: document.getElementById("salvacion-car"),
        habilidades: {
            engano: document.getElementById("habilidad-engano"),
            interpretacion: document.getElementById("habilidad-interpretacion"),
            intimidacion: document.getElementById("habilidad-intimidacion"),
            persuasion: document.getElementById("habilidad-persuasion")
        }
    }
};

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

function formatearNumero(numero) {
    return numero.toLocaleString("es-ES");
}

function formatearModificador(numero) {
    if (numero >= 0) {
        return `+${numero}`;
    }

    return `${numero}`;
}

function calcularModificador(puntuacion) {
    return Math.floor((puntuacion - 10) / 2);
}

function obtenerCompetenciaActual() {
    const textoCompetencia = valorCompetencia.textContent.replace("+", "");
    return parseInt(textoCompetencia);
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

function generarTablaPx() {
    tablaPxElemento.innerHTML = "";

    tablaPx.forEach(fila => {
        const boton = document.createElement("button");

        boton.type = "button";
        boton.classList.add("fila-px");
        boton.dataset.nivel = fila.nivel;
        boton.dataset.px = fila.px;

        boton.innerHTML = `
            <span>Nivel ${fila.nivel}</span>
            <span>${formatearNumero(fila.px)} PX</span>
        `;

        boton.addEventListener("click", () => {
            inputNivel.value = fila.nivel;
            inputPx.value = fila.px;

            actualizarCompetencia();
            actualizarAtributos();
            actualizarCA();
            actualizarEstado();
            actualizarMagia();
            resaltarNivelActual();
        });

        tablaPxElemento.appendChild(boton);
    });
}

function resaltarNivelActual() {
    const nivelActual = limitarNumero(inputNivel.value, 1, 20);
    const filas = document.querySelectorAll(".fila-px");

    filas.forEach(fila => {
        fila.classList.remove("activa");

        if (parseInt(fila.dataset.nivel) === nivelActual) {
            fila.classList.add("activa");
        }
    });
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

    if (modoProgreso.value !== "hitos") {
        inputPx.value = obtenerPxPorNivel(nivel);
    }

    actualizarCompetencia();
    actualizarAtributos();
    actualizarCA();
    actualizarEstado();
    actualizarMagia();
    resaltarNivelActual();
}

function actualizarDesdePx() {
    const px = limitarNumero(inputPx.value, 0, 355000);

    inputPx.value = px;
    inputNivel.value = obtenerNivelPorPx(px);

    actualizarCompetencia();
    actualizarAtributos();
    actualizarCA();
    actualizarEstado();
    actualizarMagia();
    resaltarNivelActual();
}

function actualizarCA() {
    const caBase = limitarNumero(inputCaBase.value, 0, 99);
    const puntuacionDestreza = limitarNumero(atributos.des.input.value, 3, 20);
    const modificadorDestreza = calcularModificador(puntuacionDestreza);
    const armadura = tipoArmadura.value;

    inputCaBase.value = caBase;

    let modificadorDestrezaAplicado = modificadorDestreza;
    let textoNota = "(base + DES + mods.)";

    if (armadura === "sin") {
        modificadorDestrezaAplicado = modificadorDestreza;
        textoNota = "(base + DES completo + mods.)";
    }

    if (armadura === "ligera") {
        modificadorDestrezaAplicado = modificadorDestreza;
        textoNota = "(base + DES completo + mods.)";
    }

    if (armadura === "media") {
        modificadorDestrezaAplicado = Math.min(modificadorDestreza, 2);
        textoNota = "(base + DES máx. +2 + mods.)";
    }

    if (armadura === "pesada") {
        modificadorDestrezaAplicado = 0;
        textoNota = "(base + sin DES + mods.)";
    }

    let caTotal = caBase + modificadorDestrezaAplicado;

    if (
        botonEscudo.classList.contains("activa") &&
        competenciaEscudos.classList.contains("activa")
    ) {
        caTotal += 2;
    }

    valorCaTotal.textContent = caTotal;
    notaCaTotal.textContent = textoNota;
}

function actualizarEstado() {
    const puntuacionDestreza = limitarNumero(
        atributos.des.input.value,
        3,
        20
    );

    const modificadorDestreza = calcularModificador(
        puntuacionDestreza
    );

    valorIniciativa.textContent =
        `1D20${formatearModificador(modificadorDestreza)}`;

    const percepcionActual =
        parseInt(
            atributos.sab.habilidades.percepcion.textContent
        ) || 0;

    valorPercepcionPasiva.textContent =
        10 + percepcionActual;
}

function actualizarMagia() {
    const claveAptitud = aptitudMagica.value;

    let modificadorMagico = 0;

    if (claveAptitud !== "ninguna") {
        const puntuacion = limitarNumero(
            atributos[claveAptitud].input.value,
            3,
            20
        );

        modificadorMagico = calcularModificador(puntuacion);
    }

    const competencia = obtenerCompetenciaActual();

    const bonoCD = limitarNumero(bonoTempCD.value, -99, 99);
    const bonoAtaque = limitarNumero(bonoTempAtaqueConjuro.value, -99, 99);

    bonoTempCD.value = bonoCD;
    bonoTempAtaqueConjuro.value = bonoAtaque;

    const cdFinal = 8 + competencia + modificadorMagico + bonoCD;
    const ataqueFinal = competencia + modificadorMagico + bonoAtaque;

    modificadorAptitudMagica.textContent =
        formatearModificador(modificadorMagico);

    cdConjuros.textContent = cdFinal;

    ataqueConjuros.textContent =
        formatearModificador(ataqueFinal);
}

function actualizarPG() {
    const pgMaximos = limitarNumero(inputPgMaximos.value, 0, 999);
    const pgTemporales = limitarNumero(inputPgTemporales.value, 0, 999);

    let pgActuales = limitarNumero(inputPgActuales.value, 0, 999);

    if (pgActuales > pgMaximos) {
        pgActuales = pgMaximos;
    }

    inputPgMaximos.value = pgMaximos;
    inputPgActuales.value = pgActuales;
    inputPgTemporales.value = pgTemporales;

    if (pgTemporales > 0) {
        inputPgActuales.readOnly = true;
    } else {
        inputPgActuales.readOnly = false;
    }
}

function actualizarModoProgreso() {
    if (modoProgreso.value === "px") {
        campoPx.classList.remove("oculto");
        tablaPxContenedor.classList.remove("oculto");
        inputNivel.readOnly = true;

        actualizarDesdePx();
    }

    if (modoProgreso.value === "hitos") {
        campoPx.classList.add("oculto");
        tablaPxContenedor.classList.add("oculto");
        inputNivel.readOnly = false;

        actualizarDesdeNivel();
    }
}

function actualizarAtributos() {
    const competencia = obtenerCompetenciaActual();

    Object.keys(atributos).forEach(claveAtributo => {
        const atributo = atributos[claveAtributo];

        const puntuacion = limitarNumero(atributo.input.value, 3, 20);
        const modificador = calcularModificador(puntuacion);

        atributo.input.value = puntuacion;
        atributo.modificador.textContent = formatearModificador(modificador);

        const botonSalvacion = document.querySelector(
            `.competencia-btn[data-atributo="${claveAtributo}"][data-habilidad="salvacion"]`
        );

        let totalSalvacion = modificador;

        if (botonSalvacion.classList.contains("activa")) {
            totalSalvacion += competencia;
        }

        atributo.salvacion.textContent = formatearModificador(totalSalvacion);

        Object.keys(atributo.habilidades).forEach(claveHabilidad => {
            const botonHabilidad = document.querySelector(
                `.competencia-btn[data-atributo="${claveAtributo}"][data-habilidad="${claveHabilidad}"]`
            );

            let totalHabilidad = modificador;

            if (botonHabilidad.classList.contains("activa")) {
                totalHabilidad += competencia;
            }

            atributo.habilidades[claveHabilidad].textContent =
                formatearModificador(totalHabilidad);
        });
    });
}

function actualizarCirculosMuerte(tipo, cantidad) {
    const fila = document.querySelector(`.fila-muerte[data-tipo="${tipo}"]`);
    const circulos = fila.querySelectorAll(".muerte-circulo");

    circulos.forEach((circulo, indice) => {
        if (indice < cantidad) {
            circulo.classList.add("activa");
        } else {
            circulo.classList.remove("activa");
        }
    });
}

function obtenerCantidadMuerte(tipo) {
    const fila = document.querySelector(`.fila-muerte[data-tipo="${tipo}"]`);
    const circulosActivos = fila.querySelectorAll(".muerte-circulo.activa");

    return circulosActivos.length;
}

function limitarTotalEspacios(input) {
    const minimo = parseInt(input.min);
    const maximo = parseInt(input.max);

    input.value = limitarNumero(input.value, minimo, maximo);

    return input.value;
}

function crearDiamanteConjuro(gastado = false) {
    const diamante = document.createElement("button");

    diamante.type = "button";
    diamante.classList.add("diamante-conjuro");

    if (gastado) {
        diamante.classList.add("gastado");
    }

    diamante.addEventListener("click", () => {
        diamante.classList.toggle("gastado");
    });

    return diamante;
}

function actualizarDiamantesFila(fila) {
    const inputTotal = fila.querySelector(".total-espacios");
    const contenedorDiamantes = fila.querySelector(".diamantes-conjuro");

    const total = limitarTotalEspacios(inputTotal);
    const diamantesPrevios = Array.from(
        contenedorDiamantes.querySelectorAll(".diamante-conjuro")
    );

    const gastadosPrevios = diamantesPrevios.filter(diamante =>
        diamante.classList.contains("gastado")
    ).length;

    contenedorDiamantes.innerHTML = "";

    for (let i = 0; i < total; i++) {
        const diamante = crearDiamanteConjuro(i < gastadosPrevios);

        contenedorDiamantes.appendChild(diamante);
    }
}

function gastarEspacioConjuro(fila) {
    const diamantes = Array.from(
        fila.querySelectorAll(".diamante-conjuro")
    );

    const primerDisponible = diamantes.find(diamante =>
        !diamante.classList.contains("gastado")
    );

    if (primerDisponible) {
        primerDisponible.classList.add("gastado");
    }
}

function reiniciarEspaciosConjuro() {
    document.querySelectorAll(".diamante-conjuro").forEach(diamante => {
        diamante.classList.remove("gastado");
    });
}

function actualizarInspiracion() {
    if (botonInspiracion.classList.contains("activa")) {
        inspiracionFlotante.classList.remove("oculto");
    } else {
        inspiracionFlotante.classList.add("oculto");
    }
}

generarTablaPx();

inputNivel.addEventListener("input", actualizarDesdeNivel);
inputPx.addEventListener("input", actualizarDesdePx);
modoProgreso.addEventListener("change", actualizarModoProgreso);

inputCaBase.addEventListener("input", actualizarCA);
tipoArmadura.addEventListener("change", actualizarCA);

inputPgActuales.addEventListener("input", actualizarPG);
inputPgMaximos.addEventListener("input", actualizarPG);
inputPgTemporales.addEventListener("input", actualizarPG);

aptitudMagica.addEventListener("change", actualizarMagia);
bonoTempCD.addEventListener("input", actualizarMagia);
bonoTempAtaqueConjuro.addEventListener("input", actualizarMagia);

Object.keys(atributos).forEach(claveAtributo => {
    atributos[claveAtributo].input.addEventListener("change", () => {
        actualizarAtributos();
        actualizarCA();
        actualizarEstado();
        actualizarMagia();
    });
});

document.querySelectorAll(".competencia-btn").forEach(boton => {
    boton.addEventListener("click", evento => {
        evento.stopPropagation();

        if (boton.id === "botonEscudo") {
            return;
        }

        boton.classList.toggle("activa");

        actualizarAtributos();
        actualizarEstado();
        actualizarMagia();
    });
});

botonEscudo.addEventListener("click", () => {
    botonEscudo.classList.toggle("activa");

    actualizarCA();
});

competenciaEscudos.addEventListener("click", () => {
    actualizarCA();
});

document.querySelectorAll(".boton-muerte").forEach(boton => {
    boton.addEventListener("click", () => {
        const tipo = boton.dataset.tipo;
        let cantidad = obtenerCantidadMuerte(tipo);

        if (cantidad < 3) {
            cantidad++;
        }

        actualizarCirculosMuerte(tipo, cantidad);
    });
});

document.getElementById("reiniciarMuerte").addEventListener("click", () => {
    actualizarCirculosMuerte("exitos", 0);
    actualizarCirculosMuerte("fallos", 0);
});

document.querySelectorAll(".fila-espacios[data-nivel-conjuro]").forEach(fila => {
    const inputTotal = fila.querySelector(".total-espacios");
    const botonNivel = fila.querySelector(".boton-nivel-conjuro");

    inputTotal.addEventListener("input", () => {
        actualizarDiamantesFila(fila);
    });

    inputTotal.addEventListener("change", () => {
        actualizarDiamantesFila(fila);
    });

    botonNivel.addEventListener("click", () => {
        gastarEspacioConjuro(fila);
    });

    actualizarDiamantesFila(fila);
});

reiniciarConjuros.addEventListener("click", reiniciarEspaciosConjuro);

botonInspiracion.addEventListener("click", () => {
    botonInspiracion.classList.toggle("activa");

    actualizarInspiracion();
});

inspiracionFlotante.addEventListener("click", () => {
    botonInspiracion.classList.remove("activa");

    actualizarInspiracion();
});

actualizarModoProgreso();
actualizarAtributos();
actualizarCA();
actualizarPG();
actualizarEstado();
actualizarMagia();
actualizarInspiracion();