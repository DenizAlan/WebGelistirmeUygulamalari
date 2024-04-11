const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");

const todoList = document.querySelector(".list-group");

const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];

const filterInp=document.querySelector("#todoSearch")
const clearButton = document.querySelector("#clearButton");

let todos = [];

runEvents();

function runEvents() {
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", pageLoaded);
  secondCardBody.addEventListener("click", removeTodoToUI);
  clearButton.addEventListener("click", allTodosEveryWhere);
  //keyup elini klavyeden çektikten sonra (her harfte) çalışır
   filterInp.addEventListener("keyup",filterTodo);
}

function pageLoaded() {
  checkTodosFromStroge();
  todos.forEach(function (todo) {
    addTodoToUI(todo);
  });
}

function addTodo(e) {
  const inputText = addInput.value.trim();
  if (inputText == null || inputText == "") {
    showAlert("warning", "Lütfen boş bırakmayınız");
  } else {
    addTodoToUI(inputText);
    addTodoToStorage(inputText);
    showAlert("success", "Görev Eklendi");
  }
  console.log("Submit eventi çalıştı");
  e.preventDefault(); //farklı sayfaya gitmesini engellemek
}

//Görev Arama
function filterTodo(e) {
  const filterValue = e.target.value.toLowerCase().trim();
  const todoList = document.querySelectorAll(".list-group-item");
  if (todoList.length > 0) {
    todoList.forEach(function (todo) {
      if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
        todo.setAttribute("style", "display : block");
      } else {
        todo.setAttribute("style", "display : none !important");
      }
    });
  } else {
    showAlert("warning", "Filtreleme yapmak için en az bir görev olmalıdır");
  }
}

//Arayüze eklemek
function addTodoToUI(newTodo) {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.textContent = newTodo;

  const a = document.createElement("a");
  a.href = "#";
  a.className = "delete-item";

  const i = document.createElement("i");
  i.className = "fa fa-remove";

  a.appendChild(i);
  li.appendChild(a);
  todoList.appendChild(li);

  addInput.value = "";
}

//Storage eklemek
function addTodoToStorage(newTodo) {
  checkTodosFromStroge();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeTodoToUI(e) {
  if (e.target.className === "fa fa-remove") {
    //Arayüzden silme
    const todo = e.target.parentElement.parentElement;
    todo.remove();
    //Storage silme
    removeTodoToStorage(todo.textContent);
    showAlert("success", "Görev başarıyla silindi");
  }
}

function removeTodoToStorage(removeTodo) {
  checkTodosFromStroge();
  todos.forEach(function (todo, index) {
    if (removeTodo === todo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function allTodosEveryWhere() {
  const todoList = document.querySelectorAll(".list-group-item");
  if (todoList.length > 0) {
    //Ekrandan silme
    todoList.forEach(function (todo) {
      todo.remove();
      //Storageden Silme
      todos = [];
      localStorage.setItem("todos", JSON.stringify(todos));
      showAlert("success", "Başarılı bir şekilde silindi");
    });
  } else {
    showAlert("warning", "Silmek için en az bir görev olmalıdır");
  }
}

function checkTodosFromStroge() {
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
}

function showAlert(type, message) {
  const div = document.createElement("div");
  //div.className="alert alert-"+type;
  div.className = `alert alert-${type}`;
  div.textContent = message;
  firstCardBody.appendChild(div);
  setTimeout(function () {
    div.remove();
  }, 2500);
}
