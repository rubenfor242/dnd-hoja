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

const inputDadosGolpeGastados = document.getElementById("dadosGolpeGastados");
const inputDadosGolpeMaximos = document.getElementById("dadosGolpeMaximos");

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
const tablaConjurosPreparados = document.getElementById("tablaConjurosPreparados");

const selectTrasfondo = document.getElementById("trasfondo");
const selectEspecie = document.getElementById("especie");
const selectClase = document.getElementById("clase");
const selectSubclase = document.getElementById("subclase");

const estadoGuardado = document.getElementById("estadoGuardado");
const botonExportarFicha = document.getElementById("botonExportarFicha");
const inputImportarFicha = document.getElementById("inputImportarFicha");
const botonBorrarFicha = document.getElementById("botonBorrarFicha");

const CLAVE_GUARDADO_FICHA = "forjarol55-ficha-personaje-v1";

let temporizadorGuardado = null;

const trasfondosDisponibles = [
    "Acólito",
    "Animador",
    "Artesano",
    "Campesino",
    "Charlatán",
    "Comerciante",
    "Criminal",
    "Ermitaño",
    "Erudito",
    "Escriba",
    "Guardia",
    "Guía",
    "Marinero",
    "Noble",
    "Soldado",
    "Vagabundo"
];

const especiesDisponibles = [
    "Aasimar",
    "Dracónido azul",
    "Dracónido blanco",
    "Dracónido bronce",
    "Dracónido cobre",
    "Dracónido negro",
    "Dracónido oro",
    "Dracónido oropel",
    "Dracónido plata",
    "Dracónido rojo",
    "Dracónido verde",
    "Alto elfo",
    "Drow",
    "Elfo de los bosques",
    "Enano",
    "Gnomo de las rocas",
    "Gnomo de los bosques",
    "Goliat",
    "Humano",
    "Mediano",
    "Orco",
    "Tiefling abisal",
    "Tiefling ctónico",
    "Tiefling infernal"
];

const clasesDisponibles = [
    "Bárbaro",
    "Bardo",
    "Brujo",
    "Clérigo",
    "Druida",
    "Explorador",
    "Guerrero",
    "Hechicero",
    "Mago",
    "Monje",
    "Paladín",
    "Pícaro"
];

const dadosGolpePorClase = {
    "Bárbaro": "d12",
    "Bardo": "d8",
    "Brujo": "d8",
    "Clérigo": "d8",
    "Druida": "d8",
    "Explorador": "d10",
    "Guerrero": "d10",
    "Hechicero": "d6",
    "Mago": "d6",
    "Monje": "d8",
    "Paladín": "d10",
    "Pícaro": "d8"
};

const subclasesPorClase = {
    "Bárbaro": [
        "Senda del Árbol del Mundo",
        "Senda del berserker",
        "Senda del corazón salvaje",
        "Senda del fanático"
    ],

    "Bardo": [
        "Colegio de la danza",
        "Colegio del conocimiento",
        "Colegio del glamour",
        "Colegio del valor"
    ],

    "Brujo": [
        "Patrón celestial",
        "Patrón feérico",
        "Patrón infernal",
        "Patrón primigenio"
    ],

    "Clérigo": [
        "Dominio de la guerra",
        "Dominio de la luz",
        "Dominio de la vida",
        "Dominio del engaño"
    ],

    "Druida": [
        "Círculo de la luna",
        "Círculo de la tierra",
        "Círculo de las estrellas",
        "Círculo del mar"
    ],

    "Explorador": [
        "Acechador en la penumbra",
        "Cazador",
        "Errante feérico",
        "Señor de las bestias"
    ],

    "Guerrero": [
        "Caballero arcano",
        "Campeón",
        "Guerrero psiónico",
        "Maestro del combate"
    ],

    "Hechicero": [
        "Hechicería aberrante",
        "Hechicería de magia salvaje",
        "Hechicería dracónica",
        "Hechicería mecánica"
    ],

    "Mago": [
        "Abjurador",
        "Adivino",
        "Evocador",
        "Ilusionista"
    ],

    "Monje": [
        "Guerrero de la mano abierta",
        "Guerrero de la misericordia",
        "Guerrero de la sombra",
        "Guerrero de los elementos"
    ],

    "Paladín": [
        "Juramento de entrega",
        "Juramento de gloria",
        "Juramento de los antiguos",
        "Juramento de venganza"
    ],

    "Pícaro": [
        "Asesino",
        "Embaucador arcano",
        "Ladrón",
        "Rebanaalmas"
    ]
};

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

function crearOpcionSelect(valor, texto) {
    const opcion = document.createElement("option");

    opcion.value = valor;
    opcion.textContent = texto;

    return opcion;
}

function rellenarSelect(select, opciones, textoInicial) {
    select.innerHTML = "";

    select.appendChild(crearOpcionSelect("", textoInicial));

    opciones.forEach(opcion => {
        select.appendChild(crearOpcionSelect(opcion, opcion));
    });
}

function actualizarOpcionesSubclase(valorSeleccionado = "") {
    const claseSeleccionada = selectClase.value;
    const subclasesDisponibles = subclasesPorClase[claseSeleccionada] || [];
    const nivelActual = limitarNumero(inputNivel.value, 1, 20);

    selectSubclase.innerHTML = "";

    if (nivelActual < 3) {
        selectSubclase.disabled = true;

        selectSubclase.appendChild(
            crearOpcionSelect("", "Disponible a nivel 3")
        );

        return;
    }

    selectSubclase.disabled = false;

    if (!claseSeleccionada) {
        selectSubclase.appendChild(
            crearOpcionSelect("", "-- Seleccionar clase primero --")
        );

        return;
    }

    selectSubclase.appendChild(
        crearOpcionSelect("", "-- Seleccionar --")
    );

    subclasesDisponibles.forEach(subclase => {
        selectSubclase.appendChild(crearOpcionSelect(subclase, subclase));
    });

    if (subclasesDisponibles.includes(valorSeleccionado)) {
        selectSubclase.value = valorSeleccionado;
    }
}

function generarOpcionesIdentidad() {
    rellenarSelect(selectTrasfondo, trasfondosDisponibles, "-- Seleccionar --");
    rellenarSelect(selectEspecie, especiesDisponibles, "-- Seleccionar --");
    rellenarSelect(selectClase, clasesDisponibles, "-- Seleccionar --");
    actualizarOpcionesSubclase();
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
            actualizarOpcionesSubclase(selectSubclase.value);
            actualizarDadosGolpe();
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
    actualizarOpcionesSubclase(selectSubclase.value);
    actualizarDadosGolpe();
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
    actualizarOpcionesSubclase(selectSubclase.value);
    actualizarDadosGolpe();
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

function actualizarDadosGolpe() {
    const nivelActual = limitarNumero(inputNivel.value, 1, 20);
    const dadoGolpe = dadosGolpePorClase[selectClase.value];

    inputDadosGolpeGastados.max = nivelActual;
    inputDadosGolpeGastados.value = limitarNumero(
        inputDadosGolpeGastados.value,
        0,
        nivelActual
    );

    if (!dadoGolpe) {
        inputDadosGolpeMaximos.value = `${nivelActual}d?`;

        return;
    }

    inputDadosGolpeMaximos.value = `${nivelActual}${dadoGolpe}`;
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

function crearBotonComponente(texto) {
    const boton = document.createElement("button");
    const span = document.createElement("span");

    boton.type = "button";
    boton.classList.add("boton-componente");

    span.textContent = texto;

    boton.appendChild(span);

    boton.addEventListener("click", () => {
        boton.classList.toggle("activa");
    });

    return boton;
}

function crearFilaConjuro() {
    const inputNivelConjuro = document.createElement("input");
    inputNivelConjuro.type = "number";
    inputNivelConjuro.min = "0";
    inputNivelConjuro.max = "9";
    inputNivelConjuro.value = "0";
    inputNivelConjuro.classList.add("conjuro-nivel");

    inputNivelConjuro.addEventListener("input", () => {
        inputNivelConjuro.value = limitarNumero(
            inputNivelConjuro.value,
            0,
            9
        );
    });

    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.classList.add("conjuro-nombre");

    const inputTiempo = document.createElement("input");
    inputTiempo.type = "text";
    inputTiempo.classList.add("conjuro-tiempo");

    const inputAlcance = document.createElement("input");
    inputAlcance.type = "text";
    inputAlcance.classList.add("conjuro-campo-alcance");

    const componentes = document.createElement("div");
    componentes.classList.add("conjuro-componentes");

    componentes.appendChild(crearBotonComponente("C"));
    componentes.appendChild(crearBotonComponente("R"));
    componentes.appendChild(crearBotonComponente("M"));

    const notas = document.createElement("textarea");
    notas.rows = 2;
    notas.classList.add("conjuro-notas");

    const separador = document.createElement("div");
    separador.classList.add("separador-conjuro");

    tablaConjurosPreparados.appendChild(inputNivelConjuro);
    tablaConjurosPreparados.appendChild(inputNombre);
    tablaConjurosPreparados.appendChild(inputTiempo);
    tablaConjurosPreparados.appendChild(inputAlcance);
    tablaConjurosPreparados.appendChild(componentes);
    tablaConjurosPreparados.appendChild(notas);
    tablaConjurosPreparados.appendChild(separador);
}

function generarFilasConjurosPreparados() {
    for (let i = 0; i < 25; i++) {
        crearFilaConjuro();
    }
}

function obtenerControlesGuardables() {
    return Array.from(
        document.querySelectorAll("input, select, textarea")
    ).filter(control => control.type !== "file");
}

function obtenerElementosActivosGuardables() {
    return Array.from(
        document.querySelectorAll(
            ".competencia-btn, #botonInspiracion, .boton-componente, .diamante-conjuro, .boton-sintonizacion"
        )
    );
}

function mostrarEstadoGuardado(texto) {
    if (estadoGuardado) {
        estadoGuardado.textContent = texto;
    }
}

function obtenerDatosFicha() {
    return {
        version: 1,

        controles: obtenerControlesGuardables().map(control => control.value),

        activos: obtenerElementosActivosGuardables().map(elemento =>
            elemento.classList.contains("activa") ||
            elemento.classList.contains("gastado")
        )
    };
}

function recalcularFicha() {
    const subclaseActual = selectSubclase.value;

    actualizarOpcionesSubclase(subclaseActual);

    document.querySelectorAll(".fila-espacios[data-nivel-conjuro]").forEach(fila => {
        actualizarDiamantesFila(fila);
    });

    actualizarModoProgreso();
    actualizarAtributos();
    actualizarCA();
    actualizarPG();
    actualizarDadosGolpe();
    actualizarEstado();
    actualizarMagia();
    actualizarInspiracion();
    resaltarNivelActual();
}

function cargarFichaLocal() {
    const datosGuardados = localStorage.getItem(CLAVE_GUARDADO_FICHA);

    if (!datosGuardados) {
        mostrarEstadoGuardado("Cambios guardados");

        return;
    }

    try {
        const datos = JSON.parse(datosGuardados);

        const controles = obtenerControlesGuardables();
        const indiceSubclase = controles.findIndex(control => control.id === "subclase");

        controles.forEach((control, indice) => {
            if (
                datos.controles[indice] !== undefined &&
                control.id !== "subclase"
            ) {
                control.value = datos.controles[indice];
            }
        });

        actualizarOpcionesSubclase(datos.controles[indiceSubclase]);

        document.querySelectorAll(".fila-espacios[data-nivel-conjuro]").forEach(fila => {
            actualizarDiamantesFila(fila);
        });

        obtenerElementosActivosGuardables().forEach((elemento, indice) => {
            const estaActivo = datos.activos[indice];

            elemento.classList.remove("activa");
            elemento.classList.remove("gastado");

            if (estaActivo) {
                if (elemento.classList.contains("diamante-conjuro")) {
                    elemento.classList.add("gastado");
                } else {
                    elemento.classList.add("activa");
                }
            }
        });

        recalcularFicha();

        mostrarEstadoGuardado("Ficha cargada");
    } catch (error) {
        mostrarEstadoGuardado("Error al cargar la ficha");
    }
}

function guardarFichaLocal() {
    localStorage.setItem(
        CLAVE_GUARDADO_FICHA,
        JSON.stringify(obtenerDatosFicha())
    );

    mostrarEstadoGuardado("Cambios guardados");
}

function programarGuardadoLocal() {
    mostrarEstadoGuardado("Guardando...");

    clearTimeout(temporizadorGuardado);

    temporizadorGuardado = setTimeout(() => {
        guardarFichaLocal();
    }, 250);
}

function crearNombreArchivoFicha() {
    const nombrePersonaje = document.getElementById("nombre").value.trim();

    if (nombrePersonaje) {
        return `${nombrePersonaje.replace(/[^a-z0-9áéíóúñü -]/gi, "").replace(/\s+/g, "_")}.json`;
    }

    return "ficha-personaje.json";
}

function exportarFichaArchivo() {
    const datosFicha = obtenerDatosFicha();
    const contenido = JSON.stringify(datosFicha, null, 2);

    const archivo = new Blob(
        [contenido],
        { type: "application/json" }
    );

    const enlace = document.createElement("a");

    enlace.href = URL.createObjectURL(archivo);
    enlace.download = crearNombreArchivoFicha();

    enlace.click();

    URL.revokeObjectURL(enlace.href);

    mostrarEstadoGuardado("Ficha exportada");
}

function aplicarDatosFicha(datos) {
    const controles = obtenerControlesGuardables();
    const indiceSubclase = controles.findIndex(control => control.id === "subclase");

    controles.forEach((control, indice) => {
        if (
            datos.controles[indice] !== undefined &&
            control.id !== "subclase"
        ) {
            control.value = datos.controles[indice];
        }
    });

    actualizarOpcionesSubclase(datos.controles[indiceSubclase]);

    document.querySelectorAll(".fila-espacios[data-nivel-conjuro]").forEach(fila => {
        actualizarDiamantesFila(fila);
    });

    obtenerElementosActivosGuardables().forEach((elemento, indice) => {
        const estaActivo = datos.activos[indice];

        elemento.classList.remove("activa");
        elemento.classList.remove("gastado");

        if (estaActivo) {
            if (elemento.classList.contains("diamante-conjuro")) {
                elemento.classList.add("gastado");
            } else {
                elemento.classList.add("activa");
            }
        }
    });

    recalcularFicha();
}

function importarFichaArchivo(evento) {
    const archivo = evento.target.files[0];

    if (!archivo) {
        return;
    }

    const lector = new FileReader();

    lector.onload = eventoLectura => {
        try {
            const datos = JSON.parse(eventoLectura.target.result);

            aplicarDatosFicha(datos);
            guardarFichaLocal();

            mostrarEstadoGuardado("Ficha importada");
        } catch (error) {
            mostrarEstadoGuardado("Error al importar");
        }

        inputImportarFicha.value = "";
    };

    lector.readAsText(archivo);
}

function borrarFichaLocal() {
    const confirmarBorrado = confirm(
        "¿Seguro que quieres borrar la ficha guardada en este navegador?"
    );

    if (!confirmarBorrado) {
        return;
    }

    localStorage.removeItem(CLAVE_GUARDADO_FICHA);

    location.reload();
}

function actualizarInspiracion() {
    if (botonInspiracion.classList.contains("activa")) {
        inspiracionFlotante.classList.remove("oculto");
    } else {
        inspiracionFlotante.classList.add("oculto");
    }
}

generarOpcionesIdentidad();
generarTablaPx();
generarFilasConjurosPreparados();
cargarFichaLocal();

inputNivel.addEventListener("input", actualizarDesdeNivel);
inputPx.addEventListener("input", actualizarDesdePx);
modoProgreso.addEventListener("change", actualizarModoProgreso);

selectClase.addEventListener("change", () => {
    actualizarOpcionesSubclase();
    actualizarDadosGolpe();
});

inputCaBase.addEventListener("input", actualizarCA);
tipoArmadura.addEventListener("change", actualizarCA);

inputPgActuales.addEventListener("input", actualizarPG);
inputPgMaximos.addEventListener("input", actualizarPG);
inputPgTemporales.addEventListener("input", actualizarPG);

inputDadosGolpeGastados.addEventListener("input", actualizarDadosGolpe);

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

document.addEventListener("input", evento => {
    if (
        evento.target.matches("input, select, textarea") &&
        evento.target.type !== "file"
    ) {
        programarGuardadoLocal();
    }
});

document.addEventListener("change", evento => {
    if (
        evento.target.matches("input, select, textarea") &&
        evento.target.type !== "file"
    ) {
        programarGuardadoLocal();
    }
});

document.addEventListener("click", evento => {
    const elementoGuardable = evento.target.closest(
        ".competencia-btn, #botonInspiracion, .boton-componente, .diamante-conjuro, .boton-sintonizacion, .boton-muerte, .boton-reiniciar-muerte, .boton-nivel-conjuro, .boton-reiniciar-conjuros, .fila-px"
    );

    if (elementoGuardable) {
        setTimeout(() => {
            programarGuardadoLocal();
        }, 0);
    }
});

botonExportarFicha.addEventListener("click", exportarFichaArchivo);
inputImportarFicha.addEventListener("change", importarFichaArchivo);
botonBorrarFicha.addEventListener("click", borrarFichaLocal);

document.querySelectorAll(".boton-sintonizacion").forEach(boton => {
    boton.addEventListener("click", () => {
        boton.classList.toggle("activa");
    });
});

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
actualizarDadosGolpe();
actualizarEstado();
actualizarMagia();
actualizarInspiracion();