document.getElementById('enviarDatos').addEventListener('click', Registar);
let vectorUsuarios = [];

function Registar() {
    const password = document.getElementById('NewContraseña'),
        regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$%*&\-\_])[A-Za-z\d$@$%*&\-\_]{8,16}$/;

    if (regex.test(password.value)) {
        input.oninput = function() {
            validar.innerHTML = "";
        };
    }

}