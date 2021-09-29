import React from "react";
import { Route } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage.js";
import { WeatherApp } from "./WeatherApp.js";


export const ApplicationViews = () => {
    return (
        <>
         <Route path="/">
                <WeatherApp />
            </Route>
            
        
        </>
    )
}
