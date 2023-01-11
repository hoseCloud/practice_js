const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo");

const TODO_KEY = "todo";

let todos = [];

function onTodoSubmit(event) {
    event.preventDefault();
    const newTodoObj = {
        id: Date.now(),
        text: todoInput.value
    }
    todoInput.value = "";
    addTodo(newTodoObj);
    todos.push(newTodoObj);
    saveTodo()
}
function saveTodo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}
function addTodo(todoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = todoObj.id;
    span.innerHTML = todoObj.text;

    button.innerHTML = "☄";
    button.addEventListener("click", removeTodo);

    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
}
function removeTodo(event) {
    const li = event.target.parentElement;

    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    li.remove();
    saveTodo()
}
function loadingTodo() {
    todos = JSON.parse(localStorage.getItem(TODO_KEY));

    if(todos !== null) {
        todos.forEach(addTodo);
        console.log(todos);
    }
    else {
        todos = [];
    }
}

todoForm.addEventListener("submit", onTodoSubmit);
loadingTodo();
