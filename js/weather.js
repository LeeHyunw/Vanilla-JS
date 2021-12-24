
function onGeoOk (position){
    console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const API_KEY = "419806a6bcd771f8b3e6ae9305aaae04"
    console.log("You live in", lat ,lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
    const weathercontainer = document.querySelector("#weather span:first-child");
    const citycontainer = document.querySelector("#weather span:last-child");
    citycontainer.innerText = data.name;
    weathercontainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    
    });

}

function onGeoError(){
    alert("can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

