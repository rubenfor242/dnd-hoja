const CLAVE_FAVORITOS = "forjarol55-favoritos-v1";

const buscadorEspecies = document.getElementById("buscadorEspecies");
const introduccionEspeciesElemento = document.getElementById("introduccionEspecies");
const listaEspecies = document.getElementById("listaEspecies");

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

function esEspecieFavorita(nombreEspecie) {
    const favoritos = obtenerFavoritos();

    return favoritos.especies.includes(nombreEspecie);
}

function alternarFavoritoEspecie(nombreEspecie) {
    const favoritos = obtenerFavoritos();

    if (favoritos.especies.includes(nombreEspecie)) {
        favoritos.especies = favoritos.especies.filter(
            especie => especie !== nombreEspecie
        );
    } else {
        favoritos.especies.push(nombreEspecie);
    }

    guardarFavoritos(favoritos);
    mostrarEspecies();
}

function normalizarTexto(texto) {
    return texto
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function crearTextoBuscableEspecie(especie) {
    const textosAtributos = especie.atributosEspeciales
        .map(atributo => `${atributo.nombre} ${atributo.descripcion}`)
        .join(" ");

    const textosVariantes = especie.variantes
        ? [
            especie.variantes.titulo,
            especie.variantes.columnas.join(" "),
            especie.variantes.filas.flat().join(" ")
        ].join(" ")
        : "";

    return normalizarTexto([
        especie.nombre,
        especie.resumen,
        especie.tipoCriatura,
        especie.tamano,
        especie.velocidad,
        textosAtributos,
        textosVariantes
    ].join(" "));
}

function crearAtributosEspecialesHTML(atributosEspeciales) {
    if (!atributosEspeciales || atributosEspeciales.length === 0) {
        return "";
    }

    return `
        <h2>Atributos especiales</h2>

        ${atributosEspeciales.map(atributo => `
            <p><strong>${atributo.nombre}:</strong> ${atributo.descripcion}</p>
        `).join("")}
    `;
}

function crearVariantesHTML(variantes) {
    if (!variantes) {
        return "";
    }

    return `
        <h2>${variantes.titulo}</h2>

        <table class="tabla-catalogo">
            <thead>
                <tr>
                    ${variantes.columnas.map(columna => `<th>${columna}</th>`).join("")}
                </tr>
            </thead>

            <tbody>
                ${variantes.filas.map(fila => `
                    <tr>
                        ${fila.map(celda => `<td>${celda}</td>`).join("")}
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;
}

function mostrarIntroduccionEspecies() {
    introduccionEspeciesElemento.innerHTML = `
        <h2>${introduccionEspecies.titulo}</h2>

        ${introduccionEspecies.parrafos.map(parrafo => `<p>${parrafo}</p>`).join("")}

        <h2>${introduccionEspecies.subtitulo}</h2>

        <ul>
            ${introduccionEspecies.elementos.map(elemento => `<li>${elemento}</li>`).join("")}
        </ul>
    `;
}

function crearTarjetaEspecie(especie, abrirAutomaticamente = false) {
    const favorita = esEspecieFavorita(especie.nombre);

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

                <h2>${especie.nombre}</h2>

                <button
                    type="button"
                    class="boton-favorito"
                    data-especie="${especie.nombre}"
                >
                    ${textoFavorito}
                </button>

            </div>

            <button type="button" class="boton-mostrar-catalogo">
                ${textoBoton}
            </button>

            <div class="${claseContenido}">

                <p>${especie.resumen}</p>

                <p><strong>Tipo de criatura:</strong> ${especie.tipoCriatura}</p>

                <p><strong>Tamaño:</strong> ${especie.tamano}</p>

                <p><strong>Velocidad:</strong> ${especie.velocidad}</p>

                ${crearAtributosEspecialesHTML(especie.atributosEspeciales)}

                ${crearVariantesHTML(especie.variantes)}

            </div>

        </article>
    `;
}

function mostrarEspecies() {
    const textoBusqueda = normalizarTexto(
        buscadorEspecies.value.trim()
    );

    const especiesFiltradas = catalogoEspecies.filter(especie =>
        crearTextoBuscableEspecie(especie).includes(textoBusqueda)
    );

    const abrirResultados = textoBusqueda.length >= 4;

    listaEspecies.innerHTML =
        especiesFiltradas
            .map(especie =>
                crearTarjetaEspecie(especie, abrirResultados)
            )
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
            alternarFavoritoEspecie(
                boton.dataset.especie
            );
        });
    });
}

mostrarIntroduccionEspecies();
mostrarEspecies();

buscadorEspecies.addEventListener(
    "input",
    mostrarEspecies
);