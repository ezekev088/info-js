//REGISTRO
function registrar() {
    const usuario = document.getElementById("regUsuario").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const cel = document.getElementById("regCel").value.trim();
    const password = document.getElementById("regPassword").value;
    const mensaje = document.getElementById("mensajeRegistro");

    // Validación de campos
    if (!usuario || !email || !cel || !password) {
        mensaje.style.color = "#f58300";
        mensaje.textContent = "Todos los campos son obligatorios.";
        return;
    }

   
    const datos = { usuario, email, cel, password };
    localStorage.setItem("usuarioRegistrado", JSON.stringify(datos));


    mensaje.style.color = "#00ff00";
    mensaje.textContent = "Registro exitoso, ya puedes iniciar sesión";
}

//INICIO DE SESIÓN 
function iniciarSesion() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const mensaje = document.getElementById("mensajeLogin");


    const datosGuardados = JSON.parse(localStorage.getItem("usuarioRegistrado"));

    if (!datosGuardados) {
        mensaje.style.color = "#f58300";
        mensaje.textContent = "No hay usuarios registrados.";
        return;
    }

    // Verificar email y contraseña
    if (email === datosGuardados.email && password === datosGuardados.password) {
        mensaje.style.color = "#00ff00";
        mensaje.textContent = `Inicio de sesión exitoso. ¡Bienvenido ${datosGuardados.usuario}!`;

        setTimeout(() => {
            window.location.href = "index.html"; 
        }, 1500);
    } else {
        mensaje.style.color = "#f58300";
        mensaje.textContent = "Email o contraseña incorrectos.";
    }
}
