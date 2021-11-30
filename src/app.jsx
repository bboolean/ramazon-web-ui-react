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
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';
import useAction from '~/src/lib/useAction.js';

function InnerApp() {
  const location = useLocation();
  const action = useAction();

  React.useEffect(() => {
    action('updatePath', {
      path: R.pipe(R.split('/'), R.drop(1))(location?.pathname),
    });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search/*" element={<Search />} />
      <Route path="product/*" element={<Product />} />
    </Routes>
  );
}

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
        <InnerApp />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
