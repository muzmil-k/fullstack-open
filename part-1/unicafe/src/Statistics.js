import Statistic from "./Statistic";
const Statistics = (props) => {
    if (props.all === 0) {
        return <p>No feedback given</p>;
    }

    return (
        <div>
            <h2>statistics</h2>
            <Statistic text="good" value={props.good} />
            <Statistic text="neutral" value={props.neutral} />
            <Statistic text="bad" value={props.bad} />
            <Statistic text="all" value={props.all} />
            <Statistic text="average" value={props.average} />
            <Statistic text="positive" value={props.positive + "%"} />
        </div>
    );
};
export default Statistics;
