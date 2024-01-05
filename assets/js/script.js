"use strict"

// Site main img slider
const sliderContainer = document.querySelector('.site-main__slider');

// Content for the slider
const sliderContent = [
    'https://picsum.photos/id/100/800/600',
    'https://picsum.photos/id/210/800/600',
    'https://picsum.photos/id/30/800/600',
    'https://picsum.photos/id/1003/800/600',
    'https://picsum.photos/id/1002/800/600',
    'https://picsum.photos/id/1004/800/600',
    'https://picsum.photos/id/1005/800/600',
    'https://picsum.photos/id/1003/800/600',
    'https://picsum.photos/id/1001/800/600',

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
    tickerTrack.innerHTML += `
             <span class="ticker__item">Web dizayn</span>
             <span class="ticker__item">Packaging dizayn</span>
             <span class="ticker__item">Brand dizayn</span>
             <span class="ticker__item">Grafik dizayn</span>
       `
}

const slider = document.getElementById('slider');
let slideIndex = 0;


new Splide('#splide-container', {
    type: 'loop',
    speed: 1000,
    autoplay: true,
    arrows: true,
    interval: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    perPage: 3,
    perMove: 1,
    gap: '20px',
    pagination: false,
    breakpoints: {
        '1366': {
            perPage: 3
        },
        '970': {
            perPage: 2,
            gap: '10px',
            arrows: false,
        },
        '560': {
            perPage: 1,
            arrows: false,
        }
    }
}).mount()


