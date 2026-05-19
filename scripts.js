// Abrir/cerrar menú hamburguesa en móvil
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Smooth scrolling para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    // Cierra menú en móvil al hacer clic
    if(navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });
});

// Header sticky: cambia fondo al hacer scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

/* Efecto reveal (opcional): animación al aparecer en scroll */
const revealElements = document.querySelectorAll('.feature-item, .testimonial');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealElements.forEach(el => observer.observe(el));
