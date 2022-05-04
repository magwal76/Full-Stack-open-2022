const Header = ({ name }) => <h3>{name}</h3>

const Total = ({parts}) => {
  return (
    <h4>Total of {parts.reduce((s,p) => s+p.exercises,0)} exercises</h4>
  )
}

const Part = ({ partname, partexercises }) => 
  <p>
    {partname} {partexercises}
  </p>

const Content = ({ parts }) => {
  return (
    <div>
    {parts.map(part =>
      <Part key={part.id} partname={part.name} partexercises={part.exercises}/>)}
    </div>
  )
}  
const Course = ({course}) => {
  return (
    <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </div>
  )
}

export default Course