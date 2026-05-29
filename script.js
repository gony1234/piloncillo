// Animación simple al hacer scroll
// Se ejecuta cada vez que el usuario hace scroll en la página
window.addEventListener('scroll', () => {

    // Selecciona todas las secciones que tengan la clase "container"
    const sections = document.querySelectorAll('.container');

    // Recorre cada sección encontrada
    sections.forEach(section => {

        // Obtiene la distancia desde la parte superior de la ventana
        const sectionTop = section.getBoundingClientRect().top;

        // Si la sección está visible en pantalla (100px antes de aparecer completamente)
        if (sectionTop < window.innerHeight - 100) {

            // Hace visible la sección
            section.style.opacity = '1';

            // La mueve a su posición original
            section.style.transform = 'translateY(0)';
        }
    });
});


// Inicializar estilos de animación
// Esto se ejecuta cuando carga el archivo JS

document.querySelectorAll('.container').forEach(s => {

    s.style.opacity = '0';
    // Inicialmente la sección está invisible

    s.style.transform = 'translateY(30px)';
    // La sección empieza 30px más abajo

    s.style.transition = 'all 0.6s ease-out';
    // Aplica una transición suave de 0.8 segundos
});

const hero = document.getElementById("hero");

const imagenes = [
    "imagenes/c1.jpg",
    "imagenes/hc.jpg",
    
];

let index = 0;

function cambiarFondo() {
    hero.style.backgroundImage = `url('${imagenes[index]}')`;
    index = (index + 1) % imagenes.length;
}

// Primera imagen inmediata
cambiarFondo();

// Cambio cada 4 segundos
setInterval(cambiarFondo, 2000);
//animacion al hacer scrool en la parte de index.html
const sections = document.querySelectorAll(".container");

function mostrarSecciones() {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if (top < trigger) {
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", mostrarSecciones);
window.addEventListener("load", mostrarSecciones);




console.log("menu funcionando");