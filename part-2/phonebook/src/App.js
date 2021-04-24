import React, { useState } from "react";
function App() {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456" },
        { name: "Ada Lovelace", number: "39-44-5323523" },
        { name: "Dan Abramov", number: "12-43-234345" },
        { name: "Mary Poppendieck", number: "39-23-6423122" },
    ]);
    const [newName, setnewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [newFilter, setNewFilter] = useState("");

    const handleFilterChange = (event) => {
        setNewFilter(event.target.value);
    };

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

    const personsToShow = newFilter
        ? persons.filter((person) =>
              person.name.toLowerCase().includes(newFilter.toLowerCase())
          )
        : persons;

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with
                <input
                    type="text"
                    value={newFilter}
                    onChange={handleFilterChange}
                />
            </div>
            <h2>add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name:
                    <input
                        type="text"
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    number:
                    <input
                        type="text"
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <button type="submit">add</button>
                <h2>Numbers</h2>
                {personsToShow.map((person, i) => (
                    <p key={i}>
                        {person.name} {person.number}{" "}
                    </p>
                ))}
            </form>
        </div>
    );
}

export default App;
