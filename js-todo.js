'use strict'

const todoForm = document.querySelector('.js-todoform');
console.log(todoForm);
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todo-li');
const TODO_LS = "toDos";
let todoArr = [];



function delTodos(event){
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);

    const cleanTodo = todoArr.filter(item => {
        console.log(item.id, li.id);
        return item.id !== parseInt(li.id);
    })
    todoArr = cleanTodo;
    saveTodos();
}

function saveTodos(){
    localStorage.setItem(TODO_LS, JSON.stringify(todoArr));

}

function paintTodos(todoVal){
    console.log(todoVal);
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerText = "X";
    delBtn.addEventListener('click', delTodos);
    const span = document.createElement('span');
    span.innerText = todoVal;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = todoArr.length + 1;
    todoList.appendChild(li);
}

function todoHandler(event){
    event.preventDefault();
    const todoVal = todoInput.value;
    paintTodos(todoVal);
    const todoObj = {
        text : todoVal,
        id : todoArr.length + 1
    }
    todoArr.push(todoObj);
    localStorage.setItem(TODO_LS, JSON.stringify(todoArr));
    todoInput.value = "";
   
}

function drawtodo(toDos){
    const todo1 = JSON.parse(toDos);
    console.log(todo1);
    todo1.forEach(function(element){
        paintTodos(element.text);
    });
}

function loadTodos(){
    const toDos = localStorage.getItem(TODO_LS);
    if(toDos !== null){
        drawtodo(toDos);
    }
}

function init(){
    loadTodos();   
    todoForm.addEventListener('submit', todoHandler);
}

init();