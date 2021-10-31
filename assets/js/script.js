'use strict';
import Select from './select.js';

// ნავიგაცია
const siteHeader = document.querySelector('.site-header');
const navBackdrop = document.querySelector('.nav-backdrop');
const logoBorder = document.querySelector('.bottom-border');
const navBar = document.querySelector('.site-nav-list');
const navLists = document.querySelectorAll('.site-nav-dropdown-content');

const timelineIN = gsap.timeline();
const timelineOut = gsap.timeline();
const timelineOut2 = gsap.timeline();

navBar.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() != 'button') return;

  let navItem = e.target.nextElementSibling;

  if (navItem.classList.contains('active')) {
    // if the nav is expanded

    navItem.classList.remove('active');

    timelineOut
      .to(navItem, {
        duration: 0.2,
        opacity: 0,
      })
      .to(navBackdrop, {
        duration: 0.3,
        height: 0,
      })
      .to(siteHeader, {
        duration: 0.2,
        background: 'hsla(219, 65%, 8%, 0.4)',
      })
      .to(
        logoBorder,
        {
          duration: 0.2,
          background: 'hsla(219, 65%, 8%, .4)',
        },
        '<'
      );
  } else {
    // if the nav is collapsed
    navLists.forEach((navList) => {
      navList.classList.remove('active');
      gsap.to(navList, {
        duration: 0.2,
        opacity: 0,
      });
    });

    navItem.classList.add('active');

    timelineIN
      .to(navBackdrop, {
        duration: 0.3,
        height: navItem.offsetHeight + 24 + 'px',
      })
      .to(
        logoBorder,
        {
          duration: 0.3,
          background: 'hsla(219, 65%, 8%, 1)',
        },
        '<'
      )
      .to(
        siteHeader,
        {
          duration: 0.3,
          background: 'hsla(219, 65%, 8%, 1)',
        },
        '<'
      )
      .to(navItem, {
        duration: 0.3,
        opacity: 1,
      });
  }
});

// ნავიგაციის დახურვა გარეთ დაკლიკებისას
document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('site-nav-item')) {
    navLists.forEach((item) => {
      if (!item.classList.contains('active')) return;

      item.classList.remove('active');

      timelineOut2
        .to(item, {
          duration: 0.2,
          opacity: 0,
        })
        .to(navBackdrop, {
          duration: 0.3,
          height: 0,
        })
        .to(siteHeader, {
          duration: 0.2,
          background: 'hsla(219, 65%, 8%, 0.4)',
        })
        .to(
          logoBorder,
          {
            duration: 0.2,
            background: 'hsla(219, 65%, 8%, .4)',
          },
          '<'
        );
    });
  }
});

// მობილური ნავიგაცია
const toggleNavBtn = document.querySelector('[data-open-nav]');
const mobileNav = document.querySelector('.mobile-nav-wrapper');

toggleNavBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('active');

  if (mobileNav.classList.contains('active')) {
    toggleNavBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="23.334" height="23.335" viewBox="0 0 23.334 23.335">
      <g id="Group_1596" data-name="Group 1596" transform="translate(-1151.439 -27.439)">
        <line id="Line_8" data-name="Line 8" x2="30" transform="translate(1152.5 49.713) rotate(-45)" fill="none" stroke="#c81717" stroke-miterlimit="10" stroke-width="3"/>
        <line id="Line_9" data-name="Line 9" x2="30" transform="translate(1152.5 28.5) rotate(45)" fill="none" stroke="#c81717" stroke-miterlimit="10" stroke-width="3"/>
      </g>
    </svg>
    `;
  } else {
    toggleNavBtn.innerHTML = `
   <svg id="menu" xmlns="http://www.w3.org/2000/svg" width="30" height="21.375" viewBox="0 0 30 21.375">
      <g id="Group_414" data-name="Group 414" transform="translate(227.839 -15.317)">
        <line id="Line_8" data-name="Line 8" x2="30" transform="translate(-227.839 16.817)" fill="none" stroke="#c81717" stroke-miterlimit="10" stroke-width="3"/>
        <line id="Line_9" data-name="Line 9" x2="30" transform="translate(-227.839 26.005)" fill="none" stroke="#c81717" stroke-miterlimit="10" stroke-width="3"/>
        <line id="Line_10" data-name="Line 10" x2="18" transform="translate(-227.839 35.192)" fill="none" stroke="#c81717" stroke-miterlimit="10" stroke-width="3"/>
      </g>
    </svg>
   `;
  }
});

const mobileNavItems = document.querySelectorAll('.mobile-nav-dropdown');

mobileNavItems.forEach((mobileNavItem) => {
  mobileNavItem.querySelector('button').addEventListener('click', () => {
    const mobileNavContent = mobileNavItem.querySelector(
      '.mobile-nav-dropdown-content'
    );
    const arrowIcon = mobileNavItem.querySelector('.icon svg');

    mobileNavContent.classList.toggle('active');

    if (mobileNavContent.classList.contains('active')) {
      mobileNavContent.style.maxHeight = mobileNavContent.scrollHeight + 'px';
      arrowIcon.style.transform = 'rotate(180deg)';
    } else {
      mobileNavContent.style.maxHeight = 0;
      arrowIcon.style.transform = 'rotate(0deg)';
    }
  });
});

// Header Search კომპონენტი
const toggleSearch = document.querySelector('[data-toggle-search]');
const searchComponent = document.querySelector('[data-search-component]');

toggleSearch.addEventListener('click', () => {
  searchComponent.classList.toggle('active');

  if (searchComponent.classList.contains('active')) {
    toggleSearch.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="23.334" height="23.335" viewBox="0 0 23.334 23.335">
      <g id="Group_1596" data-name="Group 1596" transform="translate(-1151.439 -27.439)">
        <line id="Line_8" data-name="Line 8" x2="30" transform="translate(1152.5 49.713) rotate(-45)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/>
        <line id="Line_9" data-name="Line 9" x2="30" transform="translate(1152.5 28.5) rotate(45)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/>
      </g>
    </svg>
    `;
  } else {
    toggleSearch.innerHTML = `
    <svg id="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22.001">
      <g id="Group_392" data-name="Group 392" transform="translate(-1383.092 -45.604)">
        <g id="Group_159" data-name="Group 159">
          <path id="Path_583" data-name="Path 583" d="M1392.725,45.6a9.634,9.634,0,1,0,6.117,17.062l4.656,4.666a.934.934,0,0,0,1.321-1.32l-4.666-4.656a9.623,9.623,0,0,0-7.428-15.752Zm0,1.865a7.768,7.768,0,1,1-7.769,7.769A7.755,7.755,0,0,1,1392.725,47.469Z"/>
        </g>
      </g>
    </svg>
   `;
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

// რეგიონების რუკა და მოდალი
if (document.querySelector('.modal-regions')) {
  const regions = document.querySelectorAll('[data-region]');
  const regionModal = document.querySelector('.modal-regions');
  const closeModalButton = document.querySelector('[data-close-modal]');

  regions.forEach((region) => {
    region.addEventListener('click', () => {
      regionModal.classList.add('active');
    });
  });

  regionModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      regionModal.classList.remove('active');
    }
  });

  closeModalButton.addEventListener('click', () => {
    regionModal.classList.remove('active');
  });
}

// scroll to top
const scrollToTopButton = document.querySelector('[data-scroll-top]');
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Custom Video players
const players = document.querySelectorAll('.video-banner');

players.forEach((player) => {
  const toggle = player.querySelector('[data-video-togglePlay]');
  const video = player.querySelector('[data-video]');
  const currentTime = player.querySelector('[data-video-current]');
  const muteBtn = player.querySelector('[data-video-toggleMute]');

  toggle.addEventListener('click', () => {
    togglePlay(video);
  });

  video.addEventListener('play', () => {
    updateButton(video, toggle);
  });
  video.addEventListener('pause', () => {
    updateButton(video, toggle);
  });
  video.addEventListener('timeupdate', () => {
    handleProgress(video, currentTime);
  });

  muteBtn.addEventListener('click', () => {
    mute(video);
  });
});

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  minutes = minutes >= 10 ? minutes : '0' + minutes;
  seconds = Math.floor(seconds % 60);
  seconds = seconds >= 10 ? seconds : '0' + seconds;
  return minutes + ':' + seconds;
}

function togglePlay(video) {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton(video, toggle) {
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function handleProgress(video, currentTime) {
  // const percent = (video.currentTime / video.duration) * 100;
  // progressBar.style.flexBasis = `${percent}%`;
  currentTime.textContent = formatTime(video.currentTime);
}

function mute(video) {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
}

//TODO: Autoplay active hero slider video

//TODO: Custom Audio Player

// Remove covid alert from dom
document.querySelector('.covid-close').addEventListener('click', () => {
  document.querySelector('.covid').remove();
});
