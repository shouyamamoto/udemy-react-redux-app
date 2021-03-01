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
  const userArry = [
    {name: 'taro', age: 12}, 
    {name: 'hanako', age: 15}, 
    {name: 'tkenn'}, 
  ]
  return (
    <>
    {
      userArry.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })
    }
    </>
  )
}

const User = (props) => {
  const{name, age}  = props
  return(
    <React.Fragment>
      <p>Hi!! I'm {name}</p>
      <p>my age {age}</p>
    </React.Fragment>
  )
}

User.defaultProps = {
  age: 1
}

export default App;
