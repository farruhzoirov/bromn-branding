"use strict"

const togglerBtn = document.querySelector('.header__toggler');
const headerSidebar = document.querySelector('.header__sidebar');
const sidebarCloser = headerSidebar.querySelector('.sidebar__closer');
const serviceItems = document.querySelectorAll('.service__item');
const serviceLinks = document.querySelectorAll('.service__link');
const servicesType = document.querySelectorAll('.services__type');
const servicesTypeSmaller = document.querySelectorAll('.services__type__smaller');
const servicesTypeSmallerFirst = document.querySelector('.services__type__smaller:first-of-type');

const splideSlide1 = document.querySelector('.splide__slide--1');
const splideSlide2 = document.querySelector('.splide__slide--2');
const splideSlide3 = document.querySelector('.splide__slide--3');
const splideSlide4 = document.querySelector('.splide__slide--4');


const tabsInfo1 = splideSlide1.querySelectorAll('.tabs-info');
const tabsLink1 = splideSlide1.querySelectorAll('.tabs__link');
const tabsItem1 = splideSlide1.querySelectorAll('.tabs__item');


const tabsInfo2 = splideSlide2.querySelectorAll('.tabs-info');
const tabsLink2 = splideSlide2.querySelectorAll('.tabs__link');
const tabsItem2 = splideSlide2.querySelectorAll('.tabs__item');


const tabsInfo3 = splideSlide3.querySelectorAll('.tabs-info');
const tabsLink3 = splideSlide3.querySelectorAll('.tabs__link');
const tabsItem3 = splideSlide3.querySelectorAll('.tabs__item');

const tabsInfo4 = splideSlide4.querySelectorAll('.tabs-info');
const tabsLink4 = splideSlide4.querySelectorAll('.tabs__link');
const tabsItem4 = splideSlide4.querySelectorAll('.tabs__item');
function deActiveTabsInfo(Info) {
  Info.forEach((item) => {
    item.classList.remove('tabs-info--active');
  });
}

  function deActiveTabsLink(link) {
    link.forEach((item) => {
      item.classList.remove('tabs__link--active');
    });
  }


  function tabsChangingHandler(tabsInfo, tabsLink, index) {
    deActiveTabsInfo(tabsInfo);
    deActiveTabsLink(tabsLink);
    tabsInfo[index].classList.add('tabs-info--active');
    tabsLink[index].classList.add('tabs__link--active');

  }

  tabsItem1.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      tabsChangingHandler(tabsInfo1, tabsLink1, index);
    });
  });


  tabsItem2.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      tabsChangingHandler(tabsInfo2, tabsLink2, index);
    });
  })

  tabsItem3.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      tabsChangingHandler(tabsInfo3, tabsLink3, index);
    });
  })

  tabsItem4.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      tabsChangingHandler(tabsInfo4, tabsLink4, index);
    });
  })


  function deActivateServiceItems() {
    serviceItems.forEach(function (item) {
      item.classList.remove('service__item--active');
    });
  }

  function deActivateServiceTabs() {
    servicesType.forEach(function (tabItem) {
      tabItem.classList.remove('services__type--active');
    });
  }

  serviceLinks.forEach((serviceLink, index) => {
    serviceLink.addEventListener('click', (e) => {
      e.preventDefault();

      deActivateServiceItems();
      deActivateServiceTabs();

      serviceLink.parentElement.classList.add('service__item--active');
      servicesType[index].classList.add('services__type--active');
    });
  });


  if (document.documentElement.offsetWidth <= 1200) {
    servicesTypeSmallerFirst.classList.add('services__type__smaller--active');

    function deActivateServiceItemsSmaller() {
      servicesTypeSmaller.forEach(function (tabItemSmaller) {
        tabItemSmaller.classList.remove('services__item--active');
      });
    }

    function deActivateServiceContent() {
      servicesTypeSmaller.forEach(function (tabItem) {
        tabItem.classList.remove('services__type__smaller--active');
      });
    }

    serviceLinks.forEach((serviceLink, index) => {
      serviceLink.addEventListener('click', (e) => {
        e.preventDefault();

        deActivateServiceItemsSmaller();
        deActivateServiceContent();

        serviceLink.parentElement.classList.add('service__item--active');
        servicesTypeSmaller[index].classList.add('services__type__smaller--active');
      });
    });
  }


  if (togglerBtn) {
    togglerBtn.addEventListener('click', () => {
      headerSidebar.style.left = '0';
    })
  }

  if (sidebarCloser) {
    sidebarCloser.addEventListener('click', () => {
      headerSidebar.style.left = '-120%';
    })
  }

  document.addEventListener('DOMContentLoaded', function () {
    const firstStrong = document.getElementById('firstStrong');
    const secondStrong = document.getElementById('secondStrong');


    const observer = new IntersectionObserver(function (entries) {
      const isIntersecting = entries[0].isIntersecting;

      // Set colors accordingly
      if (isIntersecting) {
        firstStrong.style.color = 'gray';
        secondStrong.style.color = 'black';
      } else {
        firstStrong.style.color = 'black';
        secondStrong.style.color = 'gray';
      }
    });

    observer.observe(secondStrong);
  });






