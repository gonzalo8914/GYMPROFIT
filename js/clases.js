const claseForm = document.getElementById("claseForm");
const listaClases = document.getElementById("listaClases");

let clases = JSON.parse(localStorage.getItem("clases")) || [];

function mostrarClases() {
    listaClases.innerHTML = "";
    clases.forEach((clase) => {
        const li = document.createElement("li");
        li.textContent = `${clase.nombre} - ${clase.horario} - Cupos: ${clase.cupos}`;
        listaClases.appendChild(li);
    });
}

if (claseForm) {
    mostrarClases();

    claseForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const nuevaClase = {
            nombre: document.getElementById("nombreClase").value,
            horario: document.getElementById("horarioClase").value,
            cupos: document.getElementById("cuposClase").value
        };

        clases.push(nuevaClase);
        localStorage.setItem("clases", JSON.stringify(clases));

        claseForm.reset();
        mostrarClases();
    });
}
