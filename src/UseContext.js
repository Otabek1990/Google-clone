import {createContext,useReducer,useContext} from 'react';

const Context=createContext();

export const ContextProvider=({initialState,reducer,children})=>(
	<Context.Provider value={useReducer(reducer,initialState)}>
{children}
	</Context.Provider>

)
export const UseContextValue=()=>useContext(Context);