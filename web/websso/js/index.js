/* slide */
let appendNumber = 10;  // 슬라이드 개수를 10으로 설정
let prependNumber = 1;

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,  // 기본 슬라이드 개수
  centeredSlides: false,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
  },
  breakpoints: {
    400: {  // 화면 크기가 600px 이하일 때
      slidesPerView: 1,  // 슬라이드를 1개로 설정
    },
    601: {  // 화면 크기가 601px 이상일 때
      slidesPerView: 3,  // 슬라이드를 3개로 설정
    },
  },
});

/* contack */


/* contents01 */
let btnBox = document.querySelectorAll('.category > li');
let imgs = document.querySelectorAll('.cont01 > .img');
console.log(imgs);

function imgView(index) {
  // 모든 버튼과 이미지에서 'on' 클래스 제거
  btnBox.forEach((btn, i) => {
    btn.classList.remove('on');
    imgs[i].classList.remove('on');
  });

  // 클릭된 탭과 해당하는 이미지에 'on' 클래스 추가
  btnBox[index].classList.add('on');
  imgs[index].classList.add('on');
}

/* years */
let btnBox02 = document.querySelectorAll('.category02 > li');
let imgs02 = document.querySelectorAll('.t_cont01 > .img');

// 각 버튼에 클릭 이벤트 연결
btnBox02.forEach((btn, index) => {
  btn.addEventListener('click', function() {
    imgViewYears(index); // 클릭된 탭의 인덱스에 따라 imgViewYears 함수 호출
  });
});

function imgViewYears(index) {
  // 모든 탭과 이미지에서 'on' 클래스 제거
  btnBox02.forEach((btn, i) => {
    btn.classList.remove('on');
    imgs02[i].classList.remove('on');
  });

  // 클릭된 탭과 대응하는 이미지에 'on' 클래스 추가
  btnBox02[index].classList.add('on');
  imgs02[index].classList.add('on');
}

/* m_gnb */
$(function() {
  const select_attrs = $('header nav a, header nav button');

  //window의 창의 크기가 600보다 큰지 작은지 또는 윈도우가 실행됐을 때의 화면 호출을 각각 다르게 하는 구문
  $(window).on('resize load', function() {
      let width = $(window).width();
      //console.log(width)

      if (width < 601) {
          return false; //attrs() 함수 실행
      } else {

          $('.dim').fadeOut();
          $('header nav').removeClass('on')
      }
  });

  //btn_nav를 클릭했을 때
  //1. window.width < 600보다 작은지 판단
  //2. window.width가 600 이하면 
  //2-1. .dim이 나오면 되면/nav에 on 클래스 추가
  $('.btn_nav').on('click', function() {
      let width = $(window).width();

      if (width < 601) {
          $('header nav').addClass('on');
          $('header nav a:first').focus();
          $('.dim').fadeIn()
 
      }
  })

  //close 버튼
  $('header .close').on('click', function() {
      $(this).parent().removeClass('on');
      $('.dim').fadeOut();
      attrs();
  })
})
