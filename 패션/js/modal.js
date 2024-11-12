const open = document.querySelector("#open")
const close = document.querySelector("#close")
const modal = document.querySelector("#modal")
const mask = document.querySelector("#mask")

const showKeyframes = {
    opacity: [0, 1],
    visibility: 'visible'
};

const hiKeyframes = {
    opacity: [1, 0],
    visibility: 'hidden'
};

const options = {
    duration: 800,
    easing: 'ease',
    fill: 'forwards'
};

//modal
open.addEventListener('click', () => {
    modal.animate(showKeyframes, options)
    mask.animate(showKeyframes, options)
})

//modal close
close.addEventListener('click', () => {
    modal.animate(hiKeyframes, options)
    mask.animate(hiKeyframes, options)
})

//마스크창을 클릭하면 모달창 닫기
mask.addEventListener('click', () => {
    close.click()
})