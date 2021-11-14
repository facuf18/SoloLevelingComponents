$(document).ready(function() {
    $("#btnSeleccionarAmd").click(function() {
        seleccionarAmd();
    });
    $("#btnSeleccionarIntel").click(function() {
        seleccionarIntel();
    });
});

function seleccionarAmd() {
    $("input").remove();
    $("#botonCarrito").append("<button class='btn btn-danger'>Ver carrito</button>");
    $(".tituloLista").append("<h5 class='pb-3'>Selecciona el microprocesador:</h5>");

    const URLJSON = "../data/procesadoresAmd.json"

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let procesadoresAmd = respuesta;
            for (const procesador of procesadoresAmd) {
                $("#listaComponentes").append(`<li class="m-2 col-sm-3 list-group-item text-center border">
                <img src=${procesador.imagen} class="imgComponentes">
                <p><b> ${procesador.marca} ${procesador.modelo}</b></p>
                <p> $${procesador.precio}</p>
                <button type="submit" id="btn${procesador.id}" class="btn btn-outline-danger">Agregar</button></li>`);

                $(`#btn${procesador.id}`).click(function() {
                    agregarAlCarrito(procesador);
                    selecMotherAmd();
                });
            }
        }
    });
}

function seleccionarIntel() {
    $("input").remove();
    $(".tituloLista").append("<h5 class='pb-3'>Selecciona el microprocesador:</h5>");

    const URLJSON = "../data/procesadoresIntel.json"

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let procesadoresIntel = respuesta;
            for (const procesador of procesadoresIntel) {
                $("#listaComponentes").append(`<li class="m-2 col-sm-3 list-group-item text-center border">
                <img src=${procesador.imagen} class="imgComponentes">
                <p><b> ${procesador.marca} ${procesador.modelo}</b></p>
                <p> $${procesador.precio}</p>
                <button type="submit" id="btn${procesador.id}" class="btn btn-outline-danger">Agregar</button></li>`);

                $(`#btn${procesador.id}`).click(function() {
                    agregarAlCarrito(procesador);
                    selecMotherIntel();
                });
            }
        }
    });
}

function selecMotherAmd() {
    $("li, h5").remove();
    $(".tituloLista").append("<h5 class='pb-3'>Selecciona la motherboard:</h5>");

    const URLJSON = "../data/motherboardsAmd.json"

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let motherboardsAmd = respuesta;
            for (const mother of motherboardsAmd) {
                $("#listaComponentes").append(`<li class="m-2 col-sm-3 list-group-item text-center border">
                <img src=${mother.imagen} class="imgComponentes">
                <p><b> ${mother.marca} ${mother.modelo}</b></p>
                <p> $${mother.precio}</p>
                <button type="submit" id="btn${mother.id}" class="btn btn-outline-danger">Agregar</button></li>`);

                $(`#btn${mother.id}`).click(function() {
                    agregarAlCarrito(mother);
                    selecMemoriaRam();
                });
            }
        }
    });
}

function selecMotherIntel() {
    $("li, h5").remove();
    $(".tituloLista").append("<h5 class='pb-3'>Selecciona la motherboard:</h5>");

    const URLJSON = "../data/motherboardsIntel.json"

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let motherboardsIntel = respuesta;
            for (const mother of motherboardsIntel) {
                $("#listaComponentes").append(`<li class="m-2 col-sm-3 list-group-item text-center border">
                <img src=${mother.imagen} class="imgComponentes">
                <p><b> ${mother.marca} ${mother.modelo}</b></p>
                <p> $${mother.precio}</p>
                <button type="submit" id="btn${mother.id}" class="btn btn-outline-danger">Agregar</button></li>`);

                $(`#btn${mother.id}`).click(function() {
                    agregarAlCarrito(mother);
                    selecMemoriaRam();
                });
            }
        }
    });
}

function selecMemoriaRam() {
    $("li, h5").remove();
    $(".tituloLista").append("<h5 class='pb-3'>Selecciona las memorias RAM:</h5>");

    const URLJSON = "../data/memoriasRam.json"

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let memoriasRam = respuesta;
            for (const memoria of memoriasRam) {
                $("#listaComponentes").append(`<li class="m-2 col-sm-3 list-group-item text-center border">
                <img src=${memoria.imagen} class="imgComponentes">
                <p><b> ${memoria.marca} ${memoria.modelo}</b></p>
                <p> $${memoria.precio}</p>
                <button type="submit" id="btn${memoria.id}" class="btn btn-outline-danger">Agregar</button></li>`);

                $(`#btn${memoria.id}`).click(function() {
                    agregarAlCarrito(memoria);
                });
            }
        }
    });
}

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