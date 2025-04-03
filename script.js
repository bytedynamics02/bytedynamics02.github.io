// Initialize AOS animations
AOS.init();

if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 600,
      once: true
    });
  } else {
    console.warn('AOS library not loaded.');
  }

// Countdown Timer Script
(function(){
  // Set the date and time of the event (Year, Month(0-based), Day, Hours, Minutes, Seconds)
  const eventDate = new Date(2025, 5, 1, 7, 30, 0).getTime();  // June 1, 2025 07:30:00 (Month is 5 for June because Jan=0)
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      // If the event time has passed
      clearInterval(interval);
      document.getElementById('countdown').innerHTML = "<div>🎉 <small>Event Day!</small></div>";
      return;
    }
    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    // Update the HTML elements
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }

  // initial call to display immediate values, then set interval
  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);

  
})();



document.addEventListener("DOMContentLoaded", function () {
  // Safe AOS initialization
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 600,
      once: true
    });
  } else {
    console.warn('AOS library not loaded.');
  }

  const modal = document.getElementById('sizeChartModal');
  const openBtn = document.getElementById('viewSizeChartBtn');
  const closeBtn = document.querySelector('#sizeChartModal .close');
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabImages = document.querySelectorAll('.tab-content img');

  if (!openBtn) {
    console.error("⚠️ Button with ID 'viewSizeChartBtn' not found!");
  } else {
    openBtn.addEventListener('click', function () {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  }

  if (!closeBtn) {
    console.error("⚠️ Close button not found!");
  } else {
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });

  tabLinks.forEach(button => {
    button.addEventListener('click', () => {
      tabLinks.forEach(btn => btn.classList.remove('active'));
      tabImages.forEach(img => img.classList.remove('active'));
      button.classList.add('active');
      const target = button.getAttribute('data-tab');
      const targetImg = document.getElementById('tab-' + target);
      if (targetImg) {
        targetImg.classList.add('active');
      }
    });
  });
});