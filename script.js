// menu open close script 
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", ()=>{
    document.body.classList.toggle("show-mobile-menu")
})

menuCloseButton.addEventListener("click", ()=>menuOpenButton.click());




//slider script
  const wrapper = document.querySelector(".testimonial-list");
  const slides = document.querySelectorAll(".testimonial");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let currentIndex = 0;

  function getVisibleCount() {
    const width = window.innerWidth;
    if (width >= 900) return 3;
    if (width >= 640) return 2;
    return 1;
  }

  function updateSlider() {
    const visibleCount = getVisibleCount();
    const totalSlides = slides.length;
    const slideWidth = wrapper.clientWidth / visibleCount;
    const offset = -currentIndex * slideWidth;

    wrapper.style.transform = `translateX(${offset}px)`;
  }

  nextBtn.addEventListener("click", () => {
    const visibleCount = getVisibleCount();
    const maxIndex = slides.length - visibleCount;
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  // Auto-slide
  setInterval(() => {
    const visibleCount = getVisibleCount();
    const maxIndex = slides.length - visibleCount;
    currentIndex = (currentIndex + 1) % (maxIndex + 1);
    updateSlider();
  }, 4000);

  // Resize listener to handle screen changes
  window.addEventListener("resize", updateSlider);

  // Initial position
  updateSlider();


