const Country = ({ country }) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>languages</h2>
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
        </div>
    );
};

export default Country;
