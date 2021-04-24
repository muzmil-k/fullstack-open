import React from "react";
import Country from "./Country";

const Countries = ({ countries, filter, handleShowBtn }) => {
    const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(filter.toLowerCase())
    );

    //display data

    return filteredCountries.length === 0 ? (
        <p>No data found</p>
    ) : filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
    ) : filteredCountries.length === 1 ? (
        <Country country={filteredCountries[0]} />
    ) : (
        filteredCountries.map((country, i) => (
            <div key={country.cioc}>
                {country.name}{" "}
                <button name={country.name} onClick={handleShowBtn}>
                    {" "}
                    show
                </button>
            </div>
        ))
    );
};
export default Countries;
