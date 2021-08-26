import React from 'react'

const Header = ({ course }) => {
  return(
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

// const Total = ({ course }) => {
//   const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
//   return (
//     <p>Number of exercises {sum}</p>
//   )
// }

const Part = ({ part }) => {
  return (
    <p key={part.id}>
      {part.name} {part.exercises}
    </p>
  )
}
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part part={part} />)}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
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
        name: 'State of a componemt',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App;
