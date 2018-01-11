React-Month-Picker-Input
====================

A month picker input and calendar for [React](http://facebook.github.io/react/index.html).

## Demo

Live demo: [williamluke4.github.io/react-year-month-selector](https://williamluke4.github.io/react-year-month-selector/)

## API

| Name | Types | Default | Description |
|---|---|---|---|
| year | number | void | Preselect year in calendar |
| month | number (0..11) | void | Preselect month in calendar. If both year and month are specified then input field will be also prepopulated |
| inputProps | object | empty object | Input field props, only `id` and `name` are supported |
| onChange | Function: (maskedValue: string, year: number, month: number) => any | - | onChange callback, receives `maskedValue`, `year` and `month` (begins with 0) as arguments |

## Installation

```
npm install react-year-month-selector --save
```

## Usage

React-Year-Month-Selector provides a dialog which returns the selected Year and Month

```js
var YearMonthSelector = require('react-year-month-selector');
require('react-year-month-selector/dist/react-year-month-selector.css');

<YearMonthSelector
  value={new Date()}
  onChange={function(selectedYear, selectedMonth) {
    console.log(selectedYear, selectedMonth);
  }}
/>
```

## License

Copyright (c) 2017 Viacheslav Kysil. [MIT](LICENSE) License.
