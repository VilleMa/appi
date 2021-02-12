import React, { useState, useEffect } from "react";

function Content() {
  console.log(
    `https://api.openweathermap.org/data/2.5/weather?q=${process.env.REACT_APP_CITY}&appid=${process.env.REACT_APP_API_KEY}`
  );
  console.log("testi");
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [weatherdata, setWeatherdata] = useState([]);
  // Note: the empty deps array [] means this useEffect will run once(similar to componentDidMount())
  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${process.env.REACT_APP_CITY}&appid=${process.env.REACT_APP_API_KEY}`
  //   )
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setWeatherdata(result.main);
  //         console.log(weatherdata);
  //       },
  //       // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
  //   return (
  //     <div className="Content-style">
  //       <ul className="liststyle">
  //         <li>Temperature {weatherdata.temp - 273.15}</li>
  //         <li>Humidity {weatherdata.humidity} %</li>
  //         <li></li>
  //       </ul>
  //     </div>
  //   );
  // }
  return <h1>kokeilu</h1>;
}
export default Content;
