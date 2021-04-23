const Total = ({ parts }) => {
    return (
        <p>
            Number of exercises {parts.reduce((sum, t) => sum + t.exercises, 0)}
        </p>
    );
};

export default Total;
