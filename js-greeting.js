'use strict'
const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-name");
const SHOWING_ON = "showing",
      SHOWING_OFF = "hide";


function paintUserName(names){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `HELLO ${names}`
}

function handleSubmit(event){
    event.preventDefault();
    localStorage.setItem("userName", input.value);
    paintUserName(input.value);

}

function askName() {
 form.classList.add(SHOWING_ON);
 greeting.classList.remove(SHOWING_ON);
 form.addEventListener("submit", handleSubmit);
}

function loadName(){
    const currentUser = localStorage.getItem("userName");
    console.log(currentUser);
    if(currentUser){
        paintUserName(currentUser);
    }else{
        askName();

    }
}

function init () {
    loadName();
}

init();