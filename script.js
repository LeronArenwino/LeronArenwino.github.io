      const menu = document.querySelector('.menu');
      console.log(menu);
      const burgerButton = document.querySelector('#burger-menu');
      console.log(burgerButton);

      const portofolio = document.querySelector('#a-portofolio');
      const events = document.querySelector('#a-events-list');
      const contact = document.querySelector('#a-contact');

      portofolio.addEventListener('click',hideShow)
      events.addEventListener('click', hideShow)
      contact.addEventListener('click', hideShow)

      burgerButton.addEventListener('click', hideShow)

      function hideShow() {
        if (menu.classList.contains('is-active')) {
          menu.classList.remove('is-active');
        } else {
          menu.classList.add('is-active');
        }
      }