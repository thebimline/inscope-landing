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

if (lightbox && lightboxImage) {

    document.querySelectorAll('.lightbox-trigger').forEach(img => {

        img.addEventListener('click', () => {

            lightboxImage.src = img.src;
            lightbox.classList.add('active');

        });

    });

    if (closeButton) {

        closeButton.addEventListener('click', () => {

            lightbox.classList.remove('active');

        });

    }

    lightbox.addEventListener('click', (e) => {

        if (e.target === lightbox) {

            lightbox.classList.remove('active');

        }

    });

    document.addEventListener('keydown', (e) => {

        if (e.key === 'Escape') {

            lightbox.classList.remove('active');

        }

    });

}
