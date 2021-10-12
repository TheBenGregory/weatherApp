import React, { useState, useEffect } from "react";
// import { getWeather } from "../apiManager/apiManager";



export const HomePage = () => {
    const api = {
        key: "e1d40a2013e49267140f997eab3df080",
        base: "http://pro.openweathermap.org/data/2.5/"
      }
    const [weather, setWeather] = useState([])
    const [query, setQuery] = useState([])

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=imperial&appid=${api.key}`)
            .then(res => res.json())
            .then(result => setWeather(result))
            .then(setQuery(''))
            
        }
        }

    // useEffect(
    //     () => {
    //         getWeather()
    //             .then(
    //                 (weatherArray) => {
    //                     setWeather(weatherArray)
    //                 }
    //             )
    //     },
    //     []
    // )


    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
        let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear()
    }

    const dateB = () => {
        let date = String(new window.Date())
        date = date.slice(3,15)
    }

    console.log(weather)

                return (
                    <>
                    <div className={
                    (typeof weather.main != "undefined") 
                        ? ((weather.main.temp > 50) 
                             ? "main_warm" 
                               : 'main') 
                                    : 'main'}>
                        <main>
                            <div className="searchBox">
                                <input
                                type="text"
                                className="searchBar"
                                placeHolder="search"
                                onChange={e => setQuery(e.target.value)}
                                value={query}
                                onKeyPress={search}
                                />
                            </div>
                            {(typeof weather.main != 'undefined') ? (
                        <div>
                            <div className="locationBox">
                                <div className="location">{weather.name}, {weather.sys.country}</div>
                                <div className="date">{dateB}</div>
                            </div>
                            <div className="weatherBox">
                                <div className="temp">
                                    {Math.round(weather.main.temp)} °f
                                    </div>
                                    <div className="weather">{weather.weather[0].main}</div>
                                </div>
                        </div>
                ) : ('')}
                
                        </main>
                    </div>
                    
                    
                    </>
                )        
        }
       
