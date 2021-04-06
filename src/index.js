import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ContextProvider} from './UseContext';
import reducer,{initialState} from './reducer';

ReactDOM.render(
	<ContextProvider initialState={initialState} reducer={reducer}>
    <App />
    </ContextProvider>,
  document.getElementById('root')
);


