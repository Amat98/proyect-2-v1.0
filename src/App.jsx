import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Weather from "./components/Weather";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    // console.log({lat, lon})

    const API_KEY = "a749db7cc43457673f4c52f9a250036f";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    // console.log(url)

    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // la funcion useffect puesta asi solo se ejecutara una vez
    navigator.geolocation.getCurrentPosition(success); // esto saca la localizacion ip
  }, []);

  return (
    <main className="bg-[url('images/bg-2.jpg')] bg-cover text-white min-h-screen flex justify-center items-center font-lato px-4 ">
      <Weather weatherInfo={weatherInfo}/>
    </main>
  );
}

export default App;
