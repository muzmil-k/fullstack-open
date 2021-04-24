const PersonForm = (props) => {
    return (
        <form onSubmit={props.handleSave}>
            <div>
                name:
                <input
                    type="text"
                    value={props.name}
                    onChange={props.handleName}
                />
            </div>
            <div>
                number:
                <input
                    type="text"
                    value={props.number}
                    onChange={props.handleNumber}
                />
            </div>
            <button type="submit">add</button>
        </form>
    );
};
export default PersonForm;
