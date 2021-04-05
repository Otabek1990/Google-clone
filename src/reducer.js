

export const initialState={
	term:""
}

export const SearchAction=()=>{
	return{
		type:"Search_Terms"
	}
}
const reducer=(state,action)=>{
	switch(action.type){
		case "Search_Terms":
		return{
			...state,
			term:action.payload
		}
		default:
		return state;

	}
}
export default reducer;
