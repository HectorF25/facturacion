window.addEventListener('load', init, false);
document.getElementById('verFacturas').addEventListener('click', calculoIva);
document.getElementById('verFacturas').addEventListener('click', mostrarFacturas);
let guardadoFac = localStorage.getItem('datosFact');
guardadoFac = JSON.parse(guardadoFac);
console.log(guardadoFac)

function init() {
    let form = document.getElementById("facturasList");
    form.style.visibility = 'hidden';
    let boton = document.getElementById("verFacturas");
    boton.addEventListener('click', function(e) {
        if (form.style.visibility === 'hidden') {
            form.style.visibility = 'visible';
        } else {
            form.style.visibility = 'hidden';
        }
    }, false);
}

let precioSinIva = []
let subtotalCompra = []
let totalCompra = []

function calculoIva() {
    for (i = 0; i < guardadoFac.length; i++) {
        precioSinIva[i] = guardadoFac[i].valorProducto / 1.19;
        subtotalCompra[i] = precioSinIva[i] * guardadoFac[i].cantidad;
        totalCompra[i] = guardadoFac[i].valorProducto * guardadoFac[i].cantidad;
    }
}

function mostrarFacturas() {
    var listaFacturas = document.getElementById('tabla');
    let tablaContent = ``
    for (i = 0; i < guardadoFac.length; i++) {
        tablaContent += `
    <tr>
      <td>${guardadoFac[i].id}</td>
      <td>${guardadoFac[i].nombreEmpresa}</td>
      <td>${guardadoFac[i].fecha}</td>
      <td>${guardadoFac[i].nombreE}</td>
      <td>${guardadoFac[i].direccionE}</td>
      <td>${guardadoFac[i].nombreC}</td>
      <td>${guardadoFac[i].direccionC}</td>
      <td>${guardadoFac[i].producto}</td>
      <td>${guardadoFac[i].cantidad}</td>
      <td>${guardadoFac[i].valorProducto}</td>
      <td>${precioSinIva[i].toFixed(2)}</td>
      <td>${subtotalCompra[i].toFixed(2)}</td>
      <td>${totalCompra[i].toFixed(2)}</td>
    </td>
  
  `
    }
    listaFacturas.innerHTML += tablaContent
}