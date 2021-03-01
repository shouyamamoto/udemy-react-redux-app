import React from 'react'
import PropTypes from 'prop-types'

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
    {name: 'hanako', age: 15}
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

User.propTypes = {
  name: PropTypes.string.isRequired
}

export default App;
