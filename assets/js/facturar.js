document.getElementById('btnAgregar').addEventListener('click', registrarF);
document.getElementById('cerrarSes').addEventListener('click', Cerrar);

function CrearF(id, nombreEmpresa, fecha, nombreE, direccionE, nombreC, direccionC, producto, cantidad, valorProducto) {
    this.id = id;
    this.nombreEmpresa = nombreEmpresa;
    this.fecha = fecha;
    this.nombreE = nombreE;
    this.direccionE = direccionE;
    this.nombreC = nombreC;
    this.direccionC = direccionC;
    this.producto = producto;
    this.cantidad = cantidad;
    this.valorProducto = valorProducto;
}
let vectorF = [
    { id: 1, nombreEmpresa: "Coca Cola", fecha: "2021-05-22T22:18", nombreE: "Roberto Rodriguez", direccionE: "Cra 7 #60-24", nombreC: "Juan Lopez", direccionC: "Cra 7 #60-24", producto: "Coca Cola Zero", cantidad: "4", valorProducto: "4000" },
    { id: 2, nombreEmpresa: "Pepsi", fecha: "2021-05-22T22:18", nombreE: "Manuel Pedroza", direccionE: "Cra 7 #30-2", nombreC: "Karen Torres", direccionC: "Cra 7 #60-24", producto: "Pepsi 2L", cantidad: "3", valorProducto: "3500" },
    { id: 3, nombreEmpresa: "Roa", fecha: "2021-05-22T22:18", nombreE: "Pepe Montes", direccionE: "Cra 11 #61-4", nombreC: "Rosa Monroy", direccionC: "Cra 7 #60-24", producto: "Arroz 1Lib", cantidad: "12", valorProducto: "2000" },
    { id: 4, nombreEmpresa: "Bimbo", fecha: "2021-05-22T22:18", nombreE: "Juan Leon", direccionE: "Cra 10 #54-12", nombreC: "Carla Gil", direccionC: "Cra 7 #60-24", producto: "Pan Bimbo", cantidad: "2", valorProducto: "2500" },
    { id: 5, nombreEmpresa: "Jet", fecha: "2021-05-22T22:18", nombreE: "Pepito Escobar", direccionE: "Cra 6 #23-12", nombreC: "Andrea Lopez", direccionC: "Cra 7 #60-24", producto: "Chocolatina Jet", cantidad: "5", valorProducto: "500" },
];
localStorage.setItem('datosFact', JSON.stringify(vectorF));

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
    let producto = document.getElementById('producto').value;
    return producto;
}

function obtenerCantidad() {
    let cantidad = document.getElementById('productoCan').value;
    return cantidad;
}

function obtenerValor() {
    let valorProducto = document.getElementById('valorP').value;
    return valorProducto;
}

function registrarF() {
    let Fact = new CrearF(vectorF.length + 1, obtenerNombreEmpresa(), obtenerFecha(), obtenerNombreEmisor(), obtenerDireccionEmisor(), obtenerNombreCliente(), obtenerDireccionCliente(), obtenerProducto(), obtenerValor(), 0);
    vectorF.push(Fact);
    localStorage.setItem('datosFact', JSON.stringify(vectorF));
    document.getElementById('nombreEmpresa').value = "";
    document.getElementById('fecha').value = "";
    document.getElementById('nombreE').value = "";
    document.getElementById('direccionE').value = "";
    document.getElementById('nombreC').value = "";
    document.getElementById('direccionC').value = "";
    document.getElementById('producto').value = "";
    document.getElementById('productoCan').value = "";
    document.getElementById('valorP').value = "";
}

function Cerrar() {
    alert('Cerrando su sesion...');
    window.location = "../index.html";
}