const images = document.querySelectorAll('.gallery img');
//console.log(images)
const text = document.querySelector('.text');

images.forEach((image) => {
    image.addEventListener('mouseover', (event) => {
        text.textContent = event.target.alt;
        event.target.animate({
            opacity: [.2, 1]
        }, 1200)
    })
})