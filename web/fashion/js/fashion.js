
const loadingAreaGrey = document.querySelector("#loading")
const loadingAreaGreen = document.querySelector("#loading_screen")
const loadingText = document.querySelector("#loading p")

window.addEventListener('load', () => {
    loadingAreaGrey.animate(
        {
        
            opacity: [1, 0],
            visibility: 'hidden'
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards'
        }
    )

    
    loadingAreaGreen.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh']
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards'
        }
    )

    
    loadingText.animate(
        [
            {
                opacity: 1,
                offset: 0.8 //80%
            },
            {
                opacity: 0,
                offset: 1 //100%
            }
        ],
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards'
        }
    
    )
})


const mainImage = document.querySelector(".gallery_img img");
const thumbImages = document.querySelectorAll(".gallery_thumbnails img")

thumbImages.forEach((thumbImage) => {
    thumbImage.addEventListener("mouseover", (event) => {
        mainImage.src = event.target.src;
        mainImage.animate({ opacity: [0, 1] }, 500)
    })
})



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
    menuArea.animate({translate: ['100vw', 0]}, menuOptions)
    
    menuItems.forEach((menuItem, index) => {
        menuItem.animate(
            {
                opacity: [0, 1],
                translate: ['2rem', 0]
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

/* 메뉴닫기 */
menuClose.addEventListener('click', () => {
    menuArea.animate(
        {translate: [0, '100vw']},
        menuOptions
    )
    menuItems.forEach((menuItem) => {
        menuItem.animate(
            {
            opacity: [1 , 0]
            }, menuOptions)
    })
})

/*스크롤로 요소 표시
================================================ */
// 관찰 대상이 범위 안에 들어오면 실행하는 동작
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
        // 부드럽게 한 번 표시되었다면 관찰 중지
        obs.unobserve(entry.target);
      }
    });
  };
  
  
  // 관찰 설정
  const fadeObserver = new IntersectionObserver(animateFade);
  
  // .fadein을 관찰하도록 지시
  const fadeElements = document.querySelectorAll('.fadeIn');
  fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
  });