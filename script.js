
 let section = document.querySelectorAll("section");
 let menu = document.querySelectorAll("header nav ul li a");
 window.onscroll = () => {
   section.forEach((i) => {
     let top = window.scrollY;
     let offset = i.offsetTop - 150;
     let height = i.offsetHeight;
     let id = i.getAttribute("id");
     if (top >= offset && top < offset + height) {
       menu.forEach((link) => {
         link.classList.remove("menu__menu-item_active");
         document.querySelector("header nav ul li a[href*=" + id + "]")
           .classList.add("menu__menu-item_active");
       });
     }
   });
 };

 function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  reveal();

  