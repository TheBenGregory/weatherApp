import React, { useState, useEffect } from "react";
import { getWeather } from "../apiManager/apiManager";

export const HomePage = () => {
    const [weather, setWeather] = useState([])
    const [location, setLocation] = useState([])

    useEffect(
        () => {
            getWeather()
                .then(
                    (weatherArray) => {
                        setWeather(weatherArray)
                    }
                )
        },
        []
    )

    useEffect(
        () => {
            const wxLocation = weather.find(wx => wx.location)
            setLocation(wxLocation)
        },[weather]
    )
    console.log(location)

                return (
                    <>
                    {location.map(
                        (locationObject) => {
                            return <h2 key={`location--${locationObject.name}`}>{locationObject.name}</h2>
                        }
                    )}
                    </>
                )            
        }
       
