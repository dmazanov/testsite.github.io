'use strict';

const hamburger = document.getElementById('toggle-menu');
const navMenu = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const langBlock = document.querySelector('.footer__lang');
const langToggle = document.querySelector('.footer__lang-toggle');

langToggle.addEventListener('click', () => {
  langBlock.classList.toggle('show');
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});
