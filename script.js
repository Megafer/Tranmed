document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // 1. Menú móvil
    navToggle.addEventListener('click', () => navMenu.classList.toggle('is-active'));

    // 2. SCROLL SUAVE MANUAL (LA CLAVE)
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault(); // Detenemos el salto
                navMenu.classList.remove('is-active'); // Cerramos menú

                // Calculamos la posición final (restando el header)
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // Forzamos el desplazamiento suave por código
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Botón Subir
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        scrollToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 4. AOS (Retrasado para que no choque con el inicio)
    setTimeout(() => {
        AOS.init({ duration: 1000, once: true });
    }, 500);
});


// Opcional: Suavizado extra para los 'details'
document.querySelectorAll('details').forEach((el) => {
  el.addEventListener('click', (e) => {
    // Le damos un pequeño tiempo para que el navegador procese la apertura
    if (!el.open) {
      el.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    } else {
      el.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
  });
});

























/* document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Menú Móvil
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('is-active');
  });

  // --- SOLUCIÓN SMART SCROLL ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      
      // Si el link es solo "#", que no haga nada
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault(); // Detenemos el salto brusco
        
        // Cerramos el menú
        navMenu.classList.remove('is-active');

        // Scroll suave manual (Este comando nunca falla)
        window.scrollTo({
          top: targetElement.offsetTop - 80, // El -80 es por tu header fijo
          behavior: 'smooth'
        });
      }
    });
  });

  // Botón Subir (Corregido para que sea suave también)
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  window.addEventListener('scroll', () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  scrollToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // AOS
  setTimeout(() => {
    AOS.init({ duration: 1000, once: true });
  }, 100);
}); */