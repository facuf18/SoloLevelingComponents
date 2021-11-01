let seleccionarAmd = document.getElementById("botonSeleccionarAmd");
let seleccionarIntel = document.getElementById("botonSeleccionarIntel");
seleccionarAmd.addEventListener("click", seleccionAmd);
seleccionarIntel.addEventListener("click", seleccionIntel);

function seleccionAmd() {
    seleccionarIntel.parentNode.removeChild(seleccionarIntel);
    seleccionarAmd.parentNode.removeChild(seleccionarAmd);

    $(".tituloLista").append("<h5>Elige el procesador:</h5>");
    for (const procesador of procesadoresAMD) {
        $("#listaComponentes").append(`<li class="list-group-item text-center border">
        <img src=${procesador.imagen} width="300" height="300">
        <p><b> ${procesador.marca} ${procesador.modelo}</b></p>
        <p> $${procesador.precio}</p>
        <input type="submit" value="Agregar" name="${procesador.id}" class="btn btn-outline-danger" id="botonProcesadorSeleccionado"></li>`);
    }
}

function seleccionIntel() {
    seleccionarIntel.parentNode.removeChild(seleccionarIntel);
    seleccionarAmd.parentNode.removeChild(seleccionarAmd);

    $(".tituloLista").append("<h5>Elige el procesador:</h5>");
    for (const procesador of procesadoresIntel) {
        $("#listaComponentes").append(`<li class="list-group-item text-center border">
        <img src=${procesador.imagen} width="300" height="300">
        <p><b> ${procesador.marca} ${procesador.modelo}</b></p>
        <p> $${procesador.precio}</p>
        <input type="submit" value="Agregar" name="${procesador.id}" class="btn btn-outline-danger" id="botonProcesadorSeleccionado"></li>`);
    }
}

let procesadorSeleccionado = document.getElementById("botonProcesadorSeleccionado");
procesadorSeleccionado.addEventListener("click", agregarProcesador);