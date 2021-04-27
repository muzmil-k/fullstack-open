import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";
import Notification from "./components/Notification";
import personsService from "./services/persons";

function App() {
    const [persons, setPersons] = useState([]);
    const [newName, setnewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [newFilter, setNewFilter] = useState("");
    const [successMessage, setSuccessMessage] = useState(null);

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
            if (personFound.number !== newNumber) {
                if (
                    window.confirm(
                        `${newName} is already added to phonebook, replace the number with the new one?`
                    )
                ) {
                    const personObj = { ...personFound, number: newNumber };

                    personsService.update(personFound.id, personObj).then(
                        (returnedPerson) =>
                            setPersons(
                                persons.map((person) =>
                                    person.id === personFound.id
                                        ? returnedPerson
                                        : person
                                )
                            ),
                        setSuccessMessage(`Updated ${personObj.name}`),
                        setTimeout(() => {
                            setSuccessMessage(null);
                        }, 5000)
                    );
                } else return true;
            } else alert(`${newName} is already added to phonebook`);
        } else {
            const personObj = {
                name: newName,
                number: newNumber,
            };
            personsService.create(personObj).then(
                (returnedPerson) => setPersons(persons.concat(returnedPerson)),
                setSuccessMessage(`Added ${personObj.name}`),
                setTimeout(() => {
                    setSuccessMessage(null);
                }, 5000)
            );
        }

        setnewName("");
        setNewNumber("");
    };

    const removePerson = (id) => {
        const person = persons.find((person) => person.id === id);
        if (window.confirm(`Delete ${person.name} ?`)) {
            personsService.remove(id);
            setPersons(persons.filter((person) => person.id !== id));
        } else return true;
    };

    const personsToShow = newFilter
        ? persons.filter((person) =>
              person.name.toLowerCase().includes(newFilter.toLowerCase())
          )
        : persons;

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={successMessage} />
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
            <div>
                {personsToShow.map((person) => (
                    <Person
                        key={person.id}
                        person={person}
                        removePerson={() => removePerson(person.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
