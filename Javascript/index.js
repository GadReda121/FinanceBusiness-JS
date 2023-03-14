// scroll => fix navbar
window.addEventListener('scroll',()=>{
  var parentHeader = document.querySelector('.parentHeader');
  var scrollUp = document.querySelector('.scrollUp');
  if(window.scrollY > 20){
    parentHeader.style.cssText = 'box-shadow: rgba(0,0,0,.1) 0px 3px 6px;position:fixed;postion:absolute;left:0%;top:0%;z-index:999;width:100%';
    scrollUp.style.cssText = 'display:block';
    let menuItems = document.querySelector('.menu-mob');
    menuItems.classList.add('sticky')
  }else{
    parentHeader.style.cssText = "box-shadow: rgba(0,0,0,0) 0px 0px 0px;"
    scrollUp.style.cssText = 'display:none';
    let menuItems = document.querySelector('.menu-mob');
    menuItems.classList.remove('sticky')
  }
});
// menu Mobile
let menuBar = document.querySelector('.fa-bars');
menuBar.addEventListener('click',()=>{
  let menuItems = document.querySelector('.menu-mob');
  let menuXmark = document.querySelector('.fa-xmark');
  menuItems.style.cssText = 'display:grid';
  menuItems.classList.add("animate__animated");
  menuItems.classList.add("animate__bounceInRight");
  menuBar.style.cssText = 'display:none';
  menuXmark.style.cssText = 'display:grid';
});

let menuXmark = document.querySelector('.fa-xmark');
menuXmark.addEventListener('click',()=>{
  let menuBar = document.querySelector('.fa-bars');
  let menuItems = document.querySelector('.menu-mob');
  menuBar.style.cssText = 'display:grid';
  menuItems.style.cssText = 'display:none';
  menuXmark.style.cssText = 'display:none';
});
// swiper
var swiper = new Swiper(".mySwiper1", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    loop : true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
});
// scrollUp
let scrollUp = document.querySelector('.scrollUp');
scrollUp.addEventListener('click',()=>{
  window.scrollTo(0, 0);
});
// animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// clients
var swiperr = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop : true,
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function checkMediaQuery() {

  if (window.innerWidth > 852) {
    var swiperr = new Swiper(".mySwiper2", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop : true,
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else{
    var swiperr = new Swiper(".mySwiper2", {
      slidesPerView: 1,
      loop : true,
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

}
window.addEventListener('resize', checkMediaQuery);