(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-op]'),
    closeModalBtn: document.querySelector('[data-modal-clos]'),
    modal: document.querySelector('[data-mod]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
