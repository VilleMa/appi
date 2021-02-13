import React, { useState, useEffect } from "react";
import Askcity from "./Askcity";
const axios = require("axios");

function Content() {
  const [weatherdata, setWeatherdata] = useState([]);

  async function fetchMovies() {
    const url = `/.netlify/functions/getWeather`;
    const response = await axios.get(url);
    const data = response.data;
    setWeatherdata(data);
  }

  // Note: the empty deps array [] means this useEffect will run once(similar to componentDidMount())
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      {weatherdata === null ? (
        <div className="loading">
          <h2>Loading ...</h2>
        </div>
      ) : (
        <>
          <div className="Content-style">
            <Askcity />
            <ul className="liststyle">
              <li>Temperature {weatherdata.temp - 273.15}</li>
              <li>Humidity {weatherdata.humidity} %</li>
              <li></li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
export default Content;
