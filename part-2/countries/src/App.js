import axios from "axios";
import React, { useState, useEffect } from "react";
import Countries from "./Countries";

function App() {
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then((response) => setCountries(response.data));
    }, []);
    const handleShowBtn = (event) => {
        setFilter(event.target.name);
    };

    //data to show
    const countriesToShow = filter ? (
        <Countries
            countries={countries}
            filter={filter}
            handleShowBtn={handleShowBtn}
        />
    ) : null;

    return (
        <div>
            find countries:
            <input
                type="text"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
            />
            {countriesToShow}
        </div>
    );
}

export default App;
