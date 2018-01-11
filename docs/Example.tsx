import React, { Component } from 'react';
import MonthPicker from 'react-year-month-selector';
import './style.css'


export interface IState {
  open: boolean
}

class Example extends Component<{}, IState> {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }
  handleOpen = () => {
    console.log("Running Handle Open")
    this.setState({
      open: true
    })
  }
  handleClose = () => {
    console.log("Running Handle Close")
    this.setState({open:false})
  }
  render () {
    return (
      <div>
        <button onClick={this.handleOpen}>Open</button>
        <MonthPicker year={2018} month={1} onChange={(year, month)=> console.log(month)} open={this.state.open} onClose={this.handleClose}/>
      </div>
    )
  }
}

export default Example;

