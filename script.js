// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navigation toggle for mobile
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close nav on link click
document.querySelectorAll('.nav a').forEach(link =>
  link.addEventListener('click', () => nav.classList.remove('open'))
);

// GSAP animations
gsap.from('.hero-title', { y: 50, opacity: 0, duration: 1 });
gsap.from('.hero-subtitle', { y: 40, opacity: 0, duration: 0.8, delay: 0.5 });
gsap.from('.btn-primary', { scale: 0, opacity: 0, duration: 0.6, delay: 1 });

document.querySelectorAll('.section').forEach(section => {
  gsap.from(section.querySelectorAll('.section-title, .grid-2 > *, .project-card'), {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
  });
});
