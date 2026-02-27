const slides = document.getElementById("slides");
const images = slides.querySelectorAll("img");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const dotsContainer = document.getElementById("dots");

let index = 1;
let autoSlide;
const speed = 5000;
const total = images.length;

/* starting position */
slides.style.transform = `translateX(-${index * 100}%)`;

/* create dots (exclude clones) */
for (let i = 0; i < total - 2; i++) {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    index = i + 1;
    moveSlider();
  });
  dotsContainer.appendChild(dot);
}

const dots = dotsContainer.querySelectorAll("span");

function updateDots() {
  dots.forEach(d => d.classList.remove("active"));
  let realIndex = index - 1;

  if (realIndex >= dots.length) realIndex = 0;
  if (realIndex < 0) realIndex = dots.length - 1;

  dots[realIndex].classList.add("active");
}

function moveSlider() {
  slides.style.transition = "transform 0.8s ease";
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

nextBtn.onclick = () => {
  if (index >= total - 1) return;
  index++;
  moveSlider();
};

prevBtn.onclick = () => {
  if (index <= 0) return;
  index--;
  moveSlider();
};

/* infinite loop fix */
slides.addEventListener("transitionend", () => {
  if (index === total - 1) {
    slides.style.transition = "none";
    index = 1;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  if (index === 0) {
    slides.style.transition = "none";
    index = total - 2;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }
});

/* swipe */
let startX = 0;

slides.addEventListener("touchstart", (e) => {
  clearInterval(autoSlide);
  startX = e.touches[0].clientX;
});

slides.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) {
    index++;
    moveSlider();
  }

  if (endX - startX > 50) {
    index--;
    moveSlider();
  }

  startAuto();
});

/* pause when holding */
slides.addEventListener("mousedown", () => clearInterval(autoSlide));
slides.addEventListener("mouseup", startAuto);

/* auto slide */
function startAuto() {
  autoSlide = setInterval(() => {
    index++;
    moveSlider();
  }, speed);
}

updateDots();
startAuto();