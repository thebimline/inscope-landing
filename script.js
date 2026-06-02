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
