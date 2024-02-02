var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      640:{
        slidesPerView: 2,
      },
      768:{
        slidesPerView: 2,
      },
      1024:{
        slidesPerView: 3,
      },
    },
  });
  //Loader Stars
function loader(){
    document.querySelector('.loader-container').classList.add('fade-aut');
  }
  function fadeOut(){
    setInterval(loader, 3000);
  }
  window.onload = fadeOut;
  //Loader end