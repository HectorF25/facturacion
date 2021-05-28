document.getElementById('cerrarSes').addEventListener('click', loginPage);

function loginPage() {
    const opcion = confirm("Usted sera redireccionado a la pagina de Login");

    if (opcion == true) {
        alert('Espere ');
        window.location = "../index.html";
    }
}