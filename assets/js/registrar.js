document.getElementById('enviarDatosRegistro').addEventListener('click', Registar);
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

function Persona(id, usuarioFac, passwordFac) {
    this.id = id;
    this.usuarioFac = usuarioFac;
    this.passwordFac = passwordFac;
}

let vectorPersonas = [];

function obtenerUsuaro() {
    let obtenerU = document.getElementById("NewUsuario").value;
    return obtenerU;
}

function obtenerPassword() {
    let obtenerP = document.getElementById("NewContraseña").value;
    return obtenerP;
}

function mostrarListado() {
    let lista = '';
    for (let i = 0; i < vectorPersonas.length; i++) {
        lista += 'id: ' + vectorPersonas[i].id +
            ' User: ' + vectorPersonas[i].usuarioFac +
            ' Password: ' + vectorPersonas[i].passwordFac + '\n';
    }
    document.getElementById('listado').innerText = lista;
}

function Registar() {
    let per = new Persona(vectorPersonas.length + 1, obtenerUsuaro(), obtenerPassword(), 0);
    vectorPersonas.push(per);
    localStorage.setItem('datos', JSON.stringify(vectorPersonas));
    mostrarListado();
}