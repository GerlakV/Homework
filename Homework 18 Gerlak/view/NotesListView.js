class NotesListView {
  static CLASSES = {
    BOARD_CLASS: 'notes-board',
    NOTE_ITEM_CLASS: 'note-item',
    NOTE_TEXT_CLASS: 'note-description',
    DELETE_BTN_CLASS: 'delete-btn',
  };

  static boardTemplate = `<div class="notes-board"></div>`;

  static noteItemTemplate = `
  <div class="note-item" data-item-id="{itemId}">
    <textarea class="note-description">{description}</textarea>
    <button type="button" class="delete-btn">Delete</button>
  </div>`;

  el = null;
  #config = null;

  static generateItemHtml({ id, description }) {
    return NotesListView.noteItemTemplate
      .replaceAll('{itemId}', id)
      .replaceAll('{description}', description);
  }

  static getItemId(el) {
    return el.closest('div').dataset.itemId;
  }

  constructor(config) {
    this.#config = config;
    this.#initView();
  }

  #initView() {
    this.el = htmlToElement(NotesListView.boardTemplate);

    this.el.addEventListener('click', (e) => {
      if (e.target.classList.contains(NotesListView.CLASSES.DELETE_BTN_CLASS)) {
        this.deleteItem(NotesListView.getItemId(e.target));
      }
    });

    this.el.addEventListener('change', (e) => {
      if (e.target.classList.contains(NotesListView.CLASSES.NOTE_TEXT_CLASS)) {
        this.updateItem(NotesListView.getItemId(e.target), e.target.value);
      }
    });
  }

  renderList(list) {
    this.el.innerHTML = list.map(NotesListView.generateItemHtml).join('');
  }

  updateItem(id, value) {
    this.#config.onEdit(id, value);
  }

  deleteItem(id) {
    this.#config.onDelete(id);
  }
}
