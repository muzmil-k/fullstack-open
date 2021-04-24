import React, { useState } from "react";
function App() {
    const [persons, setPersons] = useState([{ name: "Muzamil Khan" }]);
    const [newName, setnewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    const handleNameChange = (event) => {
        setnewName(event.target.value);
    };
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    const addPerson = (event) => {
        event.preventDefault();

        const personFound = persons.find((person) => person.name === newName);

        if (personFound) {
            alert(`${newName} is already added to phonebook`);
        } else {
            const personObj = {
                name: newName,
                number: newNumber,
            };
            setPersons(persons.concat(personObj));
        }

        setnewName("");
        setNewNumber("");
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
                        onChange={handleNameChange}
                    />
                </p>
                <p>
                    number:
                    <input
                        type="text"
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </p>
                <button type="submit">add</button>
                <h2>Numbers</h2>
                {persons.map((person, i) => (
                    <p key={i}>
                        {person.name} {person.number}{" "}
                    </p>
                ))}
            </form>
        </div>
    );
}

export default App;
