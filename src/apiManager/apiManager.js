export const getWeather = () => {
    return fetch("http://api.weatherapi.com/v1/current.json?key=548b6397e79c4a8e8ae223753212809&q=37129&aqi=no")
        .then(res => res.json())
}