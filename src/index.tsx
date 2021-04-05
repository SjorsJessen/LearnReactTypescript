import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from "./Routes";

import { Provider } from "react-redux";
import { Store } from 'redux';
import configureStore from "./Store";
import { IApplicationState } from "./Store";

interface IProps {
  store: Store<IApplicationState>;
}

const Root: React.FC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <Routes />
    </Provider>
  );
};

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />,
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
