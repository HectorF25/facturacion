$(document).ready(function() {
    $("#btn-agregar").click(function() {
        facturador.registrar({
            producto: $("#producto").val(),
            cantidad: $("#cantidad").val(),
            precio: $("#precio").val(),
        });
        $("#producto").val('');
        $("#precio").val('');
        $("#cantidad").val('');
    })
})
$(document).ready(function() {
    $('#myTable').DataTable();
});