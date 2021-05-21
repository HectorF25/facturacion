document.getElementById('btnAgregar').addEventListener('click', registrarF);

function CrearF(id, nombreEmpresa, fecha, nombreE, direccionE, nombreC, direccionC, producto, valorProducto) {
    this.id = id;
    this.nombreEmpresa = nombreEmpresa;
    this.fecha = fecha;
    this.nombreE = nombreE;
    this.direccionE = direccionE;
    this.nombreC = nombreC;
    this.direccionC = direccionC;
    this.producto = producto;
    this.valorProducto = valorProducto;
}
let vectorF = [];

function obtenerNombreEmpresa() {
    let nombreEmpresa = document.getElementById('nombreEmpresa').value;
    return nombreEmpresa;
}

function obtenerFecha() {
    let fecha = document.getElementById('fecha').value;
    return fecha;
}

function obtenerNombreEmisor() {
    let nombreE = document.getElementById('nombreE').value;
    return nombreE;
}

function obtenerDireccionEmisor() {
    let direccionE = document.getElementById('direccionE').value;
    return direccionE;
}

function obtenerNombreCliente() {
    let nombreC = document.getElementById('nombreC').value;
    return nombreC;
}

function obtenerDireccionCliente() {
    let direccionC = document.getElementById('direccionC').value;
    return direccionC;
}

function obtenerProducto() {
    let valor2 = document.getElementById('producto').value;
    return valor2;
}

function obtenerValor() {
    let valor2 = document.getElementById('valorP').value;
    return valor2;
}

function mostrarListado() {
    let listaF = '';
    for (let i = 0; i < vectorF.length; i++) {
        listaF += 'Numero de Factura: ' + vectorF[i].id +
            ' Nombre Empresa: ' + vectorF[i].nombreEmpresa +
            ' Fecha de Emisión:' + vectorF[i].fecha +
            ' Nombre Empleado: ' + vectorF[i].nombreE +
            ' Direccion Empresa: ' + vectorF[i].direccionE +
            ' Direccion Cliente: ' + vectorF[i].nombreC +
            ' Direccion Cliente: ' + vectorF[i].direccionC +
            ' Producto: ' + vectorF[i].producto +
            ' valor Producto: ' + vectorF[i].valorProducto + '\n';
    }
    document.getElementById('listado').innerText = listaF;
}

function registrarF() {
    let Fact = new CrearF(vectorF.length + 1, obtenerNombreEmpresa(), obtenerFecha(), obtenerNombreEmisor(), obtenerDireccionEmisor(), obtenerNombreCliente(), obtenerDireccionCliente(), obtenerProducto(), obtenerValor(), 0);
    vectorF.push(Fact);
    localStorage.setItem('datos', JSON.stringify(vectorF));
    mostrarListado();
}