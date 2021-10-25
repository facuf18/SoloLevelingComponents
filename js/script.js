alert("¡Bienvenido a Solo Leveling Components!\n\nProcederemos con la selección de los componentes...");
let elecUsuario = parseInt(prompt("Como primer paso, seleccione la marca del procesador(1 o 2):\n1. AMD\n2. INTEL"));
let eleccionMarcaProc;

function seleccionarProc(selecMarca) {
    if (selecMarca == 1) {
        alert("Usted eligió la marca AMD para su procesador.");
        eleccionMarcaProc = 1;
    } else if (selecMarca == 2) {
        alert("Usted eligió la marca Intel para su procesador.");
        eleccionMarcaProc = 2;
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

class Motherboard {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = parseFloat(precio);
    }
    elegir() {
        alert("Usted eligió la motherboard " + this.marca + " " + this.modelo + " $" + this.precio);
    }
}
const motherAmd1 = new Motherboard("GIGABYTE", "A520M DS3H AM4", 10340);
const motherAmd2 = new Motherboard("GIGABYTE", "B550M H AM4", 13380);
const motherAmd3 = new Motherboard("GIGABYTE", "X570 UD AM4", 21440);
const motherIntel1 = new Motherboard("ASUS PRIME", "B460M-A S1200 - 10th Gen", 10900);
const motherIntel2 = new Motherboard("ASUS PRIME", "B560M-A S1200 - 10th Gen", 13610);
const motherIntel3 = new Motherboard("ASUS PRIME", "Z590-P S1200 - 10th Gen", 22999);

const componentesElegidos = [];

if (eleccionMarcaProc == 1) {
    let selecModelo = parseInt(prompt("Seleccione el modelo del procesador:\n1. AMD Ryzen 5 5600X\n2. AMD Ryzen 7 5800X\n3. AMD Ryzen 9 5900X"));
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

    let selecMotherboard = parseInt(prompt("Seleccione la motherboard:\n1. GIGABYTE A520M DS3H AM4\n2. GIGABYTE B550M H AM4\n3. GIGABYTE X570 UD AM4"));
    if (selecMotherboard == 1) {
        motherAmd1.elegir();
        componentesElegidos.push(motherAmd1);
    } else if (selecMotherboard == 2) {
        motherAmd2.elegir();
        componentesElegidos.push(motherAmd2);
    } else if (selecMotherboard == 3) {
        motherAmd3.elegir();
        componentesElegidos.push(motherAmd3);
    }
} else if (eleccionMarcaProc == 2) {
    let selecModelo = parseInt(prompt("Seleccione el modelo del procesador:\n1. Intel Core i5 10600K\n2. Intel Core i7 10700KF\n3. Intel Core i9 10900KF"));
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

    let selecMotherboard = parseInt(prompt("Seleccione la motherboard:\n1. ASUS PRIME B460M-A\n2. ASUS PRIME B560M-A\n3. ASUS PRIME Z590-P"));
    if (selecMotherboard == 1) {
        motherIntel1.elegir();
        componentesElegidos.push(motherIntel1);
    } else if (selecMotherboard == 2) {
        motherIntel2.elegir();
        componentesElegidos.push(motherIntel2);
    } else if (selecMotherboard == 3) {
        motherIntel3.elegir();
        componentesElegidos.push(motherIntel3);
    }
}