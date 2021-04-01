import Statistic from './Statistic.js'


const Statistics = (props) => {
    const {all,average,positive,good,neutral, bad} = props
    return(
        <div>
            {good || neutral || bad?
            <div>
                <Statistic text="good" value ={good} />
                <Statistic text="neutral" value ={neutral} />
                <Statistic text="bad" value ={bad} />
                <Statistic text="all" value ={all} />
                <Statistic text="average" value ={average} />
                <Statistic text="positive" value ={positive} />             
            </div>
            :
            <h3>No feedback given</h3>}
        </div>
    )
}

export default Statistics