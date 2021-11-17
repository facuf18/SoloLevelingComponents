$(document).ready(function() {
    seleccionarMarca();
});

function seleccionarMarca() {
    localStorage.clear();
    $("#seleccionProcesador, #seleccionMotherboard, #seleccionRam, #btnFinalizarSeleccion, h4").remove();
    $("#comienzoSeleccion").append(`
    <div class="col-lg-6 text-center">
        <input type="image" src="../img/amd.png" id="btnSeleccionarAmd">
    </div>
    <div class="col-lg-6 text-center">
        <input type="image" src="../img/intel.png" id="btnSeleccionarIntel">
    </div>`);
    $("#btnSeleccionarAmd").click(function() {
        seleccionarAmd();
    });
    $("#btnSeleccionarIntel").click(function() {
        seleccionarIntel();
    });
}

function seleccionarAmd() {
    $("#btnSeleccionarAmd, #btnSeleccionarIntel").remove();
    $("#botonCarrito").append("<button class='btn btn-danger'>Ver carrito</button>");
    $(".tituloLista").append("<h4 class='pb-3'>Procesador</h4>");

    const URLJSON = "../data/procesadoresAmd.json"

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let procesadoresAmd = respuesta;
            for (const procesador of procesadoresAmd) {

                $("#listaComponentes").append(`<div class="card me-3 col-sm-3" id="seleccionProcesador">
                <img src="${procesador.imagen}" class="card-img-top" alt="imgProces">
                <div class="card-body text-center">
                    <p class="card-title"><b>${procesador.marca} ${procesador.modelo}</b></p>
                    <p class="card-text">$${procesador.precio}</p>
                    <button type="submit" id="btn${procesador.id}" class="btn btn-outline-danger">Agregar</button>
                </div>
                </div>`);

                $(`#btn${procesador.id}`).click(function() {
                    agregarAlCarrito(procesador);
                    selecMotherAmd();
                    mostrarCarrito();
                });
            }
        }
    });
}

function seleccionarIntel() {
    $("#btnSeleccionarAmd, #btnSeleccionarIntel").remove();
    $(".tituloLista").append("<h4 class='pb-3'>Procesador</h4>");

    const URLJSON = "../data/procesadoresIntel.json"

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let procesadoresIntel = respuesta;
            for (const procesador of procesadoresIntel) {

                $("#listaComponentes").append(`<div class="card me-3 col-sm-3" id="seleccionProcesador">
                <img src="${procesador.imagen}" class="card-img-top" alt="imgProces">
                <div class="card-body text-center">
                    <p class="card-title"><b>${procesador.marca} ${procesador.modelo}</b></p>
                    <p class="card-text">$${procesador.precio}</p>
                    <button type="submit" id="btn${procesador.id}" class="btn btn-outline-danger">Agregar</button>
                </div>
                </div>`);

                $(`#btn${procesador.id}`).click(function() {
                    agregarAlCarrito(procesador);
                    selecMotherIntel();
                    mostrarCarrito();
                });
            }
        }
    });
}

function selecMotherAmd() {
    $("#seleccionProcesador, h4").remove();
    $(".tituloLista").append("<h4 class='pb-3'>Motherboard</h4>");

    const URLJSON = "../data/motherboardsAmd.json"

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let motherboardsAmd = respuesta;
            for (const mother of motherboardsAmd) {

                $("#listaComponentes").append(`<div class="card me-3 col-sm-3" id="seleccionMotherboard">
                <img src="${mother.imagen}" class="card-img-top" alt="imgProces">
                <div class="card-body text-center">
                    <p class="card-title"><b>${mother.marca} ${mother.modelo}</b></p>
                    <p class="card-text">$${mother.precio}</p>
                    <button type="submit" id="btn${mother.id}" class="btn btn-outline-danger">Agregar</button>
                </div>
                </div>`);

                $(`#btn${mother.id}`).click(function() {
                    agregarAlCarrito(mother);
                    selecMemoriaRam();
                    mostrarCarrito();
                });
            }
        }
    });
}

function selecMotherIntel() {
    $("#seleccionProcesador, h4").remove();
    $(".tituloLista").append("<h4 class='pb-3'>Motherboard</h4>");

    const URLJSON = "../data/motherboardsIntel.json"

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let motherboardsIntel = respuesta;
            for (const mother of motherboardsIntel) {

                $("#listaComponentes").append(`<div class="card me-3 col-sm-3" id="seleccionMotherboard">
                <img src="${mother.imagen}" class="card-img-top" alt="imgProces">
                <div class="card-body text-center">
                    <p class="card-title"><b>${mother.marca} ${mother.modelo}</b></p>
                    <p class="card-text">$${mother.precio}</p>
                    <button type="submit" id="btn${mother.id}" class="btn btn-outline-danger">Agregar</button>
                </div>
                </div>`);

                $(`#btn${mother.id}`).click(function() {
                    agregarAlCarrito(mother);
                    selecMemoriaRam();
                    mostrarCarrito();
                });
            }
        }
    });
}

function selecMemoriaRam() {
    $("#seleccionMotherboard, h4").remove();
    $(".tituloLista").append("<h4 class='pb-3'>Memoria RAM</h4>");

    const URLJSON = "../data/memoriasRam.json"

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let memoriasRam = respuesta;
            for (const memoria of memoriasRam) {

                $("#listaComponentes").append(`<div class="card me-3 mt-3 col-sm-3" id="seleccionRam">
                <img src="${memoria.imagen}" class="card-img-top" alt="imgProces">
                <div class="card-body text-center">
                    <p class="card-title"><b>${memoria.marca} ${memoria.modelo}</b></p>
                    <p class="card-text">$${memoria.precio}</p>
                    <div class="d-flex align-items-center justify-content-center">
                        <input type="number" min="1" name="cantidad" value="1" class="inputCantidad me-2" id="inputCantidad${memoria.id}">
                        <button type="submit" id="btn${memoria.id}" class="btn btn-outline-danger">Agregar</button>
                    </div>
                </div>
                </div>`);

                $(`#btn${memoria.id}`).click(function() {
                    let cantidadDeRams = $(`#inputCantidad${memoria.id}`).val();
                    for (let i = 0; i < cantidadDeRams; i++) {
                        agregarAlCarrito(memoria);
                        mostrarCarrito();
                    }
                    finalizarSeleccion();
                });
            }
        }
    });
}

function finalizarSeleccion() {
    $("#seleccionRam, h4, h5").remove();
    $("#titulo").text("Componentes seleccionados");
    $("#finalizarSeleccion").append("<button type='submit' class='btn btn-danger ms-2' id='btnFinalizarSeleccion'>Finalizar Selección</button>");
}

$("#finalizarSeleccion").click(function() {
    Swal.fire({
        icon: 'success',
        title: 'La selección de componentes fue completada correctamente!',
        showConfirmButton: false,
        timer: 3000
    });
});