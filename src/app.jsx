import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Home from './Home';

function App() {
  return (
    <div>
      <Home />
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
