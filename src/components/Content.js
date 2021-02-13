import axios from "axios";
import React, { useState, useEffect } from "react";
import Askcity from "./Askcity";

const Content = () => {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [weatherdata, setWeatherdata] = useState([]);

  async function fetchWeatherData() {
    const url = `/.netlify/functions/getWeatherdata`;

    const response = await axios.get(url);
    const data = response.data;
    setWeatherdata(data);
    //console.log(data);
  }

  useEffect(() => {
    fetchWeatherData();
  }, []);

  if (weatherdata === null) {
    return <div>Error</div>;
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
};

export default Content;
