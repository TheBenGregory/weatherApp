const api = {
    key: "62b1c33cd8c149419ca233755211110",
    base: "http://api.weatherapi.com/v1"
  }

export const getWeather = () => {
    return fetch("http://pro.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e1d40a2013e49267140f997eab3df080")
        .then(res => res.json())
}

