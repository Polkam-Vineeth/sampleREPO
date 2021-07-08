import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class Test extends Component {

  constructor(props){
    super(props);
    this.state={ name:"VIN", count:0 }
  }

  componentWillMount(){
    console.log("Before render() - componentWillMount()")
  }

  componentDidMount(){
    console.log("After render() - componentDidMount()")
  }

  changeState(){
    this.setState({ name:"John Doe", count:this.state.count+1 });
  }

  render() {
    console.log("inside render")
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <h1> count : {this.state.count}</h1>
        {/* eslint-disable-next-line */}
        <button onClick={this.changeState.bind(this)}>Even Increment</button>
  </div>
    )
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponentUpdate")
    // eslint-disable-next-line eqeqeq
    if(nextState.count%2==0)
      return true;
    else
      return false;
  }

  componentWillUpdate(){
    console.log("componentWillUpdate()")
  }
  
  componentDidUpdate(){
    console.log("componentDidUpdate()")
  }
}

ReactDOM.render(<Test/>,document.getElementById("root"))