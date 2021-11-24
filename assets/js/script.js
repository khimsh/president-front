"use strict";

const header = document.querySelector("[data-site-header]");

// ნავიგაცია
const nav = document.querySelector("[data-navigation]");
const navContents = nav.querySelectorAll("[data-navigation-content");
const navBtns = nav.querySelectorAll("[data-navigation-toggle");

// ძიება
const toggleSearch = document.querySelector("[data-toggle-search]");
const searchBox = document.querySelector("[data-search]");

navBtns.forEach((navBtn) => {
  navBtn.addEventListener("click", () => {
    const target = navBtn.nextElementSibling;

    if (target.classList.contains("active")) {
      closeNav(nav, target);
      header.classList.remove("active");
    } else {
      navContents.forEach((navContent) => {
        closeNav(nav, navContent);
        header.classList.remove("active");
      });

      header.classList.add("active");
      target.classList.add("active");
      nav.style.height = target.offsetHeight + 122 + "px";
      nav.style.backgroundColor = "hsla(219, 65%, 8%, 0.9)";
    }
  });
});

toggleSearch.addEventListener("click", () => {
  searchBox.classList.toggle("active");

  if (searchBox.classList.contains("active")) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

document.addEventListener("click", (e) => {
  // დახურე ნავიგაცია გარეთ კლიკზე
  if (
    !e.target.classList.contains("site-nav__content") &&
    !e.target.classList.contains("site-nav__btn")
  ) {
    navContents.forEach((navContent) => {
      closeNav(nav, navContent);
    });
  }

  // დახურე ძიების ველი გარეთ დაკლიკებისას
  if (
    !e.target.classList.contains("site-header__search") &&
    !e.target.classList.contains("main-search") &&
    !e.target.classList.contains("main-search__input")
  ) {
    searchBox.classList.remove("active");
  }

  if (
    !e.target.classList.contains("site-nav__content") &&
    !e.target.classList.contains("site-nav__btn") &&
    !e.target.classList.contains("site-header__search") &&
    !e.target.classList.contains("main-search") &&
    !e.target.classList.contains("main-search__input")
  ) {
    header.classList.remove("active");
  }
});

function closeNav(nav, target) {
  target.classList.remove("active");
  nav.style.height = "100%";
  nav.style.backgroundColor = "transparent";
}

// მობილური ნავიგაცია
const toggleNavBtn = document.querySelector("[data-open-nav]");
const mobileNav = document.querySelector(".mobile-nav-wrapper");

toggleNavBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");

  if (mobileNav.classList.contains("active")) {
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

const mobileNavItems = document.querySelectorAll(".mobile-nav-dropdown");

mobileNavItems.forEach((mobileNavItem) => {
  mobileNavItem.querySelector("button").addEventListener("click", () => {
    const mobileNavContent = mobileNavItem.querySelector(
      ".mobile-nav-dropdown-content"
    );
    const arrowIcon = mobileNavItem.querySelector(".icon svg");

    mobileNavContent.classList.toggle("active");

    if (mobileNavContent.classList.contains("active")) {
      mobileNavContent.style.maxHeight = mobileNavContent.scrollHeight + "px";
      arrowIcon.style.transform = "rotate(180deg)";
    } else {
      mobileNavContent.style.maxHeight = 0;
      arrowIcon.style.transform = "rotate(0deg)";
    }
  });
});

// FAQ
if (document.querySelectorAll(".faq")) {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.querySelector("button").addEventListener("click", () => {
      faq.classList.toggle("active");

      const faqContent = faq.querySelector(".faq-content");
      const arrowIcon = faq.querySelector(".icon svg");

      if (faq.classList.contains("active")) {
        faqContent.style.maxHeight = faqContent.scrollHeight + "px";
        arrowIcon.style.transform = "rotate(180deg)";
      } else {
        faqContent.style.maxHeight = 0;
        arrowIcon.style.transform = "rotate(0deg)";
      }
    });
  });
}

// Foreign Affairs Tabs
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

// რეგიონების რუკა და მოდალი
if (document.querySelector(".modal-regions")) {
  const regions = document.querySelectorAll("[data-region]");
  const regionModal = document.querySelector(".modal-regions");
  const closeModalButton = document.querySelector("[data-close-modal]");

  regions.forEach((region) => {
    region.addEventListener("click", () => {
      regionModal.classList.add("active");
    });
  });

  regionModal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      regionModal.classList.remove("active");
    }
  });

  closeModalButton.addEventListener("click", () => {
    regionModal.classList.remove("active");
  });
}

// scroll to top
const scrollToTopButton = document.querySelector("[data-scroll-top]");
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Custom Video players
const players = document.querySelectorAll("[data-video-container]");

players.forEach((player) => {
  const toggle = player.querySelector("[data-video-togglePlay]");
  const video = player.querySelector("[data-video]");
  const currentTime = player.querySelector("[data-video-current]");
  const videoDuration = player.querySelector("[data-video-duration]");
  const muteBtn = player.querySelector("[data-video-toggleMute]");

  if (player.querySelector("[data-video-progress]")) {
    const progress = player.querySelector("[data-video-progress]");
    const progressBar = player.querySelector("[data-video-progressbar]");

    video.addEventListener("timeupdate", () => {
      handleTimeUpdate(video, progressBar);
    });

    function scrub(e) {
      const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
      video.currentTime = scrubTime;
    }

    let mousedown = false;
    progress.addEventListener("click", scrub);
    progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
    progress.addEventListener("mousedown", () => (mousedown = true));
    progress.addEventListener("mouseup", () => (mousedown = false));
  }

  toggle.addEventListener("click", () => {
    togglePlay(video);
  });

  video.onloadedmetadata = function () {
    videoDuration.textContent = formatTime(this.duration);
  };

  video.addEventListener("play", () => {
    updateButton(video, toggle);
  });

  video.addEventListener("pause", () => {
    updateButton(video, toggle);
  });

  video.addEventListener("timeupdate", () => {
    handleProgress(video, currentTime);
  });

  muteBtn.addEventListener("click", () => {
    const iconLine = muteBtn.querySelector(".line");
    mute(video, iconLine);
  });

  if (player.querySelector("[data-video-fullscreen]")) {
    player
      .querySelector("[data-video-fullscreen]")
      .addEventListener("click", () => {
        video
          .requestFullscreen()
          .then(function () {
            // element has entered fullscreen mode successfully
          })
          .catch(function (error) {
            // element could not enter fullscreen mode
          });
      });
  }
});

// მინი ვიდეო ფლეიერი
if (document.querySelector("[data-player-mini]")) {
  const miniPlayers = document.querySelectorAll("[data-player-mini]");

  miniPlayers.forEach((miniPlayer) => {
    const video = miniPlayer.querySelector("[data-video]");
    const playBtn = miniPlayer.querySelector("[data-play]");

    playBtn.addEventListener("click", () => {
      playVideo(video);
      playBtn.classList.add("hide");
    });

    video.addEventListener("click", () => {
      pauseVideo(video);
      playBtn.classList.remove("hide");
    });
  });
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  minutes = minutes >= 10 ? minutes : "0" + minutes;
  seconds = Math.floor(seconds % 60);
  seconds = seconds >= 10 ? seconds : "0" + seconds;
  return minutes + ":" + seconds;
}

function togglePlay(video) {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function playVideo(video) {
  video["play"]();
}

function pauseVideo(video) {
  video["pause"]();
}

function updateButton(video, toggle) {
  const icon = video.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function handleTimeUpdate(video, progress = null) {
  const percent = (video.currentTime / video.duration) * 100;
  progress.style.flexBasis = `${percent}%`;
}

function handleProgress(video, currentTime) {
  currentTime.textContent = formatTime(video.currentTime);
}

function mute(video, iconLine) {
  if (video.muted) {
    video.muted = false;
    iconLine.classList.add("hide");
  } else {
    video.muted = true;
    iconLine.classList.remove("hide");
  }
}

// აუდიო ფლეიერი
if (document.querySelector("[data-audio]")) {
  const players = document.querySelectorAll("[data-audio]");

  players.forEach((player) => {
    const audio = player.querySelector("[data-audio-src]");
    const togglePlayAudio = player.querySelector("[data-audio-togglePlay]");
    const currentTime = player.querySelector("[data-audio-current]");
    const audioDuration = player.querySelector("[data-audio-duration]");
    const progressBar = player.querySelector("[data-audio-progressbar]");
    const progressFilled = player.querySelector("[data-audio-filled]");

    audio.addEventListener("loadedmetadata", () => {
      const duration = audio.duration;
      audioDuration.textContent = formatTime(duration);
    });

    togglePlayAudio.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        togglePlayAudio.textContent = "❚ ❚";
      } else {
        audio.pause();
        togglePlayAudio.textContent = "►";
      }
    });

    progressBar.addEventListener("click", (e) => {
      const scrubTime = (e.offsetX / progressBar.offsetWidth) * audio.duration;
      audio.currentTime = scrubTime;
    });

    audio.addEventListener("timeupdate", () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      progressFilled.style.width = `${percent}%`;

      currentTime.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener("ended", function () {
      audio.currentTime = 0;
      togglePlayAudio.textContent = "►";
    });
  });
}

// Remove covid alert from dom
if (document.querySelector(".covid-close")) {
  document.querySelector(".covid-close").addEventListener("click", () => {
    document.querySelector(".covid").remove();
  });
}

// ფილტრები
if (document.querySelectorAll("[data-filter]")) {
  const filters = document.querySelectorAll("[data-filter]");

  filters.forEach((filter) => {
    const filterIcon = filter.querySelector(".filter__icon");
    const filterItems = filter.querySelectorAll("[data-filter-item]");
    const filterDisplay = filter.querySelector("[data-filter-display]");

    filter.addEventListener("click", (e) => {
      if (e.target.dataset.filter !== "toggle") return;

      filter.classList.toggle("open");

      if (filter.classList.contains("open")) {
        filterIcon.style.transform = "rotate(180deg)";
      } else {
        filterIcon.style.transform = "rotate(0deg)";
      }
    });

    filterItems.forEach((filterItem) => {
      filterItem.addEventListener("click", () => {
        let filterItemHtml = filterItem.innerHTML;
        filterDisplay.innerHTML = filterItemHtml;
        filter.classList.remove("open");
        filterIcon.style.transform = "rotate(0deg)";
      });
    });
  });
}

// კალენდრის ანიმაციები
if (document.querySelector(".events")) {
  const container = document.querySelector(".events");
  const progressbar = document.querySelector(".progressBar__filled");

  window.addEventListener("scroll", () => {
    animateProgressBar(container, progressbar);
  });
}

function animateProgressBar(container, progressBar) {
  let scrollDistance = -container.getBoundingClientRect().top;
  let progressBarHeight =
    (scrollDistance / container.getBoundingClientRect().height) * 100;
  let value = Math.floor(progressBarHeight);
  progressBar.style.height = `${value + 9}%`;
}

// TODO:სურათის გაშვება fullscreen

// გალერეის მოდალი
if (document.querySelector(".photo-gallery-modal")) {
  const galleryModal = document.querySelector(".photo-gallery-modal");
  const mainImage = document.querySelector("[data-main-image]");
  const imagesContainer = document.querySelector("[data-images]");
  const arrLeft = document.querySelector("[data-prev]");
  const arrRight = document.querySelector("[data-next]");
  const fullscreen = document.querySelector("[data-fullscreen]");
  const toggleGallery = document.querySelector("[data-toggle-gallery]");
  const closeModal = document.querySelector("[data-close-modal]");
  const countCurrent = document.querySelector("[data-count-current]");
  const countAll = document.querySelector("[data-count-all]");

  let counter = 0;
  countCurrent.textContent = counter + 1;

  let images = [
    {
      imgSrc: "https://lipsum.app/id/1/1024x768",
      imgDesc: "1",
    },
    {
      imgSrc: "https://lipsum.app/id/2/1024x768",
      imgDesc: "2",
    },
    {
      imgSrc: "https://lipsum.app/id/3/1024x768",
      imgDesc: "3",
    },
    {
      imgSrc: "https://lipsum.app/id/4/1024x768",
      imgDesc: "4",
    },
    {
      imgSrc: "https://lipsum.app/id/5/1024x768",
      imgDesc: "5",
    },
  ];

  images.forEach((image) => {
    let newImage = createImageTag(image.imgSrc, image.imgDesc);

    imagesContainer.appendChild(newImage);
  });

  imagesContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "img") {
      mainImage.src = e.target.src;
      mainImage.alt = e.target.alt;

      // Set counter to current image
      let obj = images.find((image) => image.imgSrc === e.target.src);
      let index = images.indexOf(obj);

      counter = index;
      countCurrent.textContent = counter + 1;
    }
  });

  // Set the displayed image
  mainImage.src = images[counter].imgSrc;
  mainImage.alt = images[counter].imgDesc;

  // Go to Previous image
  arrLeft.addEventListener("click", () => {
    counter = counter - 1;
    countCurrent.textContent = counter + 1;

    if (counter < 0) {
      counter = images.length - 1;
      countCurrent.textContent = counter + 1;
    }
    mainImage.src = images[counter].imgSrc;
  });

  // Go to Next image
  arrRight.addEventListener("click", () => {
    counter = counter + 1;
    countCurrent.textContent = counter + 1;
    if (counter > images.length - 1) {
      counter = 0;
      countCurrent.textContent = counter + 1;
    }

    mainImage.src = images[counter].imgSrc;
  });

  // Show all images at the bottom
  toggleGallery.addEventListener("click", () => {
    imagesContainer.classList.toggle("hide");
  });

  // Enter fullscreen
  fullscreen.addEventListener("click", () => {
    galleryModal
      .requestFullscreen()
      .then(function () {
        // element has entered fullscreen mode successfully
      })
      .catch(function (error) {
        // element could not enter fullscreen mode
      });
  });

  // Set all images count
  countAll.textContent = images.length;

  // Close modal
  closeModal.addEventListener("click", () => {
    galleryModal.classList.remove("active");
  });

  // Open modal
  document
    .querySelector("[data-open-gallery]")
    .addEventListener("click", () => {
      galleryModal.classList.add("active");
    });

  function createImageTag(src, desc) {
    let image = document.createElement("img");
    image.src = src;
    image.alt = desc;

    return image;
  }
}
