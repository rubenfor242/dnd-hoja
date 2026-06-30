const CLAVE_FAVORITOS = "forjarol55-favoritos-v1";

const buscadorEquipo = document.getElementById("buscadorEquipo");
const introduccionEquipoElemento = document.getElementById("introduccionEquipo");
const monedasEquipoElemento = document.getElementById("monedasEquipo");
const listaEquipo = document.getElementById("listaEquipo");

function normalizarTexto(texto) {
    return texto
        .toString()
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

function crearClaveFavoritoArma(nombreArma) {
    return `arma:${nombreArma}`;
}

function crearClaveFavoritoArmadura(nombreArmadura) {
    return `armadura:${nombreArmadura}`;
}

function esArmaFavorita(nombreArma) {
    const favoritos = obtenerFavoritos();
    const claveArma = crearClaveFavoritoArma(nombreArma);

    if (!favoritos.equipo) {
        return false;
    }

    return favoritos.equipo.includes(claveArma);
}

function esArmaduraFavorita(nombreArmadura) {
    const favoritos = obtenerFavoritos();
    const claveArmadura = crearClaveFavoritoArmadura(nombreArmadura);

    if (!favoritos.equipo) {
        return false;
    }

    return favoritos.equipo.includes(claveArmadura);
}

function alternarFavoritoArma(nombreArma) {
    const favoritos = obtenerFavoritos();
    const claveArma = crearClaveFavoritoArma(nombreArma);

    if (!favoritos.equipo) {
        favoritos.equipo = [];
    }

    if (favoritos.equipo.includes(claveArma)) {
        favoritos.equipo = favoritos.equipo.filter(
            equipo => equipo !== claveArma
        );
    } else {
        favoritos.equipo.push(claveArma);
    }

    guardarFavoritos(favoritos);
    mostrarEquipo();
}

function alternarFavoritoArmadura(nombreArmadura) {
    const favoritos = obtenerFavoritos();
    const claveArmadura = crearClaveFavoritoArmadura(nombreArmadura);

    if (!favoritos.equipo) {
        favoritos.equipo = [];
    }

    if (favoritos.equipo.includes(claveArmadura)) {
        favoritos.equipo = favoritos.equipo.filter(
            equipo => equipo !== claveArmadura
        );
    } else {
        favoritos.equipo.push(claveArmadura);
    }

    guardarFavoritos(favoritos);
    mostrarEquipo();
}

function mostrarIntroduccionEquipo() {
    introduccionEquipoElemento.innerHTML = `
        <h2>${introduccionEquipo.titulo}</h2>

        <p>${introduccionEquipo.texto}</p>
    `;
}

function crearTablaMonedasHTML(monedas) {
    return `
        <table class="tabla-catalogo tabla-catalogo-compacta">
            <thead>
                <tr>
                    <th>Moneda</th>
                    <th>Valor</th>
                </tr>
            </thead>

            <tbody>
                ${monedas.map((moneda) => `
                    <tr>
                        <td>${moneda.nombre}</td>
                        <td>${moneda.valor}</td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;
}

function mostrarMonedasEquipo() {
    monedasEquipoElemento.innerHTML = `
        <h2>${monedasEquipo.titulo}</h2>

        <p>${monedasEquipo.texto}</p>

        ${crearTablaMonedasHTML(monedasEquipo.monedas)}

        <p>${monedasEquipo.nota}</p>
    `;
}

function crearListaDefinicionesHTML(titulo, elementos) {
    return `
        <h3>${titulo}</h3>

        <div class="lista-definiciones-equipo">
            ${elementos.map((elemento) => `
                <p><strong>${elemento.nombre}:</strong> ${elemento.texto}</p>
            `).join("")}
        </div>
    `;
}

function crearTablaArmasHTML(armas) {
    return `
        <div class="tabla-scroll-catalogo">
            <table class="tabla-catalogo tabla-equipo tabla-armas">
                <thead>
                    <tr>
                        <th>Fav.</th>
                        <th>Nombre</th>
                        <th>Daño</th>
                        <th>Propiedades</th>
                        <th>Maestría</th>
                        <th>Peso</th>
                    </tr>
                </thead>

                <tbody>
                    ${(() => {
                        let categoriaActual = "";

                        return armas.map((arma) => {
                            let filaCategoria = "";

                            if (arma.categoria !== categoriaActual) {
                                categoriaActual = arma.categoria;

                                filaCategoria = `
                                    <tr class="categoria-armas">
                                        <td colspan="6">
                                            ${arma.categoria}
                                        </td>
                                    </tr>
                                `;
                            }

                            const textoFavorito = esArmaFavorita(arma.nombre) ? "★" : "☆";

                            return `
                                ${filaCategoria}

                                <tr>
                                    <td>
                                        <button
                                            type="button"
                                            class="boton-favorito"
                                            data-arma="${arma.nombre}"
                                        >
                                            ${textoFavorito}
                                        </button>
                                    </td>
                                    <td>${arma.nombre}</td>
                                    <td>${arma.danio}</td>
                                    <td>${arma.propiedades}</td>
                                    <td>${arma.maestria}</td>
                                    <td>${arma.peso}</td>
                                </tr>
                            `;
                        }).join("");
                    })()}
                </tbody>
            </table>
        </div>
    `;
}

function crearTablaArmadurasHTML(armaduras) {
    return `
        <div class="tabla-scroll-catalogo">
            <table class="tabla-catalogo tabla-equipo tabla-armaduras">
                <thead>
                    <tr>
                        <th>Fav.</th>
                        <th>Armadura</th>
                        <th>CA</th>
                        <th>Fuerza</th>
                        <th>Sigilo</th>
                        <th>Peso</th>
                    </tr>
                </thead>

                <tbody>
                    ${(() => {
                        let categoriaActual = "";

                        return armaduras.map((armadura) => {
                            let filaCategoria = "";

                            if (armadura.categoria !== categoriaActual) {
                                categoriaActual = armadura.categoria;

                                filaCategoria = `
                                    <tr class="categoria-armas">
                                        <td colspan="6">
                                            ${armadura.categoria}
                                        </td>
                                    </tr>
                                `;
                            }

                            const textoFavorito = esArmaduraFavorita(armadura.nombre) ? "★" : "☆";

                            return `
                                ${filaCategoria}

                                <tr>
                                    <td>
                                        <button
                                            type="button"
                                            class="boton-favorito"
                                            data-armadura="${armadura.nombre}"
                                        >
                                            ${textoFavorito}
                                        </button>
                                    </td>
                                    <td>${armadura.nombre}</td>
                                    <td>${armadura.ca}</td>
                                    <td>${armadura.fuerza}</td>
                                    <td>${armadura.sigilo}</td>
                                    <td>${armadura.peso}</td>
                                </tr>
                            `;
                        }).join("");
                    })()}
                </tbody>
            </table>
        </div>
    `;
}

function crearAcordeonArmasHTML(armasFiltradas, abrirAutomaticamente = false) {
    const textoBoton = abrirAutomaticamente ? "Ocultar" : "Mostrar";
    const claseContenido = abrirAutomaticamente ? "catalogo-contenido" : "catalogo-contenido oculto";

    return `
        <article class="panel catalogo-item">
            <div class="catalogo-cabecera">
                <h2>${armasEquipo.titulo}</h2>
            </div>

            <button type="button" class="boton-mostrar-catalogo">
                ${textoBoton}
            </button>

            <div class="${claseContenido}">
                ${armasEquipo.descripcion.map((parrafo) => `<p>${parrafo}</p>`).join("")}

                ${crearListaDefinicionesHTML("Propiedades", armasEquipo.propiedades)}

                ${crearListaDefinicionesHTML("Propiedades de maestría", armasEquipo.maestrias)}

                ${crearTablaArmasHTML(armasFiltradas)}
            </div>
        </article>
    `;
}

function crearAcordeonArmadurasHTML(armadurasFiltradas, abrirAutomaticamente = false) {
    const textoBoton = abrirAutomaticamente ? "Ocultar" : "Mostrar";
    const claseContenido = abrirAutomaticamente ? "catalogo-contenido" : "catalogo-contenido oculto";

    return `
        <article class="panel catalogo-item">
            <div class="catalogo-cabecera">
                <h2>${armadurasEquipo.titulo}</h2>
            </div>

            <button type="button" class="boton-mostrar-catalogo">
                ${textoBoton}
            </button>

            <div class="${claseContenido}">
                ${armadurasEquipo.descripcion.map((parrafo) => `<p>${parrafo}</p>`).join("")}

                ${crearTablaArmadurasHTML(armadurasFiltradas)}
            </div>
        </article>
    `;
}

function armaCoincideConBusqueda(arma, busqueda) {
    const textoArma = normalizarTexto(`
        ${arma.categoria}
        ${arma.nombre}
        ${arma.danio}
        ${arma.propiedades}
        ${arma.maestria}
        ${arma.peso}
    `);

    return textoArma.includes(busqueda);
}

function armaduraCoincideConBusqueda(armadura, busqueda) {
    const textoArmadura = normalizarTexto(`
        ${armadura.categoria}
        ${armadura.nombre}
        ${armadura.ca}
        ${armadura.fuerza}
        ${armadura.sigilo}
        ${armadura.peso}
    `);

    return textoArmadura.includes(busqueda);
}

function mostrarEquipo() {
    const busqueda = normalizarTexto(buscadorEquipo.value.trim());

    const armasFiltradas = armasEquipo.armas.filter((arma) => {
        return armaCoincideConBusqueda(arma, busqueda);
    });

    const armadurasFiltradas = armadurasEquipo.armaduras.filter((armadura) => {
        return armaduraCoincideConBusqueda(armadura, busqueda);
    });

    const abrirResultados = busqueda.length >= 3;

    listaEquipo.innerHTML = `
        ${crearAcordeonArmasHTML(armasFiltradas, abrirResultados)}
        ${crearAcordeonArmadurasHTML(armadurasFiltradas, abrirResultados)}
    `;

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

    document.querySelectorAll(".boton-favorito[data-arma]").forEach((boton) => {
        boton.addEventListener("click", () => {
            alternarFavoritoArma(boton.dataset.arma);
        });
    });

    document.querySelectorAll(".boton-favorito[data-armadura]").forEach((boton) => {
        boton.addEventListener("click", () => {
            alternarFavoritoArmadura(boton.dataset.armadura);
        });
    });
}

mostrarIntroduccionEquipo();
mostrarMonedasEquipo();
mostrarEquipo();

buscadorEquipo.addEventListener("input", mostrarEquipo);