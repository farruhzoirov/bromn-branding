"use strict"

// Site main img slider
const sliderContainer = document.querySelector('.site-main__slider');

// Content for the slider
const sliderContent = [
  '../public/assets/slider-imgs/transport-slider@2x.png',
  '../public/assets/slider-imgs/shukur-proff-slider@2x.png',
  '../public/assets/slider-imgs/programmer-degree-slider@2x.png',
  '../public/assets/slider-imgs/medal-slider@2x.png',
  '../public/assets/slider-imgs/sun-book-slider@2x.png',
  '../public/assets/slider-imgs/dizayntech-slider@2x.png'
];


const trickerArrow = [
  '../public/assets/img/opener-arrow.svg'
]

try {
  sliderContent.forEach(content => {
    const sliderItem = document.createElement('div');
    sliderItem.classList.add('slider-item');
    sliderItem.innerHTML = `<img loading="lazy" style="display: flex; flex-direction: column; margin-top: -1px" src="${content}" width="100%" height="100%">`;
    const imageItem = sliderItem.querySelector('img');
    imageItem.className = 'slider-image';
    sliderContainer.appendChild(sliderItem);
  });

  let currentIndex = 0;
  const sliderCounter = document.querySelector('.slider__counter');
  const sliderTexts = document.querySelectorAll('.slider__text');

  sliderCounter.innerHTML = 1;
  sliderTexts[0].style.display = 'block'

  function changeDisplay() {
    sliderTexts[currentIndex - 1].style.display = 'none';
  }

  function changeSlide() {
    currentIndex = (currentIndex + 1) % sliderContent.length;
    console.log(currentIndex)
    changeDisplay();
    sliderTexts[currentIndex].style.display = 'block';
    sliderCounter.innerHTML = currentIndex + 1;
    const scrollPosition = currentIndex * sliderContainer.clientWidth;
    sliderContainer.scrollLeft = scrollPosition;

  }


  setInterval(changeSlide, 2000);
} catch (e) {

}


// Ticker codes

const tickerTrack = document.querySelector('.ticker__track');
for (let i = 0; i < 50; i++) {
  tickerTrack.innerHTML += `
             <span class="ticker__item">Web dizayn </span>
             <img src="${trickerArrow[0]}" alt="">
             <span  class="ticker__item">Packaging dizayn </span>
             <img src="${trickerArrow[0]}" alt="">
             <span  class="ticker__item">Brand dizayn </span>
             <img src="${trickerArrow[0]}" alt="">
             <span  class="ticker__item">Grafik dizayn </span>
             <img src="${trickerArrow[0]}" alt="">
       `
}

const successTickerTrack = document.querySelector('.success-ticker__track');
for (let i = 0; i < 10; i++) {
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
    '620': {
      perPage: 1,
      arrows: true,
    }
  }
}).mount()


new Splide('#portfolio-container', {
  type: 'loop',
  autoplay: false,
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
    '590': {
      perPage: 1,
      arrows: true,
    }
  }
}).mount()


const splideContainer = document.getElementById('splide-container');
const splideItems = splideContainer.querySelectorAll('.splide__slide');

for (const splideItem of splideItems) {
  splideItem.setAttribute('id', 'splide__item');
}
const portfolioSlider = document.querySelector('.portfolio__slider');
const projectItems = portfolioSlider.querySelectorAll('.splide__slide');
for (const projectItem of projectItems) {
  projectItem.classList.add("splide__item-2");
}










