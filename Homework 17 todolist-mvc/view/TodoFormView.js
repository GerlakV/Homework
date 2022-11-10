class TodoFormView {

    static todoFormTemplate = `    
        <form class = "form">
            <input class="newTodoTitle ten columns"/>
            <button class="saveTodoBtn">Save</button>
        </form>`;
    
    el = null;
    #config = null;

    constructor(config) {
        console.log('Valia');
        this.#config = config;
        this.#initView();
    }

    #initView() {
        const todoForm = document.createElement('form');
        todoForm.className = 'form';

        const todoInput = document.createElement('input');
        todoInput.className = 'newTodoTitle ten columns';    

        const saveButton = document.createElement('button');
        saveButton.className = 'saveTodoBtn';
        saveButton.innerText = 'Save';

        todoForm.append(todoInput);
        todoForm.append(saveButton);

        this.el = todoForm;

        todoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newTodo = this.getFormValues();

            if(newTodo.title === ''){
                return
            } else{
                this.saveTodo(newTodo);
            }  

            this.resetInput();
        })
    }

    getFormValues() { 
        return {
        title: this.el.children[0].value 
        }
    };

    saveTodo(todo) {
        this.#config.onSave(todo);
    }

    resetInput() {
        this.el.children[0].value = '';
    }
}
