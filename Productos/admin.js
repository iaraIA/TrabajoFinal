document.addEventListener("DOMContentLoaded", function() {
  // Obtener referencia al botón de inicio de sesión del administrador
  const btnAdminLogin = document.querySelector("#btn-admin-login");

  // Agregar un controlador de eventos clic al botón
  btnAdminLogin.addEventListener("click", function(event) {
    event.preventDefault();

    // Obtener los credenciales de inicio de sesión del administrador
    const username = prompt("Nombre de usuario:");
    const password = prompt("Contraseña:");

    // Enviar una solicitud POST al servidor para verificar los credenciales
    fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        // Almacenar el token JWT en el almacenamiento local del navegador
        localStorage.setItem("adminToken", data.token);

        // Redirigir al usuario a la página de administración
        window.location.href = "./App";
      } else {
        // Mostrar un mensaje de error
        alert("Nombre de usuario o contraseña incorrectos");
      }
    })
    .catch(error => {
      console.error(error);
      alert("Ocurrió un error al iniciar sesión");
    });
  });
});
