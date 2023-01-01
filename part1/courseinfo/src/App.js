const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}
const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => <Part part={part.name} exercises={part.exercises} />)};
    </div>
  )
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App;