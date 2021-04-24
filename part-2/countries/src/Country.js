import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ weather, country }) => {
    if (weather) {
        return (
            <>
                <h3>Weather in {country.capital}</h3>
                <p>
                    <b>temperature:</b>
                    {weather.current.temperature} Celcius
                </p>
                <img src={weather.current.weather_icons} alt="weather icon" />
                <p>
                    <b>wind:</b>
                    {weather.current.wind_speed} mph direction{" "}
                    {weather.current.wind_dir}
                </p>
            </>
        );
    } else return <p>Weather data loading...</p>;
};

const Country = ({ country }) => {
    const [weather, setWeather] = useState();

    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY;
        axios
            .get(
                `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`
            )
            .then((response) => setWeather(response.data));
    }, [country.capital]);
    return (
        <div>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>Spoken languages</h3>
            {country.languages.map((language, i) => (
                <li key={i}>{language.name}</li>
            ))}
            <div>
                <img
                    src={country.flag}
                    alt={country.name + "flag"}
                    width={100}
                />
            </div>
            <Weather weather={weather} country={country} />
        </div>
    );
};

export default Country;
