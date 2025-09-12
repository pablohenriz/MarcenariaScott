const track = document.getElementById('track');
  const slides = document.querySelectorAll('.slide');
  const indicators = document.getElementById('indicators');
  let index = 0;
  let interval;

  // criar bolinhas
  slides.forEach((_, i) => {
    const span = document.createElement('span');
    if (i === 0) span.classList.add('active');
    span.addEventListener('click', () => {
      index = i;
      updateCarousel();
      resetAutoPlay();
    });
    indicators.appendChild(span);
  });

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.indicators span').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function autoPlay() {
    interval = setInterval(() => {
      index = (index + 1) % slides.length;
      updateCarousel();
    }, 5000); // muda a cada 3 segundos
  }

  function resetAutoPlay() {
    clearInterval(interval);
    autoPlay();
  }

  autoPlay();
