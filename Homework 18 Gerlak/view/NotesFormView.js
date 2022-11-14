class NotesFormView {
  el = null;
  #config = null;

  static formTemplate = `
  <form class="new-note-form">
    <button type="submit" class="add-btn">ADD</button>
  </form>`;

  constructor(config) {
    this.#config = config;
    this.#initView();
  }

  #initView() {
    this.el = htmlToElement(NotesFormView.formTemplate);

    this.el.addEventListener('submit', (e) => {
      this.submitForm(e);
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.#config.onSubmit('');
  }
}
