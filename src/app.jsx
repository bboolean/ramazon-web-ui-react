import CssBaseline from '@mui/material/CssBaseline';
import * as R from 'ramda';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import useAction from '~/src/lib/useAction.js';
import Home from './Home';
import Product from './Product';
import store from './redux/store';
import Search from './Search';

function InnerApp() {
  const location = useLocation();
  const action = useAction();

  React.useEffect(() => {
    action('updatePath', {
      path: R.pipe(R.split('/'), R.drop(1))(location?.pathname),
      uri: location.pathname,
    });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search/*" element={<Search />} />
      <Route path="products/*" element={<Product />} />
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
