document.getElementById('enviarDatos').addEventListener('click', Registar);

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

}