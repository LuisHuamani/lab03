import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const clicksgood = () => {
    setGood(good+1)
    setAll(all+1)
    setAverage(average+0.1)
    setPositive(((good+1)*100)/(all+1))
  }

  const clicksneutral = () => {
    setNeutral(neutral+1)
    setAll(all+1)
    setAverage(average+0)
    setPositive(((good)*100)/(all+1))
  }

  const clicksbad = () => {
    setBad(bad+1)
    setAll(all+1)
    setAverage(average-(1/22.5))
    setPositive(((good)*100)/(all+1))
  }


  return (
    <div>
      <button onClick={clicksgood}>Good</button>
      <button onClick={clicksneutral}>Neutral</button>
      <button onClick={clicksbad}>Bad</button>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>All:{all}</p>
      <p>Average:{average}</p>
      <p>Positive:{positive}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)