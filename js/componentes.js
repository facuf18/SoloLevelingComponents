class Motherboard {
    constructor(tipo, compatibilidad, marca, modelo, precio, imgLink) {
        this.tipo = tipo;
        this.compatibilidad = compatibilidad;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = parseFloat(precio);
        this.imgLink = imgLink;
    }
}
const motherAmd1 = new Motherboard("Motherboard", "AMD", "GIGABYTE", "A520M DS3H AM4", 10340);
const motherAmd2 = new Motherboard("Motherboard", "AMD", "GIGABYTE", "B550M H AM4", 13380);
const motherAmd3 = new Motherboard("Motherboard", "AMD", "GIGABYTE", "X570 UD AM4", 21440);
const motherIntel1 = new Motherboard("Motherboard", "Intel", "ASUS PRIME", "B460M-A S1200 - 10th Gen", 10900);
const motherIntel2 = new Motherboard("Motherboard", "Intel", "ASUS PRIME", "B560M-A S1200 - 10th Gen", 13610);
const motherIntel3 = new Motherboard("Motherboard", "Intel", "ASUS PRIME", "Z590-P S1200 - 10th Gen", 22999);

const procesadoresAMD = [{
        id: 1,
        tipo: "Procesador",
        marca: "AMD",
        modelo: "Ryzen 5 5600X",
        precio: 40300,
        imagen: "../img/procesadores/ryzen5.png"
    },
    {
        id: 2,
        tipo: "Procesador",
        marca: "AMD",
        modelo: "Ryzen 7 5800X",
        precio: 53500,
        imagen: "../img/procesadores/ryzen7.png"
    },
    {
        id: 3,
        tipo: "Procesador",
        marca: "AMD",
        modelo: "Ryzen 9 5900X",
        precio: 78940,
        imagen: "../img/procesadores/ryzen9.png"
    }
];

const procesadoresIntel = [{
        id: 4,
        tipo: "Procesador",
        marca: "Intel",
        modelo: "Core i5 10600K",
        precio: 32250,
        imagen: "../img/procesadores/corei5-10th.png"
    },
    {
        id: 5,
        tipo: "Procesador",
        marca: "Intel",
        modelo: "Core i7 10700KF",
        precio: 48390,
        imagen: "../img/procesadores/corei7-10th.png"
    },
    {
        id: 6,
        tipo: "Procesador",
        marca: "Intel",
        modelo: "Core i9 10900KF",
        precio: 70090,
        imagen: "../img/procesadores/corei9-10th.png"
    }
];

const carritoDeComponentes = [];