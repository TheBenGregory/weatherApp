import React from "react";
import { Route } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { HomePage } from "./HomePage/HomePage";
import './WeatherApp.css';

export const WeatherApp = () => {

  <>
    <Route
      render={() => {
        if (localStorage.getItem("weather_app")) {
        return (
            <>
              <HomePage />
              {/* <ApplicationViews /> */}
            </>
          );
        } else {
          return null;
        }
      }}
      />
      </>
};