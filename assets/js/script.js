'use strict';
import Select from './select.js';

// Dropdown
// const dropdownButtons = document.querySelectorAll('[data-toggle-target]');
// const dropdownContents = document.querySelectorAll('[data-dropdown]');

// dropdownButtons.forEach((dropdownButton) => {
//   dropdownButton.addEventListener('click', () => {
//     const target = document.querySelector(dropdownButton.dataset.toggleTarget);

//     target.classList.toggle('dropdown-active');
//   });
// });

// Figure out backdrop height
// const navBackdrop = document.querySelector('.nav-backdrop');

// console.log(navBackdrop.offsetHeight);

// Custom Select
const selectElements = document.querySelectorAll('[data-custom]');

selectElements.forEach((selectElement) => {
  new Select(selectElement);
});

// FAQ
if (document.querySelectorAll('.faq')) {
  const faqs = document.querySelectorAll('.faq');

  faqs.forEach((faq) => {
    faq.querySelector('button').addEventListener('click', () => {
      faq.classList.toggle('active');

      const faqContent = faq.querySelector('.faq-content');
      const arrowIcon = faq.querySelector('.icon svg');

      console.log(arrowIcon);

      if (faq.classList.contains('active')) {
        faqContent.style.maxHeight = faqContent.scrollHeight + 'px';
        arrowIcon.style.transform = 'rotate(180deg)';
      } else {
        faqContent.style.maxHeight = 0;
        arrowIcon.style.transform = 'rotate(0deg)';
      }
    });
  });
}
