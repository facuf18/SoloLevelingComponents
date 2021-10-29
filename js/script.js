alert("¡Bienvenido a Solo Leveling Components!\n\nProcederemos con la selección de los componentes...");
let elecUsuario = parseInt(prompt("Como primer paso, seleccione la marca del procesador(1 o 2):\n1. AMD\n2. INTEL"));
let eleccionMarcaProc;

function seleccionarProc(selecMarca) {
    if (selecMarca == 1) {
        eleccionMarcaProc = 1;
    } else if (selecMarca == 2) {
        eleccionMarcaProc = 2;
    } else {
        alert("No es una opción válida.");
    }
}

seleccionarProc(elecUsuario);

const componentesElegidos = [];

if (eleccionMarcaProc == 1) {
    let selecModelo = parseInt(prompt("Seleccione el modelo del procesador:\n1. AMD Ryzen 5 5600X\n2. AMD Ryzen 7 5800X\n3. AMD Ryzen 9 5900X"));
    if (selecModelo == 1) {
        componentesElegidos.push(procAmd5);
    } else if (selecModelo == 2) {
        componentesElegidos.push(procAmd7);
    } else if (selecModelo == 3) {
        componentesElegidos.push(procAmd9);
    }

    let selecMotherboard = parseInt(prompt("Seleccione la motherboard:\n1. GIGABYTE A520M DS3H AM4\n2. GIGABYTE B550M H AM4\n3. GIGABYTE X570 UD AM4"));
    if (selecMotherboard == 1) {
        componentesElegidos.push(motherAmd1);
    } else if (selecMotherboard == 2) {
        componentesElegidos.push(motherAmd2);
    } else if (selecMotherboard == 3) {
        componentesElegidos.push(motherAmd3);
    }
} else if (eleccionMarcaProc == 2) {
    let selecModelo = parseInt(prompt("Seleccione el modelo del procesador:\n1. Intel Core i5 10600K\n2. Intel Core i7 10700KF\n3. Intel Core i9 10900KF"));
    if (selecModelo == 1) {
        componentesElegidos.push(procIntel5);
    } else if (selecModelo == 2) {
        componentesElegidos.push(procIntel7);
    } else if (selecModelo == 3) {
        componentesElegidos.push(procIntel9);
    }

    let selecMotherboard = parseInt(prompt("Seleccione la motherboard:\n1. ASUS PRIME B460M-A\n2. ASUS PRIME B560M-A\n3. ASUS PRIME Z590-P"));
    if (selecMotherboard == 1) {
        componentesElegidos.push(motherIntel1);
    } else if (selecMotherboard == 2) {
        componentesElegidos.push(motherIntel2);
    } else if (selecMotherboard == 3) {
        componentesElegidos.push(motherIntel3);
    }
}

let titulo = document.getElementById("titulo");
titulo.innerText = "Componentes elegidos:";

let parrafo = document.getElementById("parrafo");
parrafo.parentNode.removeChild(parrafo);
let boton = document.getElementById("boton");
boton.parentNode.removeChild(boton);

let tabla = document.createElement("table");
tabla.setAttribute("class", "table table-stripped");
let tablaBody = document.createElement("tBody");

let filaTitulo = document.createElement("tr");
filaTitulo.innerHTML = `<td><b> Componente </b></td>
<td><b> Marca </b></td>
<td><b> Modelo </b></td>
<td><b> Precio</b></td>`;
tablaBody.appendChild(filaTitulo);

for (const componente of componentesElegidos) {
    let filaBody = document.createElement("tr");
    filaBody.innerHTML = `<td> ${componente.tipo}</td>
    <td> ${componente.marca}</td>
    <td> ${componente.modelo}</td>
    <td>$ ${componente.precio}</td>`;
    tablaBody.appendChild(filaBody);
}

tabla.appendChild(tablaBody);
document.getElementById("tablaComponentes").appendChild(tabla);