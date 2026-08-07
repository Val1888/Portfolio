const container = document.getElementById("floating-container");

// Aquí agrega TODOS los SVG que tengas
const decorations = [
    "assets/decorations/chispas.svg",
    "assets/decorations/cloud.svg",
    "assets/decorations/flower.svg",
    "assets/decorations/cora.svg",
    "assets/decorations/heart.svg",
    "assets/decorations/star.svg",
];

// Cantidad de figuras
const amount = 40;

for(let i = 0; i < amount; i++){

    const img = document.createElement("img");

    // Imagen aleatoria
    img.src = decorations[Math.floor(Math.random() * decorations.length)];

    img.classList.add("floating-item");

    // Posición aleatoria
    img.style.left = Math.random() * 100 + "%";
    img.style.top = Math.random() * 100 + "%";

    // Tamaño aleatorio
    const size = 18 + Math.random() * 40;
    img.style.width = size + "px";

    // Opacidad
    img.style.opacity = 0.35 + Math.random() * 0.55;

    // Rotación inicial
    img.style.transform = `rotate(${Math.random()*360}deg)`;

    // Duración
    img.style.animationDuration = 6 + Math.random()*8 + "s";

    // Retraso
    img.style.animationDelay = Math.random()*5 + "s";

    container.appendChild(img);

}