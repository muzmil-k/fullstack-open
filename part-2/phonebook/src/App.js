import React, { useState } from "react";
function App() {
    const [persons, setPersons] = useState([{ name: "Muzamil Khan" }]);
    const [newName, setnewName] = useState("");

    const handlePersonChange = (event) => {
        setnewName(event.target.value);
    };

    const addPerson = (event) => {
        event.preventDefault();
        const personObj = {
            name: newName,
        };
        setPersons(persons.concat(personObj));
        setnewName("");
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <p>
                    name:
                    <input
                        type="text"
                        value={newName}
                        onChange={handlePersonChange}
                    />
                </p>
                <button type="submit">add</button>
                <h2>Numbers</h2>
                {persons.map((person, i) => (
                    <p key={i}>{person.name}</p>
                ))}
            </form>
        </div>
    );
}

export default App;
