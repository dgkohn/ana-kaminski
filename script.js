// Pequena animação de fade-in para as seções
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section, header').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      el.style.transition = 'opacity 1s, transform 1s';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 200);
  });

  // Troca suave das imagens de fundo do banner principal
  const bgImgs = document.querySelectorAll('.profile-bg-img');
  let bgIndex = 0;
  // Garante que todas comecem opacas, exceto a primeira
  bgImgs.forEach((img, i) => {
    img.style.opacity = (i === 0) ? '0.18' : '0';
  });
  setInterval(() => {
    bgImgs.forEach((img, i) => {
      img.style.opacity = (i === bgIndex) ? '0.18' : '0';
    });
    bgIndex = (bgIndex + 1) % bgImgs.length;
  }, 2000);

  // Carrossel de obras
  const carouselImages = document.querySelectorAll('.carousel-images img');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let currentIndex = 0;

  function showImage(index) {
    carouselImages.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }
  if (carouselImages.length) {
    showImage(currentIndex);
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
      showImage(currentIndex);
    });
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % carouselImages.length;
      showImage(currentIndex);
    });
  }

  // Rastro de brilhos do cursor
  const sparkleTrail = document.getElementById('sparkle-trail');
  document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    // Posição inferior direita do cursor
    sparkle.style.left = `${e.clientX + 20}px`;
    sparkle.style.top = `${e.clientY + 20}px`;
    sparkleTrail.appendChild(sparkle);
    setTimeout(() => {
      sparkle.remove();
    }, 500);
  });
});
    // Cursor animado customizado
    const customCursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', (e) => {
      customCursor.style.left = `${e.clientX + 10}px`;
      customCursor.style.top = `${e.clientY + 10}px`;
    });
