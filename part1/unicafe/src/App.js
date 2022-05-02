import { useState } from 'react'
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}
const Subtitle = (props) => {
  return (
    <div>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

const Statistics = (props) => {
  let positive = (props.good/(props.good+props.neutral+props.bad))*100
  positive=positive.toFixed(1)
  positive =positive + '%'
  let average = ((props.good*1+props.neutral*0+props.bad*-1)/(props.good+props.neutral+props.bad))
  average=average.toFixed(1)
  
  if (props.good+props.neutral+props.bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    
    <table>  
      <tbody>
        <StatisticLine text="Good" value ={props.good} />
        <StatisticLine text="Neutral" value ={props.neutral} />
        <StatisticLine text="Bad" value ={props.bad} />
        <StatisticLine text="All" value ={props.good+props.neutral+props.bad} />
        <StatisticLine text="Average" value ={average} />
        <StatisticLine text="Positive" value ={positive} />
      </tbody>
    </table>  
    
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text} &nbsp;</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const App = () => {
  const title = 'Give feedback'
  const subtitle = 'Statistics'
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title={title}/>
      <Button onClick={() => setGood(good + 1)} text='Good'/>
      <Button onClick={() => setNeutral(neutral + 1)} text='Neutral'/>
      <Button onClick={() => setBad(bad + 1)} text='Bad'/>  
      <Subtitle subtitle={subtitle}/>      
      <Statistics good={good} neutral={neutral} bad={bad}/>
         
    </div>
  )
}

export default App