let stars = document.getElementById('stars')
      let moon = document.getElementById('moon')
      let mountains_behind = document.getElementById('mountains_behind')
      let texto = document.getElementById('texto')
      let btn = document.getElementById('btn')
      let mountains_front = document.getElementById('mountains_front')

      window.addEventListener('scroll', function () {
        let value = window.scrollY;
        stars.style.left = value * 0.25 + 'px';
        moon.style.top = value * 1.05 + 'px';
        mountains_behind.style.top = value * 0.5 + 'px';
        mountains_front.style.top = value * 0 + 'px';
        texto.style.marginRight = value * 4 + 'px';
        texto.style.marginTop = value * 1.5 + 'px';
        btn.style.marginTop = value * 4 + 'px';
      });