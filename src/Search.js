import React, { useState } from "react";
import axios from "axios";
import "./Weather";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function showTemperature(response) {
    props.setTemperature(response.data.main.temp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(city);
    let apiKey = "09b098f13ff58f7d89c2ad3402c3b557";
    let apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric";
    axios.get(apiUrl + "&appid=" + apiKey).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="citySearch">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={updateCity}
          placeholder="Type City"
          id="search-text-input"
        />
        <input type="submit" value="Search" />
      </form>
      <h1>{message}</h1>
    </div>
  );
}
