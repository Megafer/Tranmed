const menuToggle = document.querySelector('.toggle');
      const showcase = document.querySelector('.showcase');
      const menu = document.querySelector('.menu');

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
      })

//Esto lo hice yo y funciona, al hacer click en el menu saca la class de Active //

      menu.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        showcase.classList.remove('active');
      }) 