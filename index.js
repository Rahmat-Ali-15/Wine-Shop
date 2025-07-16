const track = document.getElementById('carouselTrack');
const totalImages = 6;
let index = 0;

function slideNext() {
  index++;
  if (index >= totalImages) {
    index = 0;
  }
  const offset = -index * 100;
  track.style.transform = `translateX(${offset}%)`;
}

// change every 3 seconds
setInterval(slideNext, 5000);
