"use strict"
// Site main img slider
const sliderContainer = document.querySelector('.site-main__slider');

// Content for the slider
const sliderContent = [
    'assets/img/slider-img.jpg',
    'assets/img/slider-img.jpg',
    'assets/img/slider-img.jpg',
    'assets/img/slider-img.jpg',
    'assets/img/slider-img.jpg',
    'assets/img/slider-img.jpg',
    'assets/img/slider-img.jpg',
    'assets/img/slider-img.jpg',
    'assets/img/slider-img.jpg',

];


sliderContent.forEach(content => {
    const sliderItem = document.createElement('div');
    sliderItem.classList.add('slider-item');
    sliderItem.innerHTML = `<img loading="lazy" src="${content}" width="100%" height="100%">`;
    const imageItem = sliderItem.querySelector('img');
    imageItem.className = 'slider-image';
    sliderContainer.appendChild(sliderItem);
});

let currentIndex = 0;

function changeSlide() {
    currentIndex = (currentIndex + 1) % sliderContent.length;
    const scrollPosition = currentIndex * sliderContainer.clientWidth;
    sliderContainer.scrollLeft = scrollPosition;
}


setInterval(changeSlide, 3000);

// Ticker codes

const tickerTrack = document.querySelector('.ticker__track');
for (let i = 0; i < 100; i++) {
    tickerTrack.innerHTML += `<span class="ticker__item">Web dizayn</span>`
}

