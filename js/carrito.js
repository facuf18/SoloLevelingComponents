let carritoDeComponentes = [];
let preciosComponentes = [];

function agregarAlCarrito(nuevoComponente) {
    carritoDeComponentes.push(nuevoComponente);
    preciosComponentes.push(nuevoComponente.precio);
    console.log(carritoDeComponentes);
    console.log(preciosComponentes);
    Swal.fire({
        position: 'center',
        title: 'Nuevo componente agregado',
        width: 400,
        text: nuevoComponente.tipo + " " + nuevoComponente.marca + " " + nuevoComponente.modelo,
        icon: 'success',
        showConfirmButton: false,
        timer: 650
    });
}

let precioTotal;

function calcularPrecioTotal() {
    precioTotal = 0;
    for (let i = 0; i < preciosComponentes.length; i++) {
        precioTotal += preciosComponentes[i];
    }
}

function mostrarCarrito() {
    $("td").remove();
    calcularPrecioTotal();
    for (const componente of carritoDeComponentes) {
        $("#tablaCarrito").append(`
            <tr><td>${componente.categoria}</td>
            <td>${componente.marca} ${componente.modelo}</td>
            <td>$${componente.precio}</td></tr>`);
    }
    $("#tablaPrecio").append(`
            <tr><td><b>TOTAL</b></td>
            <td></td>
            <td><b>$${precioTotal}</b></td></tr>`);
}

$("#btnReiniciarSeleccion").append("<button class='btn btn-outline-danger' id='reiniciar'>Reiniciar Selección</button>");

function reiniciarSeleccion() {
    carritoDeComponentes.length = 0;
    preciosComponentes.length = 0;
    $("#titulo").text("Selección de componentes");
    $("td, .botonInicial").remove();
    seleccionarMarca();
}

$("#reiniciar").click(function() {
    reiniciarSeleccion();
});