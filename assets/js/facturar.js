document.getElementById('btnAgregar').addEventListener('click', registrarF);
document.getElementById('cerrarSes').addEventListener('click', Cerrar);

function CrearF(id, articulo, cantidad, valorProducto, porcentajeIva) {
    this.id = id;
    this.articulo = articulo;
    this.cantidad = cantidad;
    this.valorProducto = valorProducto;
    this.porcentajeIva = porcentajeIva;
}
let vectorF = [
    { id: 1, articulo: "Coca Cola Zero", cantidad: "4", valorProducto: "4000", porcentajeIva: "19" },
    { id: 2, articulo: "Arroz Roa", cantidad: "8", valorProducto: "2000", porcentajeIva: "19" },
    { id: 3, articulo: "Chocolatina Jumbo", cantidad: "5", valorProducto: "2500", porcentajeIva: "19" },
    { id: 4, articulo: "Jugo Hit", cantidad: "2", valorProducto: "3000", porcentajeIva: "19" },
    { id: 5, articulo: "Lenteja", cantidad: "10", valorProducto: "1500", porcentajeIva: "19" },
];

function obtenerArticulo() {
    let articulo = document.getElementById('articulo').value;
    return articulo;
}

function obtenerCantidad() {
    let cantidad = document.getElementById('productoCan').value;
    return cantidad;
}

function obtenerValor() {
    let valorProducto = document.getElementById('precioIva').value;
    return valorProducto;
}

function obtenerPorcentaje() {
    let porcentajeIva = document.getElementById('porcentajeIva').value;
    return porcentajeIva;
}

function registrarF() {
    let Fact = new CrearF(vectorF.length + 1, obtenerArticulo(), obtenerCantidad(), obtenerValor(), obtenerPorcentaje(), 0);
    vectorF.push(Fact);
    localStorage.setItem('datosFact', JSON.stringify(vectorF));
    document.getElementById('articulo').value = "";
    document.getElementById('productoCan').value = "";
    document.getElementById('precioIva').value = "";
    document.getElementById('porcentajeIva').value = "";
}

function Cerrar() {
    alert('Cerrando su sesion...');
    window.location = "../index.html";
}