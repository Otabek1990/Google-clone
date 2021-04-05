import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ContextProvider} from './UseContext';
import reducer,{initialState} from './reducer';


/*const ContextState=createContext();
const initialState={
	term:''
}
const reducer=(state,action)=>{
	switch(action.type){
		case "Search_Term":
		return{
			...state,
			term:action.payload
		}
		default:
		return state;
	}
}*/

ReactDOM.render(
	<ContextProvider initialState={initialState} reducer={reducer}>
    <App />
    </ContextProvider>,
  document.getElementById('root')
);

