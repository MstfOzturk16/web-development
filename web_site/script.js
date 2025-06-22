setLanguage('tr');
// Dil Çeviri Verisi
const translations = {
  tr: {
    hizmet1: "Bireysel Terapi",
    hizmet2: "Çocuk ve Ergen Terapisi",
    hizmet3: "EMDR Terapisi",
    hizmet4: "Aile Danışmanlığı",
    hizmet5: "Bağımlılık Danışmanlığı",
    hizmet6: "Psikolojik Testler",

    kategori1: "Yetişkin Psikolojisi",
    kategori2: "Gelişim Desteği",
    kategori3: "Travma Odaklı",
    kategori4: "İlişki Yönetimi",
    kategori5: "Alışkanlık Kontrolü",
    kategori6: "Değerlendirme",

    aciklama1: "Stres, kaygı, depresyon gibi konularda bireysel destek sunuyoruz.",
    aciklama2: "Çocukların ve ergenlerin duygusal ve davranışsal gelişimini destekliyoruz.",
    aciklama3: "Geçmişteki travmaların etkisini azaltmaya yönelik terapi yöntemi.",
    aciklama4: "Aile bireyleri arasındaki iletişim ve ilişki sorunlarına çözüm üretiyoruz.",
    aciklama5: "Madde, teknoloji ve davranışsal bağımlılıklar üzerine özel danışmanlık.",
    aciklama6: "Bilişsel ve duygusal durumu ölçmek için bilimsel test uygulamaları.",
    title: "Psikolojik Danışmanlık",
    navHome: "Anasayfa",
    navServices: "Hizmetler",
    navAppointment: "Randevu",
    navContact: "İletişim",
    heroText: "Ruh sağlığınız için güvenilir destek...",
    sectionServices: "Hizmetlerimiz",
    hizmet1: "Bireysel Terapi",
    kategori1: "Yetişkin Psikolojisi",
    aciklama1: "Stres, kaygı, depresyon gibi konularda bireysel destek sunuyoruz.",
    sectionAppointment: "Randevu Alın",
    formName: "Ad Soyad",
    formEmail: "E-posta",
    formPhone: "Telefon",
    formSubmit: "Gönder",
    footerRights: "Tüm hakları saklıdır.",
    footerLinks: "Bağlantılar",
    footerContact: "İletişim",
    footerNote: "Bu web sitesi bilgi amaçlıdır."
  },
  en: {
    hizmet1: "Individual Therapy",
    hizmet2: "Child and Adolescent Therapy",
    hizmet3: "EMDR Therapy",
    hizmet4: "Family Counseling",
    hizmet5: "Addiction Counseling",
    hizmet6: "Psychological Tests",

    kategori1: "Adult Psychology",
    kategori2: "Developmental Support",
    kategori3: "Trauma Focused",
    kategori4: "Relationship Management",
    kategori5: "Habit Control",
    kategori6: "Assessment",

    aciklama1: "We offer individual support for stress, anxiety and depression.",
    aciklama2: "We support children's and adolescents' emotional and behavioral development.",
    aciklama3: "Therapy method to reduce the impact of past traumas.",
    aciklama4: "We solve communication and relationship problems within families.",
    aciklama5: "Special counseling for substance, technology and behavioral addictions.",
    aciklama6: "Scientific tests to assess cognitive and emotional status.",
    title: "Psychological Counseling",
    navHome: "Home",
    navServices: "Services",
    navAppointment: "Appointment",
    navContact: "Contact",
    heroText: "Reliable support for your mental health...",
    sectionServices: "Our Services",
    hizmet1: "Individual Therapy",
    kategori1: "Adult Psychology",
    aciklama1: "We offer individual support for stress, anxiety, and depression.",
    sectionAppointment: "Make an Appointment",
    formName: "Full Name",
    formEmail: "Email",
    formPhone: "Phone",
    formSubmit: "Submit",
    footerRights: "All rights reserved.",
    footerLinks: "Links",
    footerContact: "Contact",
    footerNote: "This website is for informational purposes only."
  }
};


// Menü Aç/Kapa Fonksiyonu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Dil Değiştirici Fonksiyon
function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}



// Ana Kodlar: Hepsi tek bir DOMContentLoaded içinde
document.addEventListener("DOMContentLoaded", function () {
  // 👉 1. Typewriter Efekti
  const text = "Ruh sağlığınız için güvenilir destek...";
  const target = document.getElementById("typing-text");
  let index = 0;
  function typeEffect() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 80);
    }
  }
  typeEffect();

  // 👉 2. Slider
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const slider = document.querySelector('.slider');

  function showSlide(index) {
    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  let slideInterval = setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
  }, 5000);

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      slideIndex++;
      showSlide(slideIndex);
    }, 5000);
  }

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

  showSlide(slideIndex);

  // 👉 3. Form Doğrulama
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const phone = this.phone.value.trim();

      if (!name || !email || !phone) {
        alert("Lütfen tüm gerekli alanları doldurun.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Geçerli bir e-posta adresi girin.");
        return;
      }

      alert("Mesajınız alındı, teşekkür ederiz!");
      setTimeout(() => {
        window.location.href = "tesekkur.html";
      }, 2000);
    });
  }
});


  // Typing Effect + Otomatik Kaybolma
  const typingText = document.getElementById("typing-text");
  const message = "Ruh sağlığınız için güvenilir destek...";
  let index = 0;

  function typeEffect() {
    if (index < message.length) {
      typingText.textContent += message.charAt(index);
      index++;
      setTimeout(typeEffect, 70);
    }
  }

  typeEffect();

  setTimeout(() => {
    typingText.style.opacity = "0";
  }, 5000);


  let currentLang = 'tr';

 function toggleLanguage() {
  const currentLang = localStorage.getItem("lang") || "tr";
  const newLang = currentLang === "tr" ? "en" : "tr";
  setLanguage(newLang);
}



document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "tr";
  setLanguage(savedLang);
});

