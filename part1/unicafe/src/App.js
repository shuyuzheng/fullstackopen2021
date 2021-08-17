import React, { useState } from 'react'

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return(
    <div>
      <h1>give feedback</h1>
      <Button text='good' handleClick={handleGood} />
      <Button text='neutral' handleClick={handleNeutral} />
      <Button text='bad' handleClick={handleBad} />
      <h1>statistics</h1>
      <p>good {good}
      <br/>
      neutral {neutral}
      <br/>
      bad {bad}
      <br/>
      all {good + neutral + bad}
      <br/>
      average {(good - bad) / (good + neutral + bad)}
      <br/>
      positivt {(good) / (good + neutral + bad) * 100} %
      </p>
    </div>
  )
}

export default App;
