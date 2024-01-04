"use strict"
const sliderContainer = document.querySelector('.site-main__slider');

// Content for the slider
const sliderContent = [
    'https://picsum.photos/id/100/1500/600',
    'https://picsum.photos/id/200/1500/600',
    'https://picsum.photos/id/300/1500/600',
    'https://picsum.photos/id/400/1500/600',
    'https://picsum.photos/id/500/1500/600',
    'https://picsum.photos/id/600/1500/600',

];


sliderContent.forEach(content => {
    const sliderItem = document.createElement('div');
    sliderItem.classList.add('slider-item');
    sliderItem.innerHTML = `<img src="${content}">`;
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


setInterval(changeSlide, 5000);

