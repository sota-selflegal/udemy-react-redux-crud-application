import React from 'react';
import PropTypes from 'prop-types'

const App = () => {
  const profiles = [
    {name: "New-New", age: 25},
    {name: "Kama-Kama", age: 28},
    {name: "En-En", age: 23},
    {name: "Chon-Chon", age: 23},
    {name: "ss" }
  ]
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
