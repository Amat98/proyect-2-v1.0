import { useState } from "react";

const Weather = ({ weatherInfo }) => {
    console.log(weatherInfo)
    const [isCelsius, setIsCelsius] = useState(true)

    const kelvinToCelsius = (tempKelvin) => {
        return (tempKelvin - 273.15).toFixed(1)
    }

    const kelvinToFa = (tempKelvin) => {
        return (((tempKelvin - 273.15) * 9/5) + 32).toFixed(1)
    }

    const handleChange = () => {
        setIsCelsius(!isCelsius)
    }

    const tempSwitch = isCelsius ? `${kelvinToCelsius(weatherInfo?.main.temp)} °C` : `${kelvinToFa(weatherInfo?.main.temp)} °F`

  return (
    <section className="text-center text-white ">
      <h2 className="text-[60px] ">{weatherInfo?.name}</h2>
      <section className="grid gap-4 sm:grid-cols-[auto_auto]">
        {/* Seccion superior */}
        <section className="bg-white/20 backdrop-blur-sm p-2 rounded-2xl grid grid-cols-2 items-center ">
          <h4 className="col-span-2 text-[40px]">{weatherInfo?.weather[0].description}</h4>
          <span className="text-4xl sm:text-6xl">{tempSwitch}</span>
          <div>
            <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
          </div>
        </section>

        {/* Seccion inferior */}
        <section className=" bg-white/20 backdrop-blur-sm p-2 rounded-2xl grid grid-cols-3 items-center py-4  sm:grid-cols-1 text-[17px] sm:text-[30px]">
          <article className="flex gap-2 items-center mx-auto ">
            <div className="w-[30px]">
                <img src={"/images/wind.png"} alt="" />
            </div>
            <span>{weatherInfo?.wind.speed}m/s</span>
          </article>
          <article className="flex gap-2 items-center mx-auto">
            <div className="w-[30px]">
                <img src={"/images/humidity.png"} alt="" />
            </div>
            <span>{weatherInfo?.main.humidity}%</span>
          </article>
          <article className="flex gap-2 items-center mx-auto">
            <div className="w-[30px]">
                <img src={"/images/pressure.png"} alt="" />
            </div>
            <span>{weatherInfo?.main.pressure}hPa</span>
          </article>
        </section>


      </section>
        <button onClick={handleChange} className=" bg-white text-sky-500 w-[200px] mx-auto p-2 rounded-xl text-xl mt-5 hover:scale-110 transition">
            Switch F/C°
        </button>
    </section>
  );
};
export default Weather;
