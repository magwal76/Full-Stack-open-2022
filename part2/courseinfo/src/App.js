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
const App = () => {
  const course = [{
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }

  ]
  return (
    <div>
      <h1>Web development curriculum</h1>
      {course.map((course,i) => <Course key={i} course={course}/>)}
    </div>
  ) 
}

export default App