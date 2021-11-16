import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Home from './Home';

import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <div>
      <CssBaseline />
      <Home />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
