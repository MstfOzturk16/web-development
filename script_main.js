let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const showSlide = (index) => {
  if (index >= totalSlides) slideIndex = 0;
  if (index < 0) slideIndex = totalSlides - 1;
  document.querySelector('.slider').style.transform = `translateX(-${slideIndex * 100}%)`;
};

// Otomatik geçiş
let slideInterval = setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 5000); // 5 saniyede bir

// Ok tuşları
document.querySelector('.prev').addEventListener('click', () => {
  slideIndex--;
  showSlide(slideIndex);
  resetInterval();
});

document.querySelector('.next').addEventListener('click', () => {
  slideIndex++;
  showSlide(slideIndex);
  resetInterval();
});

// Kullanıcı ok tuşlarına bastığında otomatik geçişi sıfırla
const resetInterval = () => {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
  }, 5000);
};

// Başlangıçta ilk resmi göster
showSlide(slideIndex);
