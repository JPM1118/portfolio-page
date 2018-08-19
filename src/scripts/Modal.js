class Modal {
  constructor() {
    this.openModalButton = document.querySelector(".open-modal");
    this.modal = document.querySelector(".modal");
    this.closeModalButton = document.querySelector(".modal__close-modal");

    this.events();
  }

  events() {
    this.openModalButton.addEventListener("click", this.openModal.bind(this));
    this.closeModalButton.addEventListener("click", this.closeModal.bind(this));
  }

  openModal(e) {
    this.modal.classList.add("modal--is-visible");
  }

  closeModal() {
    this.modal.classList.remove("modal--is-visible");
  }
}

export default Modal;
