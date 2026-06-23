const CLAVE_FAVORITOS = "forjarol55-favoritos-v1";

const buscadorDotes = document.getElementById("buscadorDotes");
const listaDotes = document.getElementById("listaDotes");
const botonesFiltroDote = document.querySelectorAll(".filtro-dote");

let categoriaDoteActiva = "Todas";

function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

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

    return JSON.parse(favoritosGuardados);
}

function guardarFavoritos(favoritos) {
    localStorage.setItem(CLAVE_FAVORITOS, JSON.stringify(favoritos));
}

function esDoteFavorita(nombreDote) {
    const favoritos = obtenerFavoritos();

    return favoritos.dotes.includes(nombreDote);
}

function alternarFavoritoDote(nombreDote) {
    const favoritos = obtenerFavoritos();

    if (!favoritos.dotes) {
        favoritos.dotes = [];
    }

    if (favoritos.dotes.includes(nombreDote)) {
        favoritos.dotes = favoritos.dotes.filter((dote) => dote !== nombreDote);
    } else {
        favoritos.dotes.push(nombreDote);
    }

    guardarFavoritos(favoritos);
    renderizarDotes();
}

function crearTablaFabricacionRapida(dote) {
    if (!dote.fabricacionRapida || dote.fabricacionRapida.length === 0) {
        return "";
    }

    return `
        <table class="tabla-catalogo">
            <thead>
                <tr>
                    <th>Herramienta</th>
                    <th>Objeto fabricado</th>
                </tr>
            </thead>

            <tbody>
                ${dote.fabricacionRapida.map((fila) => `
                    <tr>
                        <td>${fila[0]}</td>
                        <td>${fila[1]}</td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;
}

function crearDoteHTML(dote, abrirAutomaticamente = false) {
    const favorito = esDoteFavorita(dote.nombre);
    const textoFavorito = favorito ? "★ Favorito" : "☆ Favorito";
    const textoBoton = abrirAutomaticamente ? "Ocultar" : "Mostrar";
    const claseContenido = abrirAutomaticamente ? "catalogo-contenido" : "catalogo-contenido oculto";

    return `
        <article class="panel catalogo-item">
            <div class="catalogo-cabecera">
                <h2>${dote.nombre}</h2>

                <button
                    type="button"
                    class="boton-favorito"
                    data-dote="${dote.nombre}"
                >
                    ${textoFavorito}
                </button>
            </div>

            <button type="button" class="boton-mostrar-catalogo">
                ${textoBoton}
            </button>

            <div class="${claseContenido}">
                <p><strong>Categoría:</strong> ${dote.categoria}</p>
                <p><strong>Requisito:</strong> ${dote.requisito}</p>

                <p>${dote.resumen}</p>

                <ul>
                    ${dote.beneficios.map((beneficio) => `<li>${beneficio}</li>`).join("")}
                </ul>

                ${crearTablaFabricacionRapida(dote)}
            </div>
        </article>
    `;
}

function doteCoincideConBusqueda(dote, busqueda) {
    const textoDote = normalizarTexto(`
        ${dote.nombre}
        ${dote.categoria}
        ${dote.requisito}
        ${dote.resumen}
        ${dote.beneficios.join(" ")}
    `);

    return textoDote.includes(busqueda);
}

function doteCoincideConCategoria(dote) {
    if (categoriaDoteActiva === "Todas") {
        return true;
    }

    return dote.categoria === categoriaDoteActiva;
}

function renderizarDotes() {
    const busqueda = normalizarTexto(buscadorDotes.value.trim());

    const dotesFiltradas = dotes.filter((dote) => {
        return doteCoincideConCategoria(dote) && doteCoincideConBusqueda(dote, busqueda);
    });

    if (dotesFiltradas.length === 0) {
        listaDotes.innerHTML = `
            <p>No se ha encontrado ninguna dote con esos filtros.</p>
        `;

        return;
    }

    const abrirResultados = busqueda.length >= 4;

    listaDotes.innerHTML =
        dotesFiltradas
            .map((dote) => crearDoteHTML(dote, abrirResultados))
            .join("");

    document.querySelectorAll(".boton-mostrar-catalogo").forEach((boton) => {
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

    document.querySelectorAll(".boton-favorito").forEach((boton) => {
        boton.addEventListener("click", () => {
            alternarFavoritoDote(boton.dataset.dote);
        });
    });
}

botonesFiltroDote.forEach((boton) => {
    boton.addEventListener("click", () => {
        categoriaDoteActiva = boton.dataset.categoria;

        botonesFiltroDote.forEach((botonFiltro) => {
            botonFiltro.classList.remove("activo");
        });

        boton.classList.add("activo");

        renderizarDotes();
    });
});

buscadorDotes.addEventListener("input", renderizarDotes);

renderizarDotes();