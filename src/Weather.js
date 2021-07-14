import { useState } from "react";

import GetDate from "./GetDate";
import "./Weather";
import Search from "./Search";
import DisplayForecast from "./DisplayForecast";
import WeatherTemp from "./WeatherTemp";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(props.temperature);
  let [weatherData, setWeatherData] = useState({ ready: false });
  

  const { humidity, date, wind } = weatherData;

  function displayData(response){
    const { data } = response;
    const { main, dt, weather, wind, name } = data;

    setWeatherData({
      ready: true,
      temperature: main.temp,
      humidity: main.humidity,
      date: new Date(dt * 1000),
      description: weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox.weather/64/partly_cloudy.png",
      wind: wind.speed,
      city: name
    });
  }

  return (
    <div className="container">
      <Search setTemperature={setTemperature} displayData={displayData} />
      <GetDate date={date}/>

      <li id="description"></li>
      <img src="#" alt="" id="icon" />
        <div className="row">
          <div className="col-sm">
            
            <WeatherTemp celsius={temperature}/>

          </div>
        </div>
      { (humidity && wind) && (
        <div className="placeholder-windspeed">
          <div className="row">
            <div className="col-sm">
              Humidity:
              <li id="humidity">{humidity}%</li>
            </div>
            <div className="col-sm">
              Wind Speed:
              <li id="windspeed">{wind}mph</li>
            </div>
          </div>
        </div>
      )}
      <DisplayForecast />
      <br />
      <a className="github" href="https://github.com/breweralicia">
        Alicia's GitHub
      </a>
    </div>
  );
}
