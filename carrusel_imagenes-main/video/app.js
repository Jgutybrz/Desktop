const imagenes = [
    { url: "img/img1.webp", nombre: "Proyecto 01", descripcion: "Descripción del Proyecto 01." },
    { url: "img/img2.webp", nombre: "Proyecto 02", descripcion: "Descripción del Proyecto 02." },
    { url: "img/img3.webp", nombre: "Proyecto 03", descripcion: "Descripción del Proyecto 03." },
    { url: "img/img4.webp", nombre: "Proyecto 04", descripcion: "Descripción del Proyecto 04." },
    { url: "img/img5.webp", nombre: "Proyecto 05", descripcion: "Descripción del Proyecto 05." },
    { url: "img/img6.webp", nombre: "Proyecto 06", descripcion: "Descripción del Proyecto 06." },
    { url: "img/img7.webp", nombre: "Proyecto 07", descripcion: "Descripción del Proyecto 07." },
    { url: "img/img8.webp", nombre: "Proyecto 08", descripcion: "Descripción del Proyecto 08." },
    { url: "img/img9.webp", nombre: "Proyecto 09", descripcion: "Descripción del Proyecto 09." },
    { url: "img/img10.webp", nombre: "Proyecto 10", descripcion: "Descripción del Proyecto 10." },
];

let actual = 0;
const atras = document.getElementById("atras");
const adelante = document.getElementById("adelante");
const imagen = document.getElementById("img");
const texto = document.getElementById("texto");
const puntos = document.getElementById("puntos");

function actualizarCarrusel() {
    const { url, nombre, descripcion } = imagenes[actual];
    imagen.innerHTML = `<img class="img" src="${url}" alt="${nombre}" loading="lazy">`;
    texto.innerHTML = `<h3>${nombre}</h3><p>${descripcion}</p>`;
    actualizarPuntos();
}

function actualizarPuntos() {
    puntos.innerHTML = imagenes.map((_, index) => `<p class="${index === actual ? "bold" : ""}">.</p>`).join("");
}

atras.addEventListener("click", () => {
    actual = (actual - 1 + imagenes.length) % imagenes.length;
    actualizarCarrusel();
});

adelante.addEventListener("click", () => {
    actual = (actual + 1) % imagenes.length;
    actualizarCarrusel();
});

// Inicializar el carrusel
actualizarCarrusel();
