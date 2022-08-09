const menuBars = document.querySelector('.menu-bars');
const closeBtn = document.querySelector('.closeBtn');
const modalContainer = document.querySelector('.modalContainer');

function showMenu() {
  modalContainer.style.display = 'block';
}

menuBars.addEventListener('click', showMenu);

function closeModal() {
  modalContainer.style.display = 'none';
}

window.onclick = function global(event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
};

closeBtn.addEventListener('click', closeModal);