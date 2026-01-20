const listaClasesUsuario = document.getElementById("listaClasesUsuario");
const mensajeUsuario = document.getElementById("mensajeUsuario");

let clases = JSON.parse(localStorage.getItem("clases")) || [];
let inscripciones = JSON.parse(localStorage.getItem("inscripciones")) || [];

function mostrarClasesUsuario() {
    listaClasesUsuario.innerHTML = "";

    if (clases.length === 0) {
        listaClasesUsuario.innerHTML = "<li>No hay clases disponibles</li>";
        return;
    }

    clases.forEach((clase, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${clase.nombre}</strong> - ${clase.horario} - Cupos: ${clase.cupos}
            <br>
            <button onclick="inscribirse(${index})">Inscribirse</button>
        `;
        listaClasesUsuario.appendChild(li);
    });
}

function inscribirse(index) {
    const usuario = localStorage.getItem("usuario");

    if (!usuario) {
        mensajeUsuario.textContent = "Debe iniciar sesión";
        return;
    }

    inscripciones.push({
        usuario: usuario,
        clase: clases[index].nombre
    });

    localStorage.setItem("inscripciones", JSON.stringify(inscripciones));
    mensajeUsuario.textContent = "Inscripción realizada correctamente";
}

mostrarClasesUsuario();
