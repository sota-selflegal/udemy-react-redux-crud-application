import React from 'react';

//function App() {
//  return (
//    <React.Fragment>
//      <label htmlFor="bar">bar</label>
//      <input type="text" onChange={() => {console.log("clicked")}}></input>
//    </React.Fragment>
//  )
//}

const Cat = () => {
  return <div>Hi!</div>
}

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

export default App;
