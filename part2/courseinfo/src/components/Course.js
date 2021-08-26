import React from 'react'

const Header = ({ course }) => {
  return(
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Total = ({ parts }) => {
  const sum = parts.reduce((total, part) => total + part.exercises, 0)
  return (
    <p><b>Total of {sum} exercises</b></p>
  )
}

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
      <Total parts={course.parts} />
    </>
  )
}

export default Course
