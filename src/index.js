import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {LanguageProvider} from './context';
import store from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <LanguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </Provider>,
  document.getElementById('root')
);

