let carritoDeComponentes = [];

function agregarAlCarrito(nuevoComponente) {
    carritoDeComponentes.push(nuevoComponente);
    console.log(carritoDeComponentes);
    Swal.fire(
        'Nuevo componente agregado',
        nuevoComponente.tipo + " " + nuevoComponente.marca + " " + nuevoComponente.modelo,
        'success'
    );
    localStorage.setItem("miPC", JSON.stringify(carritoDeComponentes));
}

function mostrarCarrito() {
    $("td").remove();
    for (const componente of carritoDeComponentes) {
        $("#tablaCarrito").append(`
            <tr><td>${componente.tipo}</td>
            <td>${componente.marca} ${componente.modelo}</td>
            <td>$${componente.precio}</td></tr>`);
    }
}