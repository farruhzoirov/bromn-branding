"use strict"

const togglerBtn = document.querySelector('.header__toggler');
const headerSidebar = document.querySelector('.header__sidebar');
const sidebarCloser = headerSidebar.querySelector('.sidebar__closer');
const serviceItems = document.querySelectorAll('.service__item');
const serviceLinks = document.querySelectorAll('.service__link');
const servicesType = document.querySelectorAll('.services__type');



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









if(togglerBtn) {
    togglerBtn.addEventListener('click', () => {
        headerSidebar.style.left = '0';
    })
}

if(sidebarCloser) {
    sidebarCloser.addEventListener('click', () => {
        headerSidebar.style.left = '-120%';
    })
}

document.addEventListener('DOMContentLoaded', function () {
    const firstStrong = document.getElementById('firstStrong');
    const secondStrong = document.getElementById('secondStrong');


    const observer = new IntersectionObserver(function(entries) {
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






