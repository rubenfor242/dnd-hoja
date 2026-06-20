const CLAVE_FAVORITOS = "forjarol55-favoritos-v1";

const buscadorClases = document.getElementById("buscadorClases");
const introduccionClasesElemento = document.getElementById("introduccionClases");
const resumenClasesElemento = document.getElementById("resumenClases");
const listaClases = document.getElementById("listaClases");

function obtenerFavoritos() {
    const favoritosGuardados = localStorage.getItem(CLAVE_FAVORITOS);

    if (!favoritosGuardados) {
        return {
            trasfondos: [],
            especies: [],
            clases: [],
            dotes: [],
            equipo: [],
            conjuros: []
        };
    }

    try {
        return JSON.parse(favoritosGuardados);
    } catch (error) {
        return {
            trasfondos: [],
            especies: [],
            clases: [],
            dotes: [],
            equipo: [],
            conjuros: []
        };
    }
}

function guardarFavoritos(favoritos) {
    localStorage.setItem(
        CLAVE_FAVORITOS,
        JSON.stringify(favoritos)
    );
}

function esClaseFavorita(nombreClase) {
    const favoritos = obtenerFavoritos();

    return favoritos.clases.includes(nombreClase);
}

function alternarFavoritoClase(nombreClase) {
    const favoritos = obtenerFavoritos();

    if (favoritos.clases.includes(nombreClase)) {
        favoritos.clases = favoritos.clases.filter(
            clase => clase !== nombreClase
        );
    } else {
        favoritos.clases.push(nombreClase);
    }

    guardarFavoritos(favoritos);
    mostrarClases();
}

function normalizarTexto(texto) {
    return texto
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function crearTextoBuscableClase(clase) {
    const textosDatos = [
        clase.nombre,
        clase.resumen,
        clase.caracteristicaPrincipal,
        clase.dadoGolpe,
        clase.salvaciones.join(" "),
        clase.competenciasArmadura,
        clase.competenciasArmas,
        clase.entrenamientoHerramientas,
        clase.equipoInicial.opcionA.join(" "),
        clase.equipoInicial.opcionB.join(" ")
    ].join(" ");

    const textosRasgos = clase.rasgosClase
        .map(rasgo => `${rasgo.nombre} ${rasgo.descripcion}`)
        .join(" ");

    const textosSubclases = clase.subclases
        .map(subclase => [
            subclase.nombre,
            subclase.resumen,
            subclase.rasgos
                .map(rasgo => `${rasgo.nombre} ${rasgo.descripcion}`)
                .join(" ")
        ].join(" "))
        .join(" ");

    return normalizarTexto([
        textosDatos,
        textosRasgos,
        textosSubclases
    ].join(" "));
}

function mostrarIntroduccionClases() {
    introduccionClasesElemento.innerHTML = `
        <h2>${introduccionClases.titulo}</h2>

        ${introduccionClases.parrafos.map(parrafo => `<p>${parrafo}</p>`).join("")}

        <h2>${introduccionClases.subtitulo}</h2>

        <ul>
            ${introduccionClases.elementos.map(elemento => `<li>${elemento}</li>`).join("")}
        </ul>
    `;
}

function mostrarResumenClases() {
    resumenClasesElemento.innerHTML = `
        <h2>${resumenClases.titulo}</h2>

        ${resumenClases.clases.map(clase => `
            <p>
                <strong>${clase.nombre}:</strong> ${clase.descripcion}
                <br>
                <strong>Subclases:</strong> ${clase.subclases.join(", ")}
            </p>
        `).join("")}
    `;
}

function crearListaHTML(titulo, elementos) {
    if (!elementos || elementos.length === 0) {
        return "";
    }

    return `
        <p><strong>${titulo}:</strong> ${elementos.join(", ")}</p>
    `;
}

function crearRasgosHTML(titulo, rasgos) {
    if (!rasgos || rasgos.length === 0) {
        return "";
    }

    return `
        <h2>${titulo}</h2>

        ${rasgos.map(rasgo => `
            <p><strong>${rasgo.nombre}:</strong> ${rasgo.descripcion}</p>
        `).join("")}
    `;
}

function crearProgresionHTML(progresion) {
    if (!progresion) {
        return "";
    }

    return `
        <h2>${progresion.titulo}</h2>

        <table class="tabla-catalogo tabla-progresion-clase">
            <thead>
                <tr>
                    ${progresion.columnas.map(columna => `<th>${columna}</th>`).join("")}
                </tr>
            </thead>

            <tbody>
                ${progresion.filas.map(fila => `
                    <tr>
                        ${fila.map(celda => `<td>${celda}</td>`).join("")}
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;
}

function crearSubclasesHTML(subclases) {
    if (!subclases || subclases.length === 0) {
        return "";
    }

    return `
        <h2>Subclases</h2>

        <div class="catalogo-subacordeon">
            ${subclases.map(subclase => `
                <article class="panel catalogo-subitem">
                    <div class="catalogo-cabecera">
                        <h2>${subclase.nombre}</h2>
                    </div>

                    <button type="button" class="boton-mostrar-subcatalogo">
                        Mostrar
                    </button>

                    <div class="catalogo-subcontenido oculto">
                        <p>${subclase.resumen}</p>

                        ${crearRasgosHTML("Rasgos de subclase", subclase.rasgos)}
                    </div>
                </article>
            `).join("")}
        </div>
    `;
}

function crearTarjetaClase(clase, abrirAutomaticamente = false) {
    const favorita = esClaseFavorita(clase.nombre);

    const textoFavorito = favorita
        ? "★ Favorito"
        : "☆ Favorito";

    const textoBoton = abrirAutomaticamente
        ? "Ocultar"
        : "Mostrar";

    const claseContenido = abrirAutomaticamente
        ? "catalogo-contenido"
        : "catalogo-contenido oculto";

    return `
        <article class="panel catalogo-item">

            <div class="catalogo-cabecera">

                <h2>${clase.nombre}</h2>

                <button
                    type="button"
                    class="boton-favorito"
                    data-clase="${clase.nombre}"
                >
                    ${textoFavorito}
                </button>

            </div>

            <button type="button" class="boton-mostrar-catalogo">
                ${textoBoton}
            </button>

            <div class="${claseContenido}">

                <p>${clase.resumen}</p>

                <div class="bloque-datos-clase">

                    <p><strong>Característica principal:</strong> ${clase.caracteristicaPrincipal}</p>

                    <p><strong>Dado de golpe:</strong> ${clase.dadoGolpe}</p>

                    ${crearListaHTML("Tiradas de salvación", clase.salvaciones)}

                    <p><strong>Armaduras:</strong> ${clase.competenciasArmadura}</p>

                    <p><strong>Armas:</strong> ${clase.competenciasArmas}</p>

                    <p><strong>Herramientas:</strong> ${clase.entrenamientoHerramientas}</p>

                    ${crearListaHTML("Equipo A", clase.equipoInicial.opcionA)}

                    ${crearListaHTML("Equipo B", clase.equipoInicial.opcionB)}

                </div>

                ${crearProgresionHTML(clase.progresion)}

                ${crearRasgosHTML("Rasgos de clase", clase.rasgosClase)}

                ${crearSubclasesHTML(clase.subclases)}

            </div>

        </article>
    `;
}

function activarAcordeonesClases() {
    document.querySelectorAll(".boton-mostrar-catalogo").forEach(boton => {
        boton.addEventListener("click", () => {
            const contenido = boton.nextElementSibling;

            contenido.classList.toggle("oculto");

            if (contenido.classList.contains("oculto")) {
                boton.textContent = "Mostrar";
            } else {
                boton.textContent = "Ocultar";
            }
        });
    });
}

function activarAcordeonesSubclases() {
    document.querySelectorAll(".boton-mostrar-subcatalogo").forEach(boton => {
        boton.addEventListener("click", () => {
            const contenido = boton.nextElementSibling;

            contenido.classList.toggle("oculto");

            if (contenido.classList.contains("oculto")) {
                boton.textContent = "Mostrar";
            } else {
                boton.textContent = "Ocultar";
            }
        });
    });
}

function activarFavoritosClases() {
    document.querySelectorAll(".boton-favorito").forEach(boton => {
        boton.addEventListener("click", () => {
            alternarFavoritoClase(
                boton.dataset.clase
            );
        });
    });
}

function mostrarClases() {
    const textoBusqueda = normalizarTexto(
        buscadorClases.value.trim()
    );

    const clasesFiltradas = catalogoClases.filter(clase =>
        crearTextoBuscableClase(clase).includes(textoBusqueda)
    );

    const abrirResultados = textoBusqueda.length >= 4;

    listaClases.innerHTML =
        clasesFiltradas
            .map(clase =>
                crearTarjetaClase(clase, abrirResultados)
            )
            .join("");

    activarAcordeonesClases();
    activarAcordeonesSubclases();
    activarFavoritosClases();
}

mostrarIntroduccionClases();
mostrarResumenClases();
mostrarClases();

buscadorClases.addEventListener(
    "input",
    mostrarClases
);