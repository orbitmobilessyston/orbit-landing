document.addEventListener('DOMContentLoaded', () => {
  // --- MOBILE NAVIGATION MENU ---
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // --- HERO SLIDER CAROUSEL ---
  const track = document.getElementById('carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.getElementById('slide-next');
  const prevButton = document.getElementById('slide-prev');
  const dotsContainer = document.getElementById('carousel-dots');
  const dots = Array.from(dotsContainer.children);

  let currentIndex = 0;
  const slideCount = slides.length;
  let slideInterval;

  const updateSlidePosition = (index) => {
    track.style.transform = `translateX(-${index * 100}vw)`;
    
    // Manage active states for animations & styles
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
    
    currentIndex = index;
  };

  const nextSlide = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= slideCount) {
      nextIndex = 0;
    }
    updateSlidePosition(nextIndex);
  };

  const prevSlide = () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = slideCount - 1;
    }
    updateSlidePosition(prevIndex);
  };

  // Click Actions
  nextButton.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
  });

  prevButton.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
  });

  // Dot navigation
  dotsContainer.addEventListener('click', e => {
    const targetDot = e.target.closest('.dot');
    if (!targetDot) return;
    
    const targetIndex = parseInt(targetDot.dataset.slide, 10);
    updateSlidePosition(targetIndex);
    resetAutoplay();
  });

  // Autoplay functionality (slides automatically every 5s)
  const startAutoplay = () => {
    slideInterval = setInterval(nextSlide, 5000);
  };

  const resetAutoplay = () => {
    clearInterval(slideInterval);
    startAutoplay();
  };

  // Start initial autoplay
  startAutoplay();

  // --- CONTACT BRANCH MAP SWITCHER ---
  const branchSyston = document.getElementById('branch-card-syston');
  const branchLeicester = document.getElementById('branch-card-leicester');
  const mapIframe = document.getElementById('contact-map-iframe');
  const mapBranchTitle = document.getElementById('map-branch-title');
  const mapBranchAddress = document.getElementById('map-branch-address');
  const mapDirectionsBtn = document.getElementById('map-directions-btn');

  const branches = {
    syston: {
      title: "Orbit Mobiles Syston",
      address: "8 Town Square, Syston, Leicestershire, LE7 1GZ",
      mapUrl: "https://maps.app.goo.gl/3svjeAL4McvLhqTK9",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.8305335043465!2d-1.075994!3d52.6991531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879d944ede8d3b7%3A0x96e57c54c6f8471e!2sOrbit%20Mobiles%20Syston!5e0!3m2!1sen!2suk!4v1719140000000!5m2!1sen!2suk"
    },
    leicester: {
      title: "Orbit Mobiles Leicester",
      address: "222 Narborough Road, Leicester, LE3 2AN",
      mapUrl: "https://share.google/5F9slbvE9aoVmUz2h",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.385458392557!2d-1.1578795!3d52.6206013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487760c6d3b3c3b3%3A0x8e8e8e8e8e8e8e8e!2s222%20Narborough%20Rd%2C%20Leicester%20LE3%202AN%2C%20UK!5e0!3m2!1sen!2suk!4v1719140000000!5m2!1sen!2suk"
    }
  };

  const switchBranch = (branchKey) => {
    if (branchKey === 'syston') {
      branchSyston.classList.add('active');
      branchLeicester.classList.remove('active');
    } else {
      branchLeicester.classList.add('active');
      branchSyston.classList.remove('active');
    }
    
    const data = branches[branchKey];
    mapIframe.src = data.iframeSrc;
    mapBranchTitle.textContent = data.title;
    mapBranchAddress.textContent = data.address;
    mapDirectionsBtn.href = data.mapUrl;
  };

  if (branchSyston && branchLeicester && mapIframe) {
    branchSyston.addEventListener('click', () => switchBranch('syston'));
    branchLeicester.addEventListener('click', () => switchBranch('leicester'));
  }

});
