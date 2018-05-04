import * as React from 'react';
import MonthPicker from '../src/index';
import './style.css';


export interface IState {
  open: boolean;
}

class Example extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleOpen = () => {
    console.log('Running Handle Open');
    this.setState({
      open: true
    });
  }
  handleClose = () => {
    console.log('Running Handle Close');
    this.setState({open: false});
  }
  render () {
    return (
      <div style={{position: 'relative'}}>
        <button onClick={this.handleOpen}>Open</button>
        <div style={{position: 'absolute', top: '100%', left: 'calc(50% - 180px)'}}>
        <MonthPicker
        year={2018}
        month={1}
        onChange={(year, month) => console.log(`${month} - ${year}`)}
        open={this.state.open}
        onClose={this.handleClose}
        onOutsideClick={this.handleClose}
        />
        </div>
      </div>
    );
  }
}

export default Example;

