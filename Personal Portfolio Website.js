const iconToggle = document.querySelector('.fa-toggle-on');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.fa-times-circle');

iconToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
  navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
  });
});

// Change background header
function scrollHeader() {
    const header = document.getElementById('header');
    window.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
  }
  
  window.addEventListener('scroll', scrollHeader);
/* Hero type effect */
window.addEventListener('load', () => {
    const typed = document.querySelector('.typed');
  
    if (typed) {
      let typed_strings = typed.getAttribute('data-typed-items');
      typed_strings = typed_strings.split(',');
  
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  });
// Scroll sections active Link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 500;
    let sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

// Resume scroll
const pages = document.querySelectorAll('.page');
const resumeTabs = document.querySelectorAll('.resume_tabs a');

function resumeActive() {
  const scrollY = window.pageYOffset;

  pages.forEach((page, index) => {
    const sectionHeight = page.offsetHeight;
    const sectionTop = page.offsetTop - 500;
    let sectionId = page.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      resumeTabs[index].classList.add('current');
    } else {
      resumeTabs[index].classList.remove('current');
    }
  });
}

window.addEventListener('scroll', resumeActive);

 // Portfolio
let filterItems = document.querySelectorAll('.portfolio_filters li');

function activePortfolio() {
  filterItems.forEach(el => {
    el.classList.remove('filter-active');
  });

  this.classList.add('filter-active');
}

filterItems.forEach(el => {
  el.addEventListener('click', activePortfolio);
});

// Mixitup filter portfolio
let mixerPortfolio = mixitup('.portfolio_wrap-container', {
  selectors: {
    target: '.portfolio_item'
  },
  animation: {
    duration: 300
  }
});
 // Testimonial swiper
let swiper = new Swiper(".testimonial_container", {
  effect: 'slide',
  loop: true,
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 100,
  breakpoints: {
      768: {
          slidesPerView: 2
      }
  }
});
// Services
let modalBtns = document.querySelectorAll('.services_button');
let modalViews = document.querySelectorAll(".services_modal");
let modalClose = document.querySelectorAll('.modal_close-icon');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalClose.forEach(el => {
    el.addEventListener('click', () => {
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal');
        });
    });
});
