/*----------------- Toggle icon navbar -------------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*----------------- Scroll sections active link -------------------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  /*----------------- sticky navbar -------------------*/
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 0);

  /*----------------- remove toggle icon and navbar when click navbar link -------------------*/
  navLinks.forEach(link => {
    link.onclick = () => {
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    };
  });
};

/*----------------- scroll reveal -------------------*/
ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .skills', { origin: 'left' });
ScrollReveal().reveal('.home-content p, p', { origin: 'right' });

/*----------------- typed js -------------------*/
const typed = new Typed('.multiple-text', {
  strings: ['Desarrollador Web', 'Desarrollador Desktop', 'Desarrollador Frontend', 'Desarrollador Backend', 'Diseñador'],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1000,
  loop: true
});

const typed2 = new Typed('.about-multiple-text', {
  strings: ['mí', 'mi trabajo', 'mi experiencia', 'mi pasión', 'mi vida'],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1000,
  loop: true
});

const typed3 = new Typed('.services-multiple-text', {
  strings: ['servicios', 'produtos'],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1000,
  loop: true
});

const typed4 = new Typed('.portfolio-multiple-text', {
  strings: ['proyecto', 'trabajo', 'portfolio'],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1000,
  loop: true
});

const typed5 = new Typed('.contact-multiple-text', {
  strings: ['Contactame', 'Hablemos', 'Escribeme', 'Conversemos', 'Hagamos algo juntos'],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1000,
  loop: true
});