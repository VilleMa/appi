import React, { useState, useEffect } from "react";
import Askcity from "./Askcity";
import fetch from "node-fetch";

function Content() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [weatherdata, setWeatherdata] = useState([]);
  // Note: the empty deps array [] means this useEffect will run once(similar to componentDidMount())
  useEffect(() => {
    fetch(`/.netlify/functions/getWeather`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setWeatherdata(result.main);
        },
        // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="Content-style">
        <Askcity />
        <ul className="liststyle">
          <li>Temperature {weatherdata.temp - 273.15}</li>
          <li>Humidity {weatherdata.humidity} %</li>
          <li></li>
        </ul>
      </div>
    );
  }
}
export default Content;
