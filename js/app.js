const slider = document.querySelector('.slider');
const sliderLeft = document.querySelector('.slider__left');
const sliderRight = document.querySelector('.slider__right');
const sliderCount = sliderRight.querySelectorAll('div').length;
let activeSlideIndex = 0;

const downButton = document.querySelector('.dwn-btn');
const upButton = document.querySelector('.up-btn');

sliderLeft.style.top = `-${(sliderCount - 1)*100}vh`;

upButton.addEventListener('click', function() {
    nextSlide('up');
});

downButton.addEventListener('click', function() {
    nextSlide('down');
});

function nextSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;

        if(activeSlideIndex === sliderCount) {
            activeSlideIndex = 0;
        };
    } else if (direction === 'down') {
        activeSlideIndex--;
        
        if(activeSlideIndex < 0) {
            activeSlideIndex = sliderCount - 1;
        }
    }

    const heightWindow = slider.clientHeight;

    sliderLeft.style.transform = `translateY(${activeSlideIndex*heightWindow}px)`;
    sliderRight.style.transform = `translateY(-${activeSlideIndex*heightWindow}px)`;
};