import React from 'react'

// class App extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => console.log('私です')} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
    </>
  )
}

const Cat = () => {
  return(
    <React.Fragment>
      <p>Meow!!</p>
    </React.Fragment>
  )
}

export default App;
