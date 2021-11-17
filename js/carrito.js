let carritoDeComponentes = [];
let preciosComponentes = [];

function agregarAlCarrito(nuevoComponente) {
    carritoDeComponentes.push(nuevoComponente);
    preciosComponentes.push(nuevoComponente.precio);
    console.log(carritoDeComponentes);
    console.log(preciosComponentes);
    Swal.fire(
        'Nuevo componente agregado',
        nuevoComponente.tipo + " " + nuevoComponente.marca + " " + nuevoComponente.modelo,
        'success'
    );
    sessionStorage.setItem("miPC", JSON.stringify(carritoDeComponentes));
}

let precioTotal;

function calcularPrecioTotal() {
    precioTotal = 0;
    for (let i = 0; i < preciosComponentes.length; i++) {
        precioTotal += preciosComponentes[i];
    }
    console.log(precioTotal);
}

function mostrarCarrito() {
    $("td").remove();
    calcularPrecioTotal();
    for (const componente of carritoDeComponentes) {
        $("#tablaCarrito").append(`
            <tr><td>${componente.tipo}</td>
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
    $("td").remove();
    seleccionarMarca();
}

$("#reiniciar").click(function() {
    reiniciarSeleccion();
});