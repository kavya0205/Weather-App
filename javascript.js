alert('Enter City Name for its Weather')

const apiKey = '52779a342dde909f7beb12a998df53e4'
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherInfo = document.querySelector('.weatherIcon')

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)
    var data = await response.json()
    console.log(data)

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
    document.querySelector('.cityName').innerHTML = data.name
    document.querySelector('.humidity').innerHTML = data.main.humidity + ' %'
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'

    if(data.weather[0].main == 'Clouds')
        weatherInfo.src = 'images/clouds.png'

    else if(data.weather[0].main == 'Clear')
        weatherInfo.src = 'images/clear.png'

    else if(data.weather[0].main == 'Rain')
        weatherInfo.src = 'images/rain.png'

    else if(data.weather[0].main == 'Drizzle')
        weatherInfo.src = 'images/drizzle.png'

    if(data.weather[0].main == 'Mist')
        weatherInfo.src = 'images/mist.png'
}
searchBtn.addEventListener('click', ()=> {
    checkWeather(searchBox.value)
})