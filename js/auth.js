// ==========================
// LOGIN
// ==========================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const password = document.getElementById("password").value;
        const rol = document.getElementById("rol").value;

        if (usuario === "" || password === "") {
            document.getElementById("mensaje").textContent = "Debe completar todos los campos";
            return;
        }

        localStorage.setItem("usuario", usuario);
        localStorage.setItem("rol", rol);

        if (rol === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "usuario.html";
        }
    });
}

// ==========================
// CONTROL DE ACCESO
// ==========================
const rolActual = localStorage.getItem("rol");
const pagina = window.location.pathname;

if (pagina.includes("admin.html")) {
    if (rolActual !== "admin") {
        window.location.href = "index.html";
    }
}

if (pagina.includes("usuario.html")) {
    if (rolActual !== "usuario") {
        window.location.href = "index.html";
    }
}
