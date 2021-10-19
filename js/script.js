alert("¡Bienvenido a Solo Leveling Components!\n\nProcederemos con la selección de los componentes...");
let elecUsuario = parseInt(prompt("Como primer paso, seleccione la marca del procesador(1 o 2):\n1. AMD\n2. INTEL"));
let eleccionProc;

function seleccionarProc(selecMarca) {
    if (selecMarca == 1) {
        alert("Usted eligió la marca AMD para su procesador.");
        eleccionProc = 1;
    } else if (selecMarca == 2) {
        alert("Usted eligió la marca Intel para su procesador.");
        eleccionProc = 2;
    } else {
        alert("No es una opción válida.");
    }
}

seleccionarProc(elecUsuario);

class Procesador {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = parseFloat(precio);
    }
    elegir() {
        alert("Usted eligió el procesador " + this.marca + " " + this.modelo + " $" + this.precio);
    }
}

const procAmd5 = new Procesador("AMD", "Ryzen 5 5600X", 40300);
const procAmd7 = new Procesador("AMD", "Ryzen 7 5800X", 53500);
const procAmd9 = new Procesador("AMD", "Ryzen 9 5900X", 78940);

const procIntel5 = new Procesador("Intel", "Core i5 10600K", 32250);
const procIntel7 = new Procesador("Intel", "Core i7 10700KF", 48390);
const procIntel9 = new Procesador("Intel", "Core i9 10900KF", 70090);

const componentesElegidos = [];

if (eleccionProc == 1) {
    selecModelo = parseInt(prompt("Seleccione el modelo del procesador:\n1. AMD Ryzen 5 5600X\n2. AMD Ryzen 7 5800X\n3. AMD Ryzen 9 5900X"));
    if (selecModelo == 1) {
        procAmd5.elegir();
        componentesElegidos.push(procAmd5);
    } else if (selecModelo == 2) {
        procAmd7.elegir();
        componentesElegidos.push(procAmd7);
    } else if (selecModelo == 3) {
        procAmd9.elegir();
        componentesElegidos.push(procAmd9);
    }
} else if (eleccionProc == 2) {
    selecModelo = parseInt(prompt("Seleccione el modelo del procesador:\n1. Intel Core i5 10600K\n2. Intel Core i7 10700KF\n3. Intel Core i9 10900KF"));
    if (selecModelo == 1) {
        procIntel5.elegir();
        componentesElegidos.push(procIntel5);
    } else if (selecModelo == 2) {
        procIntel7.elegir();
        componentesElegidos.push(procIntel7);
    } else if (selecModelo == 3) {
        procIntel9.elegir();
        componentesElegidos.push(procIntel9);
    }
}

console.log("Listado de componentes elegidos: ");
for (const componentes of componentesElegidos) {
    console.log(componentes);
}