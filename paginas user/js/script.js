// Función para manejar un carrusel específico
function initializeSlider(sliderId, prevButtonId, nextButtonId) {
  var slider = document.getElementById(sliderId);
  var slides = slider.getElementsByClassName('slide');
  var currentIndex = 0;

  // Función para mostrar un slide específico
  function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[index].style.display = 'block';
  }

  // Función para avanzar al siguiente slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Inicia el carrusel automáticamente cada 3 segundos
  var intervalId = setInterval(nextSlide, 3000);

  // Evento clic para el botón de avanzar
  document.getElementById(nextButtonId).addEventListener('click', function() {
    clearInterval(intervalId);
    nextSlide();
    intervalId = setInterval(nextSlide, 3000);
  });
  
  // Evento clic para el botón de retroceder
  document.getElementById(prevButtonId).addEventListener('click', function() {
    clearInterval(intervalId);
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    intervalId = setInterval(nextSlide, 3000);
  });
}

// Inicializa cada carrusel
initializeSlider('slider1', 'btnPrev1', 'btnNext1');
initializeSlider('slider2', 'btnPrev2', 'btnNext2');
// Inicializa otros carruseles si los hay
// ...  


// Función para manejar el evento de scroll
function handleScroll() {
  var navBar = document.querySelector('nav');
  var scrollPosition = window.scrollY;

  // Agrega o quita la clase "fixed" según la posición de desplazamiento
  if (scrollPosition > 50) {
      navBar.classList.add('fixed');
  } else {
      navBar.classList.remove('fixed');
  }
}

// Asocia la función al evento de scroll
window.addEventListener('scroll', handleScroll);


// Función para mostrar la ventana modal
function openModal() {
  document.getElementById('modal').style.display = 'block';
}

// Función para cerrar la ventana modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Evento clic para el enlace "Iniciar Sesión"
document.querySelector('nav a[href="#"]').addEventListener('click', openModal);




document.addEventListener("DOMContentLoaded", function() {
  // Obtén la barra de navegación
  var navbar = document.getElementById("navbar");

  // Obtén todos los enlaces del menú
  var links = navbar.getElementsByTagName("a");

  // Agrega un evento clic a cada enlace del menú
  for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", scrollToSection);
  }

  // Función para desplazarse suavemente a la sección correspondiente
  function scrollToSection(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace

      var targetId = this.getAttribute("href").substring(1); // Obtiene el ID de la sección de destino
      var targetSection = document.getElementById(targetId); // Obtiene la sección de destino
      var offset = navbar.offsetHeight; // Altura de la barra de navegación

      // Desplazamiento suave hacia la sección de destino con un ajuste de 50px
      window.scrollTo({
          top: targetSection.offsetTop - offset + 0,
          behavior: "smooth"
      });
  }
});
