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
    localStorage.setItem("miPC", JSON.stringify(carritoDeComponentes));
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