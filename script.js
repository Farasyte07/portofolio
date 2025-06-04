  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
      navbar.classList.add('shrink');
    } else {
      navbar.classList.remove('shrink');
    }
  });

  // Animasi fade-in section saat scroll
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {threshold: 0.2});

  sections.forEach(section => observer.observe(section));