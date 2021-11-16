import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Home from './Home';
import Search from './Search';
import Product from './Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search/*" element={<Search />} />
          <Route path="product/*" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
