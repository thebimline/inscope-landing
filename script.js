const modal = document.getElementById('contactModal');
const openBtns = document.querySelectorAll('#openContact, #openContactHero');
const closeBtn = document.getElementById('closeContact');

openBtns.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

/* =========================
   CASE STUDY LIGHTBOX
========================= */

const lightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxThumbs = document.getElementById('lightboxThumbs');

const closeButton = document.querySelector('.image-lightbox-close');
const prevButton = document.querySelector('.image-lightbox-prev');
const nextButton = document.querySelector('.image-lightbox-next');

const lightboxTriggers = Array.from(document.querySelectorAll('.lightbox-trigger'));

let currentLightboxIndex = 0;

function updateLightbox() {
    const currentImage = lightboxTriggers[currentLightboxIndex];

    lightboxImage.src = currentImage.src;
    lightboxImage.alt = currentImage.alt;

    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${lightboxTriggers.length}`;
    lightboxTitle.textContent = currentImage.alt;

    document.querySelectorAll('.image-lightbox-thumb').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentLightboxIndex);
    });
}

function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

function showNextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % lightboxTriggers.length;
    updateLightbox();
}

function showPreviousImage() {
    currentLightboxIndex =
        (currentLightboxIndex - 1 + lightboxTriggers.length) % lightboxTriggers.length;

    updateLightbox();
}

if (lightbox && lightboxImage && lightboxTriggers.length > 0) {

    lightboxTriggers.forEach((img, index) => {

        img.addEventListener('click', () => {
            openLightbox(index);
        });

        const thumb = document.createElement('div');
        thumb.className = 'image-lightbox-thumb';
        thumb.innerHTML = `
            <img src="${img.src}" alt="${img.alt}">
            <span>${img.alt}</span>
        `;

        thumb.addEventListener('click', (e) => {
            e.stopPropagation();
            currentLightboxIndex = index;
            updateLightbox();
        });

        lightboxThumbs.appendChild(thumb);

    });

    closeButton.addEventListener('click', closeLightbox);

    nextButton.addEventListener('click', (e) => {
        e.stopPropagation();
        showNextImage();
    });

    prevButton.addEventListener('click', (e) => {
        e.stopPropagation();
        showPreviousImage();
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPreviousImage();
    });

}

document.getElementById("open-case-study-gallery").addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(".case-study-two .cs-front").click();
});
