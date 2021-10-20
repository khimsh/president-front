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

// Custom Select
const selectElements = document.querySelectorAll('[data-custom]');

selectElements.forEach((selectElement) => {
  new Select(selectElement);
});
