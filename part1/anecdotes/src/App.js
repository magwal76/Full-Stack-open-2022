import { useState } from 'react'
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const Display = ({anecdotes}) => {
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes}</p>
    </div>
  )
}
const Vote = ({vote}) => {
  return (
    <div>
      <p>Has {vote} votes</p>
    </div>
  )
}
const MostVotes = ({ highestAnecdote, maximumVote }) => {
  return (
    <div>
      <h2>Anecdote with most votes</h2>
      {maximumVote ? (
        <div>
          <p>{highestAnecdote}</p>
          <p>Has {maximumVote} votes</p>
        </div>
      ) : (
        <p>No votes are registered</p>
      )}
    </div>
  );
};
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)

  const min = 0;
  const max = 6;
  const rand = (min + Math.random() * (max - min));
  const viewAnecdote = rand.toFixed(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const handleNewVote = () => {
    const newPoint = [...points];
    newPoint[selected] += 1;
    setPoints(newPoint);
  };
  const maximumVote = Math.max(...points);
  const highestAnecdote = anecdotes[points.indexOf(maximumVote)];

  console.log(points)
  return (
    <div>
      <Display anecdotes={anecdotes[selected]}/>
      <Vote vote={points[selected]}/>
      <Button onClick={() => handleNewVote()} text='Vote'/>
      <Button onClick={() => setSelected(viewAnecdote)} text='Next anecdote'/>
      <MostVotes highestAnecdote={highestAnecdote} maximumVote={maximumVote} />
    </div>
    
  )

}

export default App