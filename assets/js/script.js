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

// ნავიგაცია
const navBackdrop = document.querySelector('.nav-backdrop');
const logoBorder = document.querySelector('.bottom-border');
const navButtons = document.querySelectorAll('.site-nav-item');
const navLists = document.querySelectorAll('.site-nav-dropdown-content');

navButtons.forEach((navButton) => {
  navButton.addEventListener('click', () => {
    let nextSibling = navButton.nextElementSibling;
    logoBorder.classList.add('hidden');

    if (nextSibling.classList.contains('active')) {
      nextSibling.classList.remove('active');

      logoBorder.classList.remove('hidden');

      navBackdrop.style.height = '0px';
    } else {
      navLists.forEach((navList) => {
        navList.classList.remove('active');
      });

      nextSibling.classList.add('active');
      navBackdrop.style.height = nextSibling.offsetHeight + 24 + 'px';
    }
  });
});

// ნავიგაციის დახურვა ლინკზე დაკლიკებისას
navLists.forEach((navList) => {
  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');

      navBackdrop.style.height = '0px';

      logoBorder.classList.remove('hidden');
    });
  });
});

// ნავიგაციის დახურვა გარეთ დაკლიკებისას
document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('site-nav-item')) {
    navLists.forEach((navList) => {
      navList.classList.remove('active');

      navBackdrop.style.height = '0px';

      logoBorder.classList.remove('hidden');
    });
  }
});

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

// Foreign Affairs Tabs
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active');
    });
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    target.classList.add('active');
  });
});
