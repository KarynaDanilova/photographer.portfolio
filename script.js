const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
}))

// --- Modal logic ---
const categories = document.querySelectorAll('.category');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

categories.forEach(category => {
  category.addEventListener('click', () => {
    const modalId = 'modal-' + category.id;
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'flex';
  });
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.target.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', e => {
  modals.forEach(modal => {
    if (e.target === modal) modal.style.display = 'none';
  });
});

// --- Lightbox logic ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

let currentImages = [];
let currentIndex = 0;

document.querySelectorAll('.modal-gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const parentGallery = img.closest('.modal-gallery');
    currentImages = Array.from(parentGallery.querySelectorAll('img'));
    currentIndex = currentImages.indexOf(img);

    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

closeLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

      document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
          if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % currentImages.length;
            lightboxImg.src = currentImages[currentIndex].src;
          }
          if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            lightboxImg.src = currentImages[currentIndex].src;
          }
        }
      });