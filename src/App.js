import React from 'react';

const App = () => {
  const profiles = [
    {name: "New-New", age: 5},
    {name: "Kama-Kama", age: 8},
    {name: "En-En", age: 5},
    {name: "Chon-Chon", age: 5},
    {}
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

User.defaultProps = {
  age: "不定",
  name: "不定"
}

export default App;
