const Statistics = (props) => {
    const {good,neutral, bad} = props
    return(
        <div>
            {good || neutral || bad?
            <div>
                <p>Good:{props.good}</p>
                <p>Neutral:{props.neutral}</p>
                <p>Bad:{props.bad}</p>
                <p>All:{props.all}</p>
                <p>Average:{props.average}</p>
                <p>Positive:{props.positive}</p>
            </div>
            :
            <h3>No feedback given</h3>}
        </div>
    )
}

export default Statistics