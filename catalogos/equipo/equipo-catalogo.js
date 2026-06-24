const buscadorEquipo = document.getElementById("buscadorEquipo");
const introduccionEquipoElemento = document.getElementById("introduccionEquipo");
const monedasEquipoElemento = document.getElementById("monedasEquipo");
const listaEquipo = document.getElementById("listaEquipo");

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

function mostrarEquipo() {
    listaEquipo.innerHTML = "";
}

mostrarIntroduccionEquipo();
mostrarMonedasEquipo();
mostrarEquipo();

buscadorEquipo.addEventListener("input", mostrarEquipo);