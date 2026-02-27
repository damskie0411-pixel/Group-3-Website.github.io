const bgImages = [
  "backgroundimages/SNOWMOUNTAIN.png",
  "backgroundimages/TUNDRA.png",
  "backgroundimages/DARK.png",
  "backgroundimages/LIGHT.png",
];

let bgCurrent = 0;
let showingBg1 = true;

const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");

bg1.style.backgroundImage = `url(${bgImages[bgCurrent]})`;

function switchBackground() {
  bgCurrent = (bgCurrent + 1) % bgImages.length;

  if (showingBg1) {
    bg2.style.backgroundImage = `url(${bgImages[bgCurrent]})`;
    bg2.style.opacity = 1;
    bg1.style.opacity = 0;
  } else {
    bg1.style.backgroundImage = `url(${bgImages[bgCurrent]})`;
    bg1.style.opacity = 1;
    bg2.style.opacity = 0;
  }

  showingBg1 = !showingBg1;
}

// Auto change every 6 seconds
setInterval(switchBackground, 6000);