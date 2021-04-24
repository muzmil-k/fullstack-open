const Filter = (props) => {
    return (
        <div>
            filter shown with
            <input
                type="text"
                value={props.value}
                onChange={props.handleChange}
            />
        </div>
    );
};

export default Filter;
