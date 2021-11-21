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
    mute(video);
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

function mute(video) {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
}

// Custom Audio Player
if (document.querySelector("[data-audio]")) {
  const anthem = WaveSurfer.create({
    container: "#waveformAnthem",
    waveColor: "#D4D4D4",
    progressColor: "#c81717",
  });

  anthem.load("assets/video/audio.mp3");

  const audioCurrentTime = document.querySelector("[data-audio-current]");
  const audioDuration = document.querySelector("[data-audio-duration]");
  const audioTogglePlay = document.querySelector("[data-audio-togglePlay]");

  anthem.on("audioprocess", () => {
    // update current time
    audioCurrentTime.textContent = formatTime(anthem.getCurrentTime());
  });
  anthem.on("ready", () => {
    // set duration
    audioDuration.textContent = formatTime(anthem.getDuration());
  });

  audioTogglePlay.addEventListener("click", () => {
    if (anthem.isPlaying()) {
      anthem.pause();
      audioTogglePlay.textContent = "►";
    } else {
      anthem.play();
      audioTogglePlay.textContent = "❚ ❚";
    }
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
if (document.querySelector(".event")) {
  const lines = document.querySelectorAll(".event__line__fill");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animation = `fill-in 0.8s forwards ease-in`;
      }
    });
  });

  lines.forEach((line) => {
    observer.observe(line);
  });
}
