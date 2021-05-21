document.getElementById('enviarDatos').addEventListener('click', Registar);
export const vectorUsuarios = [];
export const vectorPassword = [];

let pass = document.getElementById('NewContraseña');

pass.oninput = function() {
    let password = document.getElementById('NewContraseña');
    regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$%*&\-\_])[A-Za-z\d$@$%*&\-\_]{8,16}$/;
    if (regex.test(password.value)) {
        validar.innerHTML = "Contraseña Valida";
        document.getElementById('validar').style.color = '#12c01b';
    } else {
        validar.innerHTML = "Contraseña invalida";
        document.getElementById('validar').style.color = '#EF3B3A';
    }
}

function Registar() {
    for (i = 0; i < 1; i++) {
        vectorUsuarios[i] = document.getElementById('NewUsuario');
        vectorPassword[i] = document.getElementById('NewContraseña');
    }
}