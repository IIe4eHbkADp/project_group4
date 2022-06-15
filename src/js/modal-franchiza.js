(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-oppening]'),
    closeModalBtn: document.querySelector('[data-modal-clossing]'),
    modal: document.querySelector('[data-moddaling]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
