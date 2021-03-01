import React, {Component} from 'react'

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

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
    }
  }

  onClickPlus = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  onClickMinus = () => {
    this.setState({
      num: this.state.num - 1
    })
  }

  render() {
    console.log(this.state);
    return(
      <>
        <div>counter:{this.state.num}</div>
        <button onClick={this.onClickPlus}>+1</button>
        <button onClick={this.onClickMinus}>-1</button>
      </>
    )
  }
}

export default App;
