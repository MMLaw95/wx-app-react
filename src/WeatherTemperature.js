import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="current-temp">{Math.round(props.fahrenheit)}</span>
        <span className="units">
          <a href="/" className="fahrenheit-link">
            °F
          </a>
          |
          <a href="/" className="celsius-link" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="current-temp">{Math.round(celsius())}</span>
        <span className="units">
          <a href="/" className="fahrenheit-link" onClick={showFahrenheit}>
            °F
          </a>
          |
          <a href="/" className="celsius-link">
            °C
          </a>
        </span>
      </div>
    );
  }
}
