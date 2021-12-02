$(document).ready(function() {
    seleccionarMarca();
});

const URLJSON = "../data/componentes.json";

let marcaSeleccionada = 0,
    cantidadDeRams = 0,
    cantidadHDD = 0,
    cantidadSSD = 0,
    cantidadGraficas = 0;

function seleccionarMarca() {
    localStorage.clear();
    $("#seleccionProcesador, #seleccionMotherboard, #seleccionRam, #seleccionHDD, #seleccionSSD, #seleccionGrafica, #seleccionFuente, #seleccionGabinete, #btnFinalizarSeleccion, h4").remove();
    $("#comienzoSeleccion").append(`
    <div class="col-lg-6 text-center botonInicial">
        <input type="image" src="../img/amd.png" id="btnSeleccionarAmd">
    </div>
    <div class="col-lg-6 text-center botonInicial">
        <input type="image" src="../img/intel.png" id="btnSeleccionarIntel">
    </div>`);
    $("#comienzoSeleccion").fadeIn();
    $("#btnSeleccionarAmd").click(function() {
        marcaSeleccionada = "amd";
        seleccionarAmd();
        return marcaSeleccionada;
    });
    $("#btnSeleccionarIntel").click(function() {
        marcaSeleccionada = "intel";
        seleccionarIntel();
        return marcaSeleccionada;
    });
}

function seleccionarAmd() {
    $("#btnSeleccionarAmd, #btnSeleccionarIntel").remove();
    $("#botonCarrito").append("<button class='btn btn-danger'>Ver carrito</button>");
    $(".tituloLista").append("<h4 class='pb-3'>Procesador</h4>");
    $(".botonesLista").append(`
    <div class="btn-group" role="group">
        <button type="button" class="btn btn-outline-danger botonLista" id="botonAtras">Atras</button>
        <button type="button" class="btn btn-outline-danger botonLista" id="botonSiguiente" disabled>Siguiente</button>
    </div>`);

    $("#botonAtras").click(function() {
        $(".botonLista").remove();
        seleccionarMarca();
    });

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let componentes = respuesta;
            let procesadoresAmd = componentes.filter(comp => comp.tipo == "ProcesadorAmd");
            for (const procesador of procesadoresAmd) {
                $("#listaComponentes").append(`<div class="card me-3 mt-3 col-sm-3" id="seleccionProcesador">
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
    $(".botonesLista").append(`
    <div class="btn-group" role="group">
        <button type="button" class="btn btn-outline-danger botonLista" id="botonAtras">Atras</button>
        <button type="button" class="btn btn-outline-danger botonLista" id="botonSiguiente" disabled>Siguiente</button>
    </div>`);

    $("#botonAtras").click(function() {
        $(".botonLista").remove();
        seleccionarMarca();
    });

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let componentes = respuesta;
            let procesadoresIntel = componentes.filter(comp => comp.tipo == "ProcesadorIntel");
            for (const procesador of procesadoresIntel) {
                $("#listaComponentes").append(`<div class="card me-3 mt-3 col-sm-3" id="seleccionProcesador">
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
    $("#seleccionProcesador, h4, .botonLista").remove();
    $(".tituloLista").append("<h4 class='pb-3'>Motherboard</h4>");
    $(".botonesLista").append(`
    <div class="btn-group" role="group">
        <button type="button" class="btn btn-outline-danger botonLista" id="botonAtras">Atras</button>
        <button type="button" class="btn btn-outline-danger botonLista" id="botonSiguiente" disabled>Siguiente</button>
    </div>`);

    $("#botonAtras").click(function() {
        $("#seleccionMotherboard, h4, .botonLista").remove();
        carritoDeComponentes.pop();
        preciosComponentes.pop();
        seleccionarAmd();
        mostrarCarrito();
        return carritoDeComponentes, preciosComponentes;
    });

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let componentes = respuesta;
            let motherboardsAmd = componentes.filter(comp => comp.tipo == "MotherboardAmd");
            for (const mother of motherboardsAmd) {
                $("#listaComponentes").append(`<div class="card me-3 mt-3 col-sm-3" id="seleccionMotherboard">
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

    $("#botonAtras").click(function() {
        $("#seleccionMotherboard, h4, .botonLista").remove();
        carritoDeComponentes.pop();
        preciosComponentes.pop();
        mostrarCarrito();
        seleccionarIntel();
        return carritoDeComponentes, preciosComponentes;
    });

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let componentes = respuesta;
            let motherboardsIntel = componentes.filter(comp => comp.tipo == "MotherboardIntel");
            for (const mother of motherboardsIntel) {
                $("#listaComponentes").append(`<div class="card me-3 mt-3 col-sm-3" id="seleccionMotherboard">
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
    $("#seleccionMotherboard, h4, .botonLista").remove();
    $(".tituloLista").append("<h4 class='pb-3'>Memoria RAM</h4>");
    $(".botonesLista").append(`
    <div class="btn-group" role="group">
        <button type="button" class="btn btn-outline-danger botonLista" id="botonAtras">Atras</button>
        <button type="button" class="btn btn-outline-danger botonLista" id="botonSiguiente" disabled>Siguiente</button>
    </div>`);

    $("#botonAtras").click(function() {
        $("#seleccionRam, h4, .botonLista").remove();
        carritoDeComponentes.pop();
        preciosComponentes.pop();
        if (marcaSeleccionada === "amd"){
            selecMotherAmd();
        } else selecMotherIntel();
        mostrarCarrito();
        return carritoDeComponentes, preciosComponentes;
    });

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let componentes = respuesta;
            let memoriasRam = componentes.filter(comp => comp.tipo == "MemoriaRam");
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
                    cantidadDeRams = $(`#inputCantidad${memoria.id}`).val();
                    if ((cantidadDeRams > 0) && (cantidadDeRams < 5)) {
                        for (let i = 0; i < cantidadDeRams; i++) {
                            agregarAlCarrito(memoria);
                            mostrarCarrito();
                        }
                        selecHDD();
                    } else {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Ingrese un valor entre 1 y 4.',
                            icon: 'error',
                            confirmButtonText: 'Aceptar'
                        });
                    }
                });
            }
        }
    });
}

function selecHDD() {
    $("#seleccionRam, h4, .botonLista").remove();
    $(".tituloLista").append("<h4 class='pb-3'>Disco Duro</h4>");
    $(".botonesLista").append(`
    <div class="btn-group" role="group">
        <button type="button" class="btn btn-outline-danger botonLista" id="botonAtras">Atras</button>
        <button type="button" class="btn btn-outline-danger botonLista" id="botonSiguiente">Siguiente</button>
    </div>`);

    $("#botonAtras").click(function() {
        $("#seleccionHDD, h4, .botonLista").remove();
        for (let i = 0; i < cantidadDeRams; i++){
            i*carritoDeComponentes.pop();
            i*preciosComponentes.pop();
        }
        selecMemoriaRam();
        mostrarCarrito();
        return carritoDeComponentes, preciosComponentes;
    });
    $("#botonSiguiente").click(function(){
        cantidadHDD = 0;
        selecSSD();
        return cantidadHDD;
    });

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let componentes = respuesta;
            let discosHDD = componentes.filter(comp => comp.tipo == "DiscoHDD");
            for (const disco of discosHDD) {
                $("#listaComponentes").append(`<div class="card me-3 mt-3 col-sm-3" id="seleccionHDD">
                <img src="${disco.imagen}" class="card-img-top" alt="imgProces">
                <div class="card-body text-center">
                    <p class="card-title"><b>${disco.marca} ${disco.modelo}</b></p>
                    <p class="card-text">$${disco.precio}</p>
                <div class="d-flex align-items-center justify-content-center">
                    <input type="number" min="1" name="cantidad" value="1" class="inputCantidad me-2" id="inputCantidad${disco.id}">
                    <button type="submit" id="btn${disco.id}" class="btn btn-outline-danger">Agregar</button>
                </div>
                </div>
                </div>`);

                $(`#btn${disco.id}`).click(function() {
                    cantidadHDD = $(`#inputCantidad${disco.id}`).val();
                    if ((cantidadHDD > 0) && (cantidadHDD < 5)) {
                        for (let i = 0; i < cantidadHDD; i++) {
                            agregarAlCarrito(disco);
                            mostrarCarrito();
                        }
                        selecSSD();
                    } else {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Ingrese un valor entre 1 y 4.',
                            icon: 'error',
                            confirmButtonText: 'Aceptar'
                        });
                    }
                });
            }
        }
    });
}

function selecSSD() {
    $("#seleccionHDD, h4, .botonLista").remove();
    $(".tituloLista").append("<h4 class='pb-3'>Disco SSD</h4>");
    $(".botonesLista").append(`
    <div class="btn-group" role="group">
        <button type="button" class="btn btn-outline-danger botonLista" id="botonAtras">Atras</button>
        <button type="button" class="btn btn-outline-danger botonLista" id="botonSiguiente">Siguiente</button>
    </div>`);

    $("#botonAtras").click(function() {
        $("#seleccionSSD, h4, .botonLista").remove();
        if (cantidadHDD !== 0){
            for (let i = 0; i < cantidadHDD; i++){
                i*carritoDeComponentes.pop();
                i*preciosComponentes.pop();
            }
        }
        selecHDD();
        mostrarCarrito();
        return carritoDeComponentes, preciosComponentes;
    });
    $("#botonSiguiente").click(function(){
        if (cantidadHDD == 0){
            Swal.fire({
                title: 'Atención!',
                text: 'Debe agregar, por lo menos, un tipo de almacenamiento (HDD o SSD).',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        } else {
            cantidadSSD = 0;
            selecGrafica();
            return cantidadSSD;
        }
    });

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let componentes = respuesta;
            let discosSSD = componentes.filter(comp => comp.tipo == "DiscoSSD");
            for (const disco of discosSSD) {
                $("#listaComponentes").append(`<div class="card me-3 mt-3 col-sm-3" id="seleccionSSD">
                <img src="${disco.imagen}" class="card-img-top" alt="imgProces">
                <div class="card-body text-center">
                    <p class="card-title"><b>${disco.marca} ${disco.modelo}</b></p>
                    <p class="card-text">$${disco.precio}</p>
                <div class="d-flex align-items-center justify-content-center">
                    <input type="number" min="1" name="cantidad" value="1" class="inputCantidad me-2" id="inputCantidad${disco.id}">
                    <button type="submit" id="btn${disco.id}" class="btn btn-outline-danger">Agregar</button>
                </div>
                </div>
                </div>`);

                $(`#btn${disco.id}`).click(function() {
                    let cantidadSSD = $(`#inputCantidad${disco.id}`).val();
                    if ((cantidadSSD > 0) && (cantidadSSD < 5)) {
                        for (let i = 0; i < cantidadSSD; i++) {
                            agregarAlCarrito(disco);
                            mostrarCarrito();
                        }
                        selecGrafica();
                    } else {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Ingrese un valor entre 1 y 4.',
                            icon: 'error',
                            confirmButtonText: 'Aceptar'
                        });
                    }
                });
            }
        }
    });
}

function selecGrafica() {
    $("#seleccionSSD, h4, .botonLista").remove();
    $(".tituloLista").append("<h4 class='pb-3'>Placa de Video</h4>");
    $(".botonesLista").append(`
    <div class="btn-group" role="group">
        <button type="button" class="btn btn-outline-danger botonLista" id="botonAtras">Atras</button>
        <button type="button" class="btn btn-outline-danger botonLista" id="botonSiguiente">Siguiente</button>
    </div>`);

    $("#botonAtras").click(function() {
        $("#seleccionGrafica, h4, .botonLista").remove();
        if (cantidadSSD !== 0){
            for (let i = 0; i < cantidadSSD; i++){
                i*carritoDeComponentes.pop();
                i*preciosComponentes.pop();
            }
        }
        selecSSD();
        mostrarCarrito();
        return carritoDeComponentes, preciosComponentes;
    });
    $("#botonSiguiente").click(function(){
        cantidadGraficas = 0;
        selecFuente();
        return cantidadGraficas;
    });


    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let componentes = respuesta;
            let graficas = componentes.filter(comp => comp.tipo == "PlacaDeVideo");
            for (const grafica of graficas) {
                $("#listaComponentes").append(`<div class="card me-3 mt-3 col-sm-3" id="seleccionGrafica">
                <img src="${grafica.imagen}" class="card-img-top" alt="imgProces">
                <div class="card-body text-center">
                    <p class="card-title"><b>${grafica.marca} ${grafica.modelo}</b></p>
                    <p class="card-text">$${grafica.precio}</p>
                <div class="d-flex align-items-center justify-content-center">
                    <input type="number" min="1" name="cantidad" value="1" class="inputCantidad me-2" id="inputCantidad${grafica.id}">
                    <button type="submit" id="btn${grafica.id}" class="btn btn-outline-danger">Agregar</button>
                </div>
                </div>
                </div>`);

                $(`#btn${grafica.id}`).click(function() {
                    cantidadGraficas = $(`#inputCantidad${grafica.id}`).val();
                    if ((cantidadGraficas > 0) && (cantidadGraficas < 3)) {
                        for (let i = 0; i < cantidadGraficas; i++) {
                            agregarAlCarrito(grafica);
                            selecFuente();
                            mostrarCarrito();
                        }
                    } else {
                        Swal.fire({
                            title: 'Error!',
                            text: 'La cantidad máxima de placas a seleccionar es 2.',
                            icon: 'error',
                            confirmButtonText: 'Cool'
                        });
                    }
                });
            }
        }
    });
}

function selecFuente() {
    $("#seleccionGrafica, h4, .botonLista").remove();
    $(".tituloLista").append("<h4 class='pb-3'>Fuente</h4>");
    $(".botonesLista").append(`
    <div class="btn-group" role="group">
        <button type="button" class="btn btn-outline-danger botonLista" id="botonAtras">Atras</button>
        <button type="button" class="btn btn-outline-danger botonLista" id="botonSiguiente" disabled>Siguiente</button>
    </div>`);

    $("#botonAtras").click(function() {
        $("#seleccionFuente, h4, .botonLista").remove();
        if (cantidadGraficas != 0){
            for (let i = 0; i < cantidadGraficas; i++){
                i*carritoDeComponentes.pop();
                i*preciosComponentes.pop();
            }
        }
        selecGrafica();
        mostrarCarrito();
        return carritoDeComponentes, preciosComponentes;
    });

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let componentes = respuesta;
            let fuentes = componentes.filter(comp => comp.tipo == "Fuente");
            for (const fuente of fuentes) {
                $("#listaComponentes").append(`<div class="card me-3 mt-3 col-sm-3" id="seleccionFuente">
                <img src="${fuente.imagen}" class="card-img-top" alt="imgProces">
                <div class="card-body text-center">
                    <p class="card-title"><b>${fuente.marca} ${fuente.modelo}</b></p>
                    <p class="card-text">$${fuente.precio}</p>
                    <button type="submit" id="btn${fuente.id}" class="btn btn-outline-danger">Agregar</button>
                </div>
                </div>`);

                $(`#btn${fuente.id}`).click(function() {
                    agregarAlCarrito(fuente);
                    selecGabinete();
                    mostrarCarrito();
                });
            }
        }
    });
}

function selecGabinete() {
    $("#seleccionFuente, h4, .botonLista").remove();
    $(".tituloLista").append("<h4 class='pb-3'>Gabinete</h4>");
    $(".botonesLista").append(`
    <div class="btn-group" role="group">
        <button type="button" class="btn btn-outline-danger botonLista" id="botonAtras">Atras</button>
        <button type="button" class="btn btn-outline-danger botonLista" id="botonSiguiente" disabled>Siguiente</button>
    </div>`);

    $("#botonAtras").click(function() {
        $("#seleccionGabinete, h4, .botonLista").remove();
        carritoDeComponentes.pop();
        preciosComponentes.pop();
        selecFuente();
        mostrarCarrito();
        return carritoDeComponentes, preciosComponentes;
    });

    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let componentes = respuesta;
            let gabinetes = componentes.filter(comp => comp.tipo == "Gabinete");
            for (const gabinete of gabinetes) {
                $("#listaComponentes").append(`<div class="card me-3 mt-3 col-sm-3" id="seleccionGabinete">
                <img src="${gabinete.imagen}" class="card-img-top" alt="imgProces">
                <div class="card-body text-center">
                    <p class="card-title"><b>${gabinete.marca} ${gabinete.modelo}</b></p>
                    <p class="card-text">$${gabinete.precio}</p>
                    <button type="submit" id="btn${gabinete.id}" class="btn btn-outline-danger">Agregar</button>
                </div>
                </div>`);

                $(`#btn${gabinete.id}`).click(function() {
                    agregarAlCarrito(gabinete);
                    mostrarCarrito();
                    finalizarSeleccion();
                });
            }
        }
    });
}

function finalizarSeleccion() {
    $("#seleccionGabinete, h4, h5, .botonLista").remove();
    $("#titulo").text("Componentes seleccionados");
    $("#finalizarSeleccion").append("<button type='submit' class='btn btn-danger ms-2' id='btnFinalizarSeleccion'>Finalizar Selección</button>");
    sessionStorage.setItem("miPC", JSON.stringify(carritoDeComponentes));
}

$("#finalizarSeleccion").click(function() {
    Swal.fire({
        icon: 'success',
        title: 'La selección de componentes fue completada correctamente!',
        text: 'El precio final es de $' + precioTotal,
        showConfirmButton: true,
    });
});