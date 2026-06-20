const modal = document.getElementById('contactModal');
const openBtn = document.getElementById('openContact');
const closeBtn = document.getElementById('closeContact');

openBtn.addEventListener('click', () => {
  modal.classList.add('active');
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
const closeButton = document.querySelector('.image-lightbox-close');
const prevButton = document.querySelector('.image-lightbox-prev');
const nextButton = document.querySelector('.image-lightbox-next');

const lightboxTriggers = Array.from(document.querySelectorAll('.lightbox-trigger'));

let currentLightboxIndex = 0;

function openLightbox(index) {
    currentLightboxIndex = index;
    lightboxImage.src = lightboxTriggers[currentLightboxIndex].src;
    lightboxImage.alt = lightboxTriggers[currentLightboxIndex].alt;
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

function showNextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % lightboxTriggers.length;
    lightboxImage.src = lightboxTriggers[currentLightboxIndex].src;
    lightboxImage.alt = lightboxTriggers[currentLightboxIndex].alt;
}

function showPreviousImage() {
    currentLightboxIndex =
        (currentLightboxIndex - 1 + lightboxTriggers.length) % lightboxTriggers.length;

    lightboxImage.src = lightboxTriggers[currentLightboxIndex].src;
    lightboxImage.alt = lightboxTriggers[currentLightboxIndex].alt;
}

if (lightbox && lightboxImage && lightboxTriggers.length > 0) {

    lightboxTriggers.forEach((img, index) => {

        img.addEventListener('click', () => {
            openLightbox(index);
        });

    });

    if (closeButton) {
        closeButton.addEventListener('click', closeLightbox);
    }

    if (nextButton) {
        nextButton.addEventListener('click', (e) => {
            e.stopPropagation();
            showNextImage();
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', (e) => {
            e.stopPropagation();
            showPreviousImage();
        });
    }

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        }

        if (e.key === 'ArrowRight') {
            showNextImage();
        }

        if (e.key === 'ArrowLeft') {
            showPreviousImage();
        }
    });

}
