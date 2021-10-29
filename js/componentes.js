class Procesador {
    constructor(tipo, marca, modelo, precio) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = parseFloat(precio);
    }
}
const procAmd5 = new Procesador("Procesador", "AMD", "Ryzen 5 5600X", 40300);
const procAmd7 = new Procesador("Procesador", "AMD", "Ryzen 7 5800X", 53500);
const procAmd9 = new Procesador("Procesador", "AMD", "Ryzen 9 5900X", 78940);
const procIntel5 = new Procesador("Procesador", "Intel", "Core i5 10600K", 32250);
const procIntel7 = new Procesador("Procesador", "Intel", "Core i7 10700KF", 48390);
const procIntel9 = new Procesador("Procesador", "Intel", "Core i9 10900KF", 70090);

class Motherboard {
    constructor(tipo, marca, modelo, precio) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = parseFloat(precio);
    }
}
const motherAmd1 = new Motherboard("Motherboard", "GIGABYTE", "A520M DS3H AM4", 10340);
const motherAmd2 = new Motherboard("Motherboard", "GIGABYTE", "B550M H AM4", 13380);
const motherAmd3 = new Motherboard("Motherboard", "GIGABYTE", "X570 UD AM4", 21440);
const motherIntel1 = new Motherboard("Motherboard", "ASUS PRIME", "B460M-A S1200 - 10th Gen", 10900);
const motherIntel2 = new Motherboard("Motherboard", "ASUS PRIME", "B560M-A S1200 - 10th Gen", 13610);
const motherIntel3 = new Motherboard("Motherboard", "ASUS PRIME", "Z590-P S1200 - 10th Gen", 22999);