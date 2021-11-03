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
    $(".tituloLista").append("<h5>Selecciona el microprocesador:</h5>");
    for (const procesador of procesadoresAMD) {
        $("#listaComponentes").append(`<li class="list-group-item text-center border">
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

function seleccionarIntel() {
    $("input").remove();
    $(".tituloLista").append("<h5>Selecciona el microprocesador:</h5>");
    for (const procesador of procesadoresIntel) {
        $("#listaComponentes").append(`<li class="list-group-item text-center border">
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

function selecMotherAmd() {
    $("li, h5").remove();
    $(".tituloLista").append("<h5>Selecciona la motherboard:</h5>");
    for (const mother of motherboardsAmd) {
        $("#listaComponentes").append(`<li class="list-group-item text-center border">
        <img src=${mother.imagen} class="imgComponentes">
        <p><b> ${mother.marca} ${mother.modelo}</b></p>
        <p> $${mother.precio}</p>
        <button type="submit" id="btn${mother.id}" class="btn btn-outline-danger">Agregar</button></li>`);

        $(`#btn${mother.id}`).click(function() {
            agregarAlCarrito(mother);
        });
    }
}

function selecMotherIntel() {
    $("li, h5").remove();
    $(".tituloLista").append("<h5>Selecciona la motherboard:</h5>");
    for (const mother of motherboardsIntel) {
        $("#listaComponentes").append(`<li class="list-group-item text-center border">
        <img src=${mother.imagen} class="imgComponentes">
        <p><b> ${mother.marca} ${mother.modelo}</b></p>
        <p> $${mother.precio}</p>
        <button type="submit" id="btn${mother.id}" class="btn btn-outline-danger">Agregar</button></li>`);

        $(`#btn${mother.id}`).click(function() {
            agregarAlCarrito(mother);
        });
    }
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