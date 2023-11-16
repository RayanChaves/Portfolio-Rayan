     //*PROJETOS*//

      //Javascript para tornar a navegação horizontal scroll buttons
      const btnLeft = document.querySelector(".left-btn");
      const btnRight = document.querySelector(".right-btn");
      const tabMenu = document.querySelector(".tab-menu");

      const IconVisibility = () => {
        let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
        //console.log("1.", scrollLeftValue);
        let ScrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;
        //console.log("2.", ScrollableWidth);

        btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
        btnRight.style.display = ScrollableWidth > scrollLeftValue ? "block" : "none";

      }

      btnRight.addEventListener("click", () => {
        tabMenu.scrollLeft += 150;
        //IconVisibility();
        setTimeout(() => IconVisibility(), 50);
      });

      btnLeft.addEventListener("click", () => {
        tabMenu.scrollLeft -= 150;
        //IconVisibility();
        setTimeout(() => IconVisibility(), 50);
      });

      window, onload = function () {
        btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
        btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
      }

      window, onresize = function () {
        btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
        btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";

        let scrollLeftValue = Math.round(tabMenu.scrollLeft);
        btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
      }
      //Javascript para tornar a navegação da guia arrastável
      let activeDrag = false;

      tabMenu.addEventListener("mousemove", (drag) => {
        if (!activeDrag) return;
        tabMenu.scrollLeft -= drag.movementX;
        IconVisibility();
        tabMenu.classList.add("dragging");
      });

      document.addEventListener("mouseup", () => {
        activeDrag = false;
        tabMenu.classList.remove("dragging");
      });

      tabMenu.addEventListener("mousedown", () => {
        activeDrag = true;
      });

      //Javascript para visualizar o conteúdo da guia clicando nos botões da guia

      const tabs = document.querySelectorAll(".tab");
      const tabsBtns = document.querySelectorAll(".tab-btn");

      const tab_Nav = function (tabBtnClick) {
        tabsBtns.forEach((tabBtn) => {
          tabBtn.classList.remove("active");
        });
        tabs.forEach((tab) => {
          tab.classList.remove("active");
        });

        tabsBtns[tabBtnClick].classList.add("active");
        tabs[tabBtnClick].classList.add("active");
      }

      tabsBtns.forEach((tabBtn, i) => {
        tabBtn.addEventListener("click", () => {
          tab_Nav(i);
        });
      });