const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function buttonclick (event){
    // console.log(event.target.parentNode);
    const target = event.target.parentNode;
    // console.log(event);
    target.remove();
    todos = todos.filter(todo => todo.id != parseInt(target.id));
    saveToDos();
};

function paintToDo (newToDo) {
    const newli = document.createElement("li");
    newli.id = newToDo.id;
    const newspan = document.createElement("span");
    const button = document.createElement("button");
    newli.appendChild(newspan);
    newspan.innerText = newToDo.text;
    newli.appendChild(button);
    button.innerText = "X";
    todoList.appendChild(newli);
    button.addEventListener("click", buttonclick);
}

function handleToDoSubmit (event) {
    event.preventDefault();
    console.log(todoInput.value);
    const newToDo = todoInput.value;
    const newtodoobj = {
        text: newToDo,
        id: Date.now(),
    }
    todoInput.value = "";
    todos.push(newtodoobj);
    paintToDo(newtodoobj);
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

// function sayhello(item){
//     console.log("hello", item);
//     paintToDo(item);
// }

const savetodos = localStorage.getItem("todos");

if(savetodos != null) {
    const parsetodos =JSON.parse(savetodos);
    todos = parsetodos;
    parsetodos.forEach(paintToDo);
}

