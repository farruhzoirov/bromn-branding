"use strict"

// Site main img slider
const sliderContainer = document.querySelector('.site-main__slider');

// Content for the slider
const sliderContent = [
    '../assets/img/slider-img@2x.png',
    '../assets/img/slider-img@2x.png',
    '../assets/img/slider-img@2x.png',
    '../assets/img/slider-img@2x.png',
    '../assets/img/slider-img@2x.png',
    '../assets/img/slider-img@2x.png',
    '../assets/img/slider-img@2x.png',
    '../assets/img/slider-img@2x.png',
    '../assets/img/slider-img@2x.png',

];


const trickerArrow = [
    '../assets/img/opener-arrow.svg'
]


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
for (let i = 0; i < 50; i++) {
    tickerTrack.innerHTML += `
             <span class="ticker__item">Web dizayn</span>
             <img src="${trickerArrow[0]}" alt="">
             <span class="ticker__item">Packaging dizayn</span>
             <img src="${trickerArrow[0]}" alt="">
             <span class="ticker__item">Brand dizayn</span>
             <img src="${trickerArrow[0]}" alt="">
             <span class="ticker__item">Grafik dizayn</span>
             <img src="${trickerArrow[0]}" alt="">
       `
}

const successTickerTrack = document.querySelector('.success-ticker__track');
for (let i = 0; i < 50; i++) {
    successTickerTrack.innerHTML += `
             <span class="success-ticker__item">Brending OVARD sovrindori</span>
             <img src="${trickerArrow[0]}" alt="">
             <span class="success-ticker__item">TAFning branding yo’nalishida 1-o’rin</span>
             <img src="${trickerArrow[0]}" alt="">
             <span class="success-ticker__item">Amerikada 2-o’rin</span>
             <img src="${trickerArrow[0]}" alt="">
             <span class="success-ticker__item">TAFning branding yo’nalishida 1-o’rin</span>
             <img src="${trickerArrow[0]}" alt="">
       `
}

const slider = document.getElementById('slider');
let slideIndex = 0;





new Splide('#splide-container', {
    type: 'loop',
    autoplay: false,
    arrows: true,
    interval: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    perPage: 3,
    perMove: 1,
    gap: '50px',
    pagination: false,
    breakpoints: {
        '1366': {
            perPage: 3
        },
        '970': {
            perPage: 2,
            gap: '10px',
            arrows: true,
        },
        '560': {
            perPage: 1,
            arrows: true,
        }
    }
}).mount()


new Splide('#portfolio-container', {
    type: 'loop',
    autoplay: true,
    arrows: true,
    interval: 1500,
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
            arrows: true,
        },
        '560': {
            perPage: 1,
            arrows: true,
        }
    }
}).mount()



const splideItems = document.querySelectorAll('.splide__slide');

for (const splideItem of splideItems) {
    splideItem.setAttribute('id','splide__item');
}

document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector(".site-header");
    let headerHeight = header.offsetHeight;

    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;

        if (scrollPosition > headerHeight) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    const serviceItems = document.querySelectorAll('.service__item');


    serviceItems.forEach((item) => {
        item.addEventListener('click' ,(e) => {
            item.classList.add('service__item--active');
        })
    })
});










