import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <p>
        Course name: {props.course}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
      <div>
        <p>
          {props.coursetitle} consists of {props.numberofexercises} exercises.
        </p>
      </div>
  )
}

const Content = (props) => {
  const course1 = 'Fundamentals of React'
  const ex1 = 10
  const course2 = 'Using props to pass data'
  const ex2 = 7
  const course3 = 'State of a component'
  const ex3 = 14
    return (
      <div>
        <p>
          <Part coursetitle={course1} numberofexercises={ex1}/>
          <Part coursetitle={course2} numberofexercises={ex2}/>
          <Part coursetitle={course3} numberofexercises={ex3}/>
        </p>
      </div>
    )
}

const Total = (props) => {
    return (
      <div>
        <p>
          The total amount of exercises is {props.total}
        </p>
      </div>
    )

}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  
  const exercises2 = 7
  
  const exercises3 = 14

  return (
    <div>
      <h1><Header course={course} /></h1>
      <Content />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))