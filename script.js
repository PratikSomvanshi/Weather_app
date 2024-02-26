const apiKey = "189a3bc8e7c110e79c50e9117a203588";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".searchbox input");
const searchbtn = document.querySelector(".searchbox button");
const date=document.querySelector(".date");

async function checkweather(City) {
    const response = await fetch(apiURL + City + `&appid=${apiKey}`);
    const data = await response.json();
    const currentdate=new Date();

    console.log(data);
    document.querySelector(".temprature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".info-humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".info-wind ").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".description").innerHTML = data.weather[0].description;
    date.textContent=currentdate.toDateString();

    switch (data.weather[0].main.toLowerCase()) {
        case 'clear':
            weatherIcon.src = "images/clear.png";
            break;
        case 'clouds':
            weatherIcon.src = "images/clouds.png";
            break;
        case 'drizzle':
            weatherIcon.src = "images/drizzle.png";
            break;
        case 'mist':
            weatherIcon.src = "images/mist.png";
            break;
        case 'rain':
            weatherIcon.src = "images/rain.png";
            break;
        case 'snow':
            weatherIcon.src = "images/snow.png";
            break;
        case 'thunderstorm':
            weatherIcon.src="images/thunderstorm.png";
            break;
        case 'smoke':
            weatherIcon.src="images/smoke.png";
            break;
        case 'haze':
            weatherIcon.src="images/haze.png";  
            break;         
        default:
            weatherIcon.src = "images/clouds.png";
            break;
    }
}
searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});


