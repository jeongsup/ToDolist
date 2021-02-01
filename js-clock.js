const clock = document.querySelector(".js-clock");
console.log(clock);

function callClock(){
    const date = new Date();
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    //clock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
    clock.innerText = `${hour}:${minute}:${second}`;
}

function init(){
    callClock();
    setInterval(callClock, 1000);
}

init();