import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personsService from "./services/persons";

function App() {
    const [persons, setPersons] = useState([]);
    const [newName, setnewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [newFilter, setNewFilter] = useState("");

    useEffect(() => {
        personsService
            .getAll()
            .then((initialPersons) => setPersons(initialPersons));
    }, []);

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
            personsService
                .create(personObj)
                .then((returnedPerson) =>
                    setPersons(persons.concat(returnedPerson))
                );
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
            <Filter value={newFilter} handleChange={handleFilterChange} />
            <h2>add a new</h2>
            <PersonForm
                handleSave={addPerson}
                handleName={handleNameChange}
                handleNumber={handleNumberChange}
                name={newName}
                number={newNumber}
            />
            <h2>Numbers</h2>
            <Persons persons={personsToShow} />
        </div>
    );
}

export default App;
