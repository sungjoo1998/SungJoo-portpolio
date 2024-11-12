const loadingAreaLeft = document.querySelector("#loading_left")
const loadingAreaRight = document.querySelector("#loading_right")

const keyframes = {
    transform: ['scaleX(1)', 'scaleX(0)'],
};

const options = {
    duration: 1000,
    easing: 'ease',
    fill: 'forwards'
}

window.addEventListener('load', () => {
    //로딩 왼쪽
    loadingAreaLeft.animate(keyframes, options)
    //로딩 오른쪽
    loadingAreaRight.animate(keyframes, options)
})