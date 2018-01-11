React-Month-Picker-Input
====================

## Demo

Live demo: [williamluke4.github.io/react-year-month-selector](https://williamluke4.github.io/react-year-month-selector/)

## API

| Name | Types | Default | Description |
|---|---|---|---|
| year | number | void | Preselect year in calendar |
| month | number (0..11) | void | Preselect month in calendar.|
| open | boolean | false | State on the dialog |
| onChange | Function: (year: number, month: number) => any | - | onChange callback, receives `year` and `month`  |
| onClose | Function: () => any | - | onChange callback, called when clicked outside of dialog |

## Installation

```
npm install react-year-month-selector --save
```

## Usage

React-Year-Month-Selector provides a dialog which returns the selected Year and Month

```js
import YearMonthSelector from 'react-year-month-selector';
import 'react-year-month-selector/dist/react-year-month-selector.css';

<YearMonthSelector 
  year={2018} 
  month={1} 
  onChange={(year, month)=> console.log(month)} 
  open={this.state.open} 
  onClose={this.handleClose}
/>

```

