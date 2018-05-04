import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Example from './Example';

ReactDOM.render(
  (
    <div>
      <label htmlFor="ex-0">
        Without default value
        <Example />
      </label>

    </div>
  ),
  document.getElementById('examples')
);
