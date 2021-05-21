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
    const usuario = document.getElementById('NewUsuario').value;
    const password = document.getElementById('NewContraseña').value;
    if (usuario.length == 0 && password.length < 6) {
        alertaU.innerHTML = "No has escrito nada en el Usurario y la Contraseña";
        document.getElementById('alertaU').style.color = '#EF3B3A';
    } else if (usuario.length == 0) {
        alertaUser.innerHTML = "No has escrito nada en el Usurario";
        document.getElementById('alertaUser').style.color = '#EF3B3A';
    } else {
        let per = new Persona(vectorPersonas.length + 1, obtenerUsuaro(), obtenerPassword(), 0);
        vectorPersonas.push(per);
        localStorage.setItem('datos', JSON.stringify(vectorPersonas));
        mostrarListado();
        alert('Usuario registrado correctamente');
        window.location = "../index.html";
    }
}

function mostrarPassword() {
    var cambio = document.getElementById("NewContraseña");
    if (cambio.type == "password") {
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    } else {
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
}
$(document).ready(function() {
    $('#ShowPassword').click(function() {
        $('#password').attr('type', $(this).is(':checked') ? 'text' : 'password');
    });
});