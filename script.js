// ─── ANIMACIONES AL HACER SCROLL ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .edu-item').forEach(el => observer.observe(el));

// ─── BARRAS DE HABILIDADES ───
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        setTimeout(() => {
          bar.style.width = bar.dataset.width + '%';
        }, 200);
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-grid').forEach(el => skillObserver.observe(el));

// ─── RESALTADO DE NAV AL HACER SCROLL ───
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--accent)'
      : '';
  });
});

// ─── FORMULARIO DE CONTACTO ───
function sendForm() {
  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Por favor completa todos los campos.');
    return;
  }

  // Muestra mensaje de éxito
  const msgEl = document.getElementById('form-msg');
  msgEl.style.display = 'block';

  // Limpia el formulario
  document.getElementById('name').value    = '';
  document.getElementById('email').value   = '';
  document.getElementById('message').value = '';

  // Oculta el mensaje después de 4 segundos
  setTimeout(() => { msgEl.style.display = 'none'; }, 4000);
}

// ─── EFECTO CLICK EN TARJETAS DE PROYECTOS ───
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    card.style.transform = 'scale(0.98)';
    setTimeout(() => { card.style.transform = ''; }, 150);
  });
});

