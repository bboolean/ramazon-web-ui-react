import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Home from './Home';
import Search from './Search';
import Product from './Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Counter from './Counter';
import './redux/locationChange';

function App() {
  return (
    <Provider store={store}>
      <Counter />

      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search/*" element={<Search />} />
          <Route path="product/*" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
