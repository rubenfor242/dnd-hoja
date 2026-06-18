const CLAVE_FAVORITOS = "forjarol55-favoritos-v1";

const buscadorTrasfondos = document.getElementById("buscadorTrasfondos");
const reglaAumentosTrasfondoElemento = document.getElementById("reglaAumentosTrasfondo");
const listaTrasfondos = document.getElementById("listaTrasfondos");

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

function esTrasfondoFavorito(nombreTrasfondo) {
    const favoritos = obtenerFavoritos();

    return favoritos.trasfondos.includes(nombreTrasfondo);
}

function alternarFavoritoTrasfondo(nombreTrasfondo) {
    const favoritos = obtenerFavoritos();

    if (favoritos.trasfondos.includes(nombreTrasfondo)) {
        favoritos.trasfondos = favoritos.trasfondos.filter(
            trasfondo => trasfondo !== nombreTrasfondo
        );
    } else {
        favoritos.trasfondos.push(nombreTrasfondo);
    }

    guardarFavoritos(favoritos);
    mostrarTrasfondos();
}

function normalizarTexto(texto) {
    return texto
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function crearTextoBuscableTrasfondo(trasfondo) {
    return normalizarTexto([
        trasfondo.nombre,
        trasfondo.resumen,
        trasfondo.caracteristicas.join(" "),
        trasfondo.dote,
        trasfondo.habilidades.join(" "),
        trasfondo.herramientas.join(" "),
        trasfondo.equipo.opcionA.join(" "),
        trasfondo.equipo.opcionB.join(" ")
    ].join(" "));
}

function crearListaHTML(titulo, elementos) {
    if (!elementos || elementos.length === 0) {
        return "";
    }

    return `
        <p><strong>${titulo}:</strong> ${elementos.join(", ")}</p>
    `;
}

function crearTarjetaTrasfondo(trasfondo, abrirAutomaticamente = false) {
    const favorito = esTrasfondoFavorito(trasfondo.nombre);
    const textoFavorito = favorito ? "★ Favorito" : "☆ Favorito";
    const textoBoton = abrirAutomaticamente ? "Ocultar" : "Mostrar";
    const claseContenido = abrirAutomaticamente ? "catalogo-contenido" : "catalogo-contenido oculto";

    return `
        <article class="panel catalogo-item">
            <div class="catalogo-cabecera">
                <h2>${trasfondo.nombre}</h2>

                <button
                    type="button"
                    class="boton-favorito"
                    data-trasfondo="${trasfondo.nombre}"
                >
                    ${textoFavorito}
                </button>
            </div>

            <button type="button" class="boton-mostrar-catalogo">
                ${textoBoton}
            </button>

            <div class="${claseContenido}">
                <p>${trasfondo.resumen}</p>

                ${crearListaHTML("Características", trasfondo.caracteristicas)}
                <p><strong>Dote de origen:</strong> ${trasfondo.dote}</p>
                ${crearListaHTML("Habilidades", trasfondo.habilidades)}
                ${crearListaHTML("Herramientas", trasfondo.herramientas)}
                ${crearListaHTML("Equipo A", trasfondo.equipo.opcionA)}
                ${crearListaHTML("Equipo B", trasfondo.equipo.opcionB)}
            </div>
        </article>
    `;
}

function mostrarReglaAumentos() {
    reglaAumentosTrasfondoElemento.innerHTML = `
        <h2>${reglaAumentosTrasfondo.titulo}</h2>

        <p>${reglaAumentosTrasfondo.texto}</p>
    `;
}

function mostrarTrasfondos() {
    const textoBusqueda = normalizarTexto(
        buscadorTrasfondos.value.trim()
    );

    const trasfondosFiltrados = catalogoTrasfondos.filter(trasfondo =>
        crearTextoBuscableTrasfondo(trasfondo).includes(textoBusqueda)
    );

    const abrirResultados = textoBusqueda.length >= 4;

    listaTrasfondos.innerHTML =
        trasfondosFiltrados
            .map(trasfondo => crearTarjetaTrasfondo(trasfondo, abrirResultados))
            .join("");

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

    document.querySelectorAll(".boton-favorito").forEach(boton => {
        boton.addEventListener("click", () => {
            alternarFavoritoTrasfondo(boton.dataset.trasfondo);
        });
    });
}

mostrarReglaAumentos();
mostrarTrasfondos();

buscadorTrasfondos.addEventListener("input", mostrarTrasfondos);