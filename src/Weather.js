import React, { useState } from "react";

import "./Weather";
import Search from "./Search";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(props.temperature);

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature((props.temperature * 9) / 5 + 32);
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  return (
    <div className="container">
      <Search setTemperature={setTemperature} />
   
      <h4>Sunday 3:00</h4>
      <li id="description"></li>
      <img src="#" alt="" id="icon" />
      <div className="unites-f-c">
        <div className="row">
          <div className="col-sm">
            <strong className="degree">{Math.round(temperature)}</strong>
            <span className="unites">
              <a
                id="switching-celsius"
                className="active"
                href="/"
                onClick={showCelsius}
              >
                ℃|
              </a>
              <a id="switching-fahrenheit" href="/" onClick={showFahrenheit}>
                ℉
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="placeholder-windspeed">
        <div className="row">
          <div className="col-sm">
            Humidity:
            <li id="humidity">%</li>
          </div>
          <div className="col-sm">
            Wind Speed:
            <li id="windspeed">mph</li>
          </div>
        </div>
      </div>
      <div className="weather-forcast" id="forcast"></div>
      <br />
      <a className="github" href="https://github.com/breweralicia">
        Alicia's GitHub
      </a>
    </div>
  );
}
