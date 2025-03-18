function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

window.onclick = function (event) {
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      closeModal(modals[i].id);
    }
  }
};

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const openModals = document.querySelectorAll('.modal.show');
    openModals.forEach((modal) => {
      closeModal(modal.id);
    });
  }
});
