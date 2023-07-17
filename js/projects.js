// First load actions
const titleDiv = document.querySelector('#titleDiv');
const projectSlides = document.querySelectorAll('.project-slide');
titleDiv.style.display = 'none';
projectSlides.forEach(slide => slide.style.display = 'none');

// Show the first content without animations (reduce lag)
showTitleNoFade();

function showTitleNoFade() {
  titleDiv.style.display = 'block';
  document.querySelector('.scroll-down-zone').style.opacity = '1';
}

function showTitle() {
  titleDiv.style.display = 'block';
  $('#titleDiv').fadeToggle(1000, 'swing');
  document.querySelector('.scroll-down-zone').style.opacity = '1';
}

// Initialize fullpage with event functions
$('#fullpage').fullpage({
  licenseKey: 'BCE59474-1B6147ED-BFCF5E52-0AE9FEC4',
  setAllowScrolling: true,
  autoScrolling: true,
  scrollOverflow: true,
  // Leaving the current section
  onLeave: function (index, nextIndex, direction) {
    if (index.index === 0 && nextIndex.index === 1 && direction === 'down') {
      document.querySelector('.scroll-down-zone').style.opacity = '0';
      document.querySelector('#projectHeart').classList.toggle('heartbeat');
      document.querySelector('#projectHeart').style.width = '400vh';
      document.querySelector('#projectHeart').style.marginTop = '100vh';
      document.querySelectorAll('.fp-controlArrow').forEach(arrow => arrow.style.display = 'none');
    }
    if (index.index === 1 && nextIndex.index === 0 && direction === 'up') {
      document.querySelector('#section1').style.backgroundColor = '';
      document.querySelector('#projectHeart').style.display = '';
      document.querySelector('#projectHeart').style.width = '4vh';
      document.querySelector('#projectHeart').style.marginTop = '3.5vh';
      projectSlides.forEach(slide => $(slide).fadeToggle(500, 'linear'));
      $('#header').css('background-color', '');
      document.querySelector('.go-back-arrow').classList.remove('show-flex');
      titleDiv.style.display = 'block';
      document.querySelector('.scroll-down-zone').style.opacity = '1';
    }
  },
  // Just landed on the current section
  afterLoad: function (anchorLink, index) {
    if (index.index === 1) {
      $.fn.fullpage.setAutoScrolling(true);
      fullpage_api.setAllowScrolling(false);
      document.querySelector('#section1').style.backgroundColor = 'rgb(206, 32, 28)';
      document.querySelector('#projectHeart').style.display = 'none';
      projectSlides.forEach(slide => $(slide).fadeToggle(500, 'swing'));
      document.querySelectorAll('.fp-controlArrow').forEach(arrow => arrow.style.display = 'block');
      document.querySelector('#androidETSMOBILE').style.height = '55vh';
      document.querySelector('#play-store-link').style.width = '165px';
      document.querySelector('#iosETSMOBILE').style.height = '35vh';
      document.querySelector('#app-store-link').style.width = '100px';
      $('#header').css('background-color', 'rgba(60, 2, 2, 0.44)');
      document.querySelector('#app-layer-1').style.transform = '';
      document.querySelector('#app-layer-3').style.transform = '';
      document.querySelector('.go-back-arrow').classList.add('show-flex');
      titleDiv.style.display = 'none';
    }
    if (index.index === 0) {
      fullpage_api.setAllowScrolling(true);
      document.querySelector('#projectHeart').classList.toggle('heartbeat');
      setTimeout(separateAppLayers, 750);
    }
  },
  // Leaving the current slide
  onSlideLeave: function (section, origin, destination, direction) {
    switch (destination.index) {
      case 0:
        document.getElementById('slideTitle').innerHTML = 'ÉTSMobile ';
        break;
      case 1:
        document.getElementById('slideTitle').innerHTML = 'ÉTSMap ';
        break;
      case 2:
        document.getElementById('slideTitle').innerHTML = 'API';
        break;
    }
  }
});

// In case the device is a touchscreen
document.addEventListener('touchstart', () => {
  document.querySelector('#arrow-prev').classList.add('is-touch');
  document.querySelector('#arrow-next').classList.add('is-touch');
});

// Event listeners
$('.go-back-arrow, #arrow-prev, #arrow-next, .scroll-down-zone').on('click', (event) => {
    console.log(event.target.classList);
  if (event.target.parentElement.classList.contains('go-back-arrow')) {
    fullpage_api.moveSectionUp();
  } else if (event.target.id === 'arrow-prev') {
    fullpage_api.moveSlideLeft();
  } else if (event.target.id === 'arrow-next') {
    fullpage_api.moveSlideRight();
  }
});

let scrollDistance = 0;

window.addEventListener('wheel', (event) => {
  scrollDistance += Math.abs(event.deltaY);
  if (scrollDistance >= 100) {
    if (event.deltaY < 0) {
      fullpage_api.moveSectionUp();
    }
    if (event.deltaY > 0) {
      fullpage_api.moveSectionDown();
    }
    scrollDistance = 0;
  }
});


/**
 * Modal handlers (open and close)
 */
$('.modal-close').on('click', () => {
  $('.modal-background').css('visibility', 'hidden');
  $('.modal-background').css('background-color', 'rgba(0,0,0,0)');
  $('.modal-platform').css('visibility', 'hidden');
  $('.modal-platform').css('opacity', '0');
});

$('#desktopGithubLinkETSMOBILE, #mobileGithubLink').on('click', () => {
  $('.modal-background').css('visibility', 'visible');
  $('.modal-background').css('background-color', '#0000004d');
  $('.modal-platform').css('visibility', 'visible');
  $('.modal-platform').css('opacity', '1');
});

/**
 * Help the user who's smart (or dumb) enough to try to click on the heart
 */
$('#projectHeart').on('click', () => {
  $.fn.fullpage.moveSectionDown();
  document.querySelector('#projectHeart').style.width = '600vh';
});

/**
 * Open up the menu bar when selected
 */
document.querySelector('#floatingToggle').addEventListener('click', () => {
  const goBackArrow = document.querySelector('.go-back-arrow');
  if (goBackArrow.style.top !== '') {
    goBackArrow.style.top = document.getElementsByClassName('go-back-arrow')[0].getBoundingClientRect().y;
  } else {
    goBackArrow.style.top = '';
  }
  document.querySelector('#nav-toggler').classList.toggle('active');
  $('#navToggleContent').slideToggle();
  if (document.querySelector('.fp-section.active').id === 'section0') {
    $('#header').toggleClass('back-color');
  } else {
    $('#header').toggleClass('back-color-red');
    $('#header').removeClass('back-color');
  }
});

/**
 * When hovering over a phone, make it become bigger and the other smaller (and when clicking when using a mobile device)
 */
$('#android-etsmobile-link').on('mouseover click', () => {
  document.querySelector('#androidETSMOBILE').style.height = '55vh';
  document.querySelector('#play-store-link').style.width = '165px';
  document.querySelector('#iosETSMOBILE').style.height = '35vh';
  document.querySelector('#app-store-link').style.width = '100px';
});

$('#ios-etsmobile-link').on('mouseover click', () => {
  document.querySelector('#iosETSMOBILE').style.height = '55vh';
  document.querySelector('#app-store-link').style.width = '165px';
  document.querySelector('#androidETSMOBILE').style.height = '35vh';
  document.querySelector('#play-store-link').style.width = '100px';
});

// Split the app layers
function separateAppLayers() {
  document.querySelector('#app-layer-1').style.transform = 'translate(3vh,2vh)';
  document.querySelector('#app-layer-3').style.transform = 'translate(-3vh,-2vh)';
}