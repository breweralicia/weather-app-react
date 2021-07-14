import { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  

  function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");

  }

  if (unit === "celsius") {
    return ( 
      <div>
        {<strong className="degree">{Math.round(props.celsius)}</strong>}
      <span className="unit">
        °C | {" "} 
        <a href="/" onClick={showFahrenheit}>
          °F
          </a>
          </span>
      </div>
    );
  } else {
    return (
      <div>
      {<strong className="degree">{Math.round((props.celsius * 9/5) + 32)}</strong>}
      <span className="unit">
        <a href="/" onClick={showCelsius}>
          °C
          </a>{" "}
          | °F
      </span>
      </div>
    );
  }

}