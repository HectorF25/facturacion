function btnAgregar() {
    verctorPedidos = document.getElementById('producto');
    $("#btn-agregar").click(function() {
        facturador.registrar({
            numero: $("#numeroF").val(),
            fecha: $("#fecha").val(),
            nombreE: $("#nombreE").val(),
            direccionE: $("#direccionE").val(),
            nombreC: $("nombreC").val(),
            direccionC: $("direccionC").val(),
            valorP: $("valorP").val(),
            producto: $("#producto").val(),
            cantidad: $("#cantidad").val(),
            precio: $("#precio").val(),
        });
        $("#numeroF").val('');
        $("#fecha").val('');
        $("#nombreE").val('');
        $("#direccionE").val('');
        $("#nombreC").val('');
        $("#direccionC").val('');
        $("#valorP").val('');
        $("#producto").val('');
        $("#cantidad").val('');
        $("#precio").val('');

    })
}