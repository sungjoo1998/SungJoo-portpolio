const loadingArea = document.querySelector("#loading")
const loadingText = document.querySelector("#loading > p")

window.addEventListener('load', () => {
    //로딩 중 흐릿한 화면(blur = 흐릿한 )
    loadingArea.animate ({
        backdropFilter: ['blur(10px)','blur(0)'], //특정요소의 배경을 흐리게하는 필터효과 ->fiutter라는 프로그램의 유틸기능이므로 자바스크립트에서는 100% 기능을 모두 적용할 수 없음.
        background: ['rgb(133, 199, 224, 1)', 'rgb(133, 199, 224, 0)'],
        visibility: 'hidden',
    },
    {
        duration: 2000,
        delay: 1200, //결과를 확인하기 위한 임의의 지연시간
        fill: 'forwards'

    }
);

//로딩 중 텍스트
//offset: web Animateion Api에서 사용되는 속성
//애니메이션의 진행 시점을 백분율로 설정하는 사용
//offset은 애니메이션의 어느 시점에서 특정 스타일이 적용될지를 정의
    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8 //80%
            },
            {
                opacity: 0, 
                offset: 1 //100%
            }
        ],
        {
            duration: 1200,
            fill: 'forwards',
            easing: 'ease'
        }
    )
})