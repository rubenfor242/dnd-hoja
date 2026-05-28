const fueInput = document.getElementById("fue");
const modFue = document.getElementById("modFue");

fueInput.addEventListener("input", () => {
    let valor = parseInt(fueInput.value);

    if (!isNaN(valor)) {
        let mod = Math.floor((valor - 10) / 2);
        modFue.textContent = mod;
    }
});