(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-mob-open]"),
      closeModalBtn: document.querySelector("[data-modal-mob-close]"),
      modal: document.querySelector("[data-mob-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();