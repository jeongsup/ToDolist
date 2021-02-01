const COORDS = "coords";
//https://openweathermap.org/
const apiKey = "8f36b65af0bd7bd836f44329dd94d168";

function getWeather(latitude, longitude){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    ).then((response) => {
        return response.json();
    }).then((json) => {
        console.log(json);
    })

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function success(position){
    console.log(position);
    const coordsObj = {
       latitude : position.coords.latitude,
       longitude : position.coords.longitude
    };
    saveCoords(coordsObj);
}

function error(error){
    console.error(error);
}

function askCoords(){
    console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition(success, error);
}

function init(){
    const coords = localStorage.getItem(COORDS);
    if(coords === null){
        askCoords();
    }else{
        const coordOBJ = JSON.parse(localStorage.getItem(COORDS));
        getWeather(coordOBJ.latitude, coordOBJ.longitude);
    }
}

init();