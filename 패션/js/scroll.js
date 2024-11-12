const animateScroll = (entries, obs) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.animate(
                {
                    translate: [0, '100%'],
                },
                {
                    duration: 2000,
                    pseudoElement: ':before',
                    easing: 'ease',
                    fill: 'forwards'
                }
            );

            //한번 실행되면 스크롤이벤트 감지를 중지해서 반복실행이 되지않도록 함.
            obs.unobserve(entry.target)
        }
    })
}

//관찰 설정
//옵저버 패턴 -> 스크롤 이벤트를 감시하고 있다가 특정 요소에 스크롤 이벤트가 발생될 때마다 적용하려는 패턴들을 적용하는 프로그램 기법
const scrollObserver = new IntersectionObserver(animateScroll);

//관찰지시
const scrollElements = document.querySelectorAll('.scroll');
scrollElements.forEach((scrollElements) => {
    scrollObserver.observe(scrollElements)
})