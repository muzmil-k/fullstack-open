import React, { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
    const [notes, setNotes] = useState(props.notes);
    const [newNote, setNewNote] = useState("");
    const [showAll, setShowAll] = useState(true);

    const handleNoteChange = (event) => {
        setNewNote(event.target.value);
    };

    const addNote = (event) => {
        event.preventDefault();
        const noteObj = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
        };
        setNotes(notes.concat(noteObj));
        setNewNote("");
    };

    const notesToShow = showAll
        ? notes
        : notes.filter((note) => note.important === true);

    return (
        <div>
            <h1>Notes</h1>
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? "important" : "all"}
            </button>
            <ul>
                {notesToShow.map((note) => (
                    <Note key={note.id} note={note} />
                ))}
            </ul>
            <form onSubmit={addNote}>
                <input
                    type="text"
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>
        </div>
    );
};

export default App;
