// Cursor personalizado
document.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('customCursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Scroll hacia la sección de proyectos
document.querySelector('.scroll-down').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});
        // Función para seguir el movimiento del mouse
        document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Efecto de desplazamiento suave al hacer clic en los enlaces
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir el comportamiento predeterminado
        const targetId = this.getAttribute('href'); // Obtener el ID del objetivo
        const targetElement = document.querySelector(targetId); // Seleccionar el objetivo
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Desplazarse suavemente hacia el objetivo
    });
});

// Animación de entrada para la sección "Sobre mí"
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    aboutSection.classList.add('fade-in'); // Agregar la clase de animación
});

// Animación de entrada para la sección "Contacto"
document.addEventListener('DOMContentLoaded', function() {
    const contactSection = document.getElementById('contact');
    contactSection.classList.add('fade-in'); // Agregar la clase de animación
});