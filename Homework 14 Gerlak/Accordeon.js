class Accordion {
    static CLASSES = {
      ITEM: 'accordion-item',
      TITLE: 'accordion-title',
      BODY: 'accordion-body',
      ACTIVE: 'active',
    };

    #el = null;


    constructor(el) {
        this.#el = el;
         
        this.#bindEventListeners();
    }

    #bindEventListeners() {
        this.#el.addEventListener('click', (e) => {
          if (e.target.classList.contains(Accordion.CLASSES.TITLE)) {
            this.#openElement(e.target);
            this.#openElement(e.target.nextElementSibling);
          }
        });
    }

    #openElement(el) {
    el.classList.toggle(Accordion.CLASSES.ACTIVE);
    }
}