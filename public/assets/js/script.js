"use strict"

// Site main img slider
const sliderContainer = document.querySelector('.site-main__slider');


const trickerArrow = [
  '../assets/img/opener-arrow.svg'
]


const sliderDescriptions = [
  {
    title: 'Transport Universiteti',
    desc: 'Web design / UX/UI analitika'
  },
  {
    title: 'Shukur Proff',
    desc: 'Logo branding / Instagram Content / Account packaging.'
  },
  {
    title: 'MDC Uzbekistan',
    desc: 'Logo branding/ Branding/ Identika'
  },
  {
    title: 'Akademik mukofoti',
    desc: 'Logo/ Mukofot'
  },
  {
    title: 'Royal vs Proline',
    desc: 'Dizayn/ Katalog dizayn'
  },
  {
    title: 'DizaynTech',
    desc: 'Logo branding/Identika/Instagram Content.'
  }
]

const slider_img = document.querySelectorAll('.slider-img');
const sliderBottom = document.querySelectorAll('.slider-bottom');
const sliderDesc = document.querySelector('.slider-desc');
const slideCounter = document.getElementById('slide-counter');
let activeIndex = 0;

function changeSlide() {
  sliderBottom.forEach(item => {
    item.style.height = '0.15rem'
  })
  slideCounter.innerHTML = '';
  sliderDesc.innerHTML = '';
  let index;

  for (index = 0; index < slider_img.length; index++) {
    slider_img[index].style.display = 'none';
  }

  activeIndex++;
  if (activeIndex > slider_img.length) {
    activeIndex = 1;
  }
  sliderBottom[activeIndex - 1].style.height = '0.45rem';
  sliderDesc.innerHTML += `
      <h1>${sliderDescriptions[activeIndex - 1].title}</h1>
      <p>${sliderDescriptions[activeIndex - 1].desc}</p>
  `
  slideCounter.innerHTML += `
        <p><span>0${activeIndex}</span> / 0${slider_img.length}</p>
    `
  slider_img[activeIndex - 1].style.display = 'block'
}

function next() {
  changeSlide();
}

function prev() {
  activeIndex -= 2;
  if (activeIndex < 0) {
    activeIndex = slider_img.length - 1;
  }
  changeSlide();
}


changeSlide();
setInterval(changeSlide, 3000);


// Ticker codes

const tickerTrack = document.querySelector('.ticker__track');
for (let i = 0; i < 50; i++) {
  tickerTrack.innerHTML += `
             <span class="ticker__item">Web dizayn</span>
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

const smallScreenTabsWrapper = document.getElementById('smaller-tab-1');
const smallScreenTabsWrapper_2 = document.getElementById('smaller-tab-2');

const smallScreenTabs = smallScreenTabsWrapper.querySelectorAll('.type__tab');
const smallScreenTexts = smallScreenTabsWrapper.querySelectorAll('.service__context');
const smallScreenTabs_2 = smallScreenTabsWrapper_2.querySelectorAll('.type__tab');
const smallScreenTexts_2 = smallScreenTabsWrapper_2.querySelectorAll('.service__context');

const largeScreenTabsWrapper = document.getElementById('larger-tab-1');
const largeScreenTabsWrapper_2 = document.getElementById('larger-tab-2');

const largeScreenTabs = largeScreenTabsWrapper.querySelectorAll('.type__tab');
const largeScreenTexts = largeScreenTabsWrapper.querySelectorAll('.service__context');
const largeScreenTabs_2 = largeScreenTabsWrapper_2.querySelectorAll('.type__tab');
const largeScreenTexts_2 = largeScreenTabsWrapper_2.querySelectorAll('.service__context');


const deActiveTexts = (element) => {
  element.forEach((item, index) => {
    item.classList.add('tabs-display');
  })
}

const deActiveTabs = (element) => {
  element.forEach((item, index) => {
    item.classList.remove('type__tab--active');
  })
}

smallScreenTabs.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    deActiveTabs(smallScreenTabs);
    deActiveTexts(smallScreenTexts);
    item.classList.add('type__tab--active');
    smallScreenTexts[index].classList.remove('tabs-display');
  })
})

smallScreenTabs_2.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    deActiveTabs(smallScreenTabs_2);
    deActiveTexts(smallScreenTexts_2);
    item.classList.add('type__tab--active');
    smallScreenTexts_2[index].classList.remove('tabs-display');
  })
})
largeScreenTabs.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    deActiveTabs(largeScreenTabs);
    deActiveTexts(largeScreenTexts);
    item.classList.add('type__tab--active');
    largeScreenTexts[index].classList.remove('tabs-display');
  })
})

largeScreenTabs_2.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    deActiveTabs(largeScreenTabs_2);
    deActiveTexts(largeScreenTexts_2);
    item.classList.add('type__tab--active');
    largeScreenTexts_2[index].classList.remove('tabs-display');
  })
})


const modalBackdrop = document.querySelector('.backdrop');

const modalCloserElements = document.querySelectorAll('[data-modal-close]');
const submitBtn = document.querySelector('.form__submit__button');

const openModal = () => {
  modalBackdrop.classList.add('modal-open');
}

function closeModal() {
  modalBackdrop.classList.remove('modal-open');
}

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
})

modalCloserElements.forEach(element => {
  element.addEventListener('click', e => {
    if (e.target.hasAttribute('data-modal-close')) {
      closeModal();
    }
  })
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwnx8TneL3bc02ZbfH-qbB9HL03HIWx7iwBS3yN1muph_1nLzxVAzm_WrUalKEQ_-Xr/exec';
const registrationForm = document.querySelector('.registration__form');
const nameInput = document.getElementById('name-input');
const phoneInput = document.getElementById('tel-input');
const usernameInput = document.getElementById('username-input');
registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  submitBtn.setAttribute('disabled', true);
  submitBtn.style.color = 'white';
  submitBtn.textContent = 'Yuborilmoqda...';
  if (nameInput.value.trim() && phoneInput.value.trim()) {
    fetch(scriptURL, {method: 'POST', body: new FormData(registrationForm)})
        .then(response => {
          if (response.ok) {
            openModal();
            submitBtn.style.color = 'white';
            submitBtn.textContent = 'Yuborish';
            nameInput.value = '';
            phoneInput.value = '';
            usernameInput.value = '';
          }
        })
        .catch(error => console.error('Error!', error.message));
  } else {
    alert("Iltimos ma'lumotlarni to'g'riligicha kiriting!");
  }
})






