const mainImage = document.querySelector(".design_img img");
const thumbImages = document.querySelectorAll(".design_thumbnails img")

thumbImages.forEach((thumbImage) => {
    thumbImage.addEventListener("mouseover", (event) => {
        mainImage.src = event.target.src;
        mainImage.animate({ opacity: [0, 1] }, 500)
    })
})

const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
        {
            opacity: [0, 1],
            filter: ['blur(.4rem)', 'blur(0)'], 
            translate: ['0 4rem', 0],
        },
        {
            duration: 2000,
            easing: 'ease',
            fill: 'forwards',
        }
        );
        obs.unobserve(entry.target);
      }
    });
  };

    const fadeObserver = new IntersectionObserver(animateFade);
  
    const fadeElements = document.querySelectorAll('.fadeIn');
    fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
});

const menuOpen = document.querySelector("#menu_open");
const menuClose = document.querySelector("#menu_close");
const menuArea = document.querySelector("#menu_area");
const menuItems = document.querySelectorAll("#menu_area li");
const menuOptions = {
    duration: 1400,
    easing: 'ease',
    fill: 'forwards'
}

menuOpen.addEventListener('click', () => {
    menuArea.animate({translate: ['-100vw', 0]}, menuOptions)
    
    menuItems.forEach((menuItem, index) => {
        menuItem.animate(
            {
            opacity: [0, 1],
            translate: ['40px', 0]
            },
            {
            duration: 2400,
            delay: 300 * index,
            easing: 'ease', 
            fill: 'forwards'
            }
        )
    })
})

menuClose.addEventListener('click', () => {
    menuArea.animate(
        {translate: [0, '-100vw']},
        menuOptions
    )
    menuItems.forEach((menuItem) => {
        menuItem.animate(
        {
        opacity: [1 , 0]
        }, menuOptions)
    })
})

var swiper = new Swiper(".mySwiper", {
    loop: true,              
    autoplay: {
      delay: 3000,           
      disableOnInteraction: false  
    },
  });