// MENÚ MÓVIL (HAMBURGUESA)
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Cerrar el menú al hacer clic en un enlace (Móvil)
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// INTERACTIVIDAD DE PESTAÑAS DEL MENÚ DE PLATOS
function openMenuTab(evt, tabName) {
  // Ocultar todos los contenidos de pestañas
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  // Quitar la clase 'active' de todos los botones de pestañas
  const tabButtons = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  // Mostrar la pestaña actual y añadir clase 'active' al botón presionado
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}