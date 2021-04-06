import React,{useState} from 'react';
import styled from 'styled-components';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import {useHistory} from 'react-router-dom';
import {UseContextValue} from '../UseContext';

const SearchInput = (props) => {
const [state,dispatch]=UseContextValue()

const [inputText, setInputText] = useState('');
const history=useHistory();

    const search=(e)=>{
e.preventDefault()
history.push("searchPage");
dispatch({
    type:"Search_Terms",
    payload:inputText
})
    }

  return (
    <form>
    <InputContainer>
    <SearchIcon 
    onClick={(e)=>search(e)}
    style={{color:"rgba(0,0,0,0.7)",
    height:"20px",
    marginTop:"3px",
    cursor:"pointer"}}/>

    <input 
    type="text"
    value={inputText}
     onChange={e=>setInputText(e.target.value)}/>
    
    <MicIcon style={{color:"rgba(0,0,0,0.7)",
        height:"22px",
    cursor:"pointer"}}/>

    </InputContainer>
    <Buttons>
    <button type="submit" onClick={search} > Google Search </button>
    <button >I am feeling happy</button>
    </Buttons>
    </form>
  )
}

export default SearchInput;

const InputContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
margin:0 auto;
margin-top:-50px;
padding:0 12px;
border:1px solid #d4c3c3;
width:580px;
	text-align:center;
	border-radius:20px;
input{
	width:90%;
	height:30px;
	outline:none;
	border:none;
	height:40px;
	padding-left:10px;
	font-size:15px;
	color:black;

}
@media only screen and (max-width:707px){
    width:86%;
}


`
const Buttons=styled.div`
margin-top:25px;
text-align:center;

button{
    color:rgba(0,0,0,0.7);
    background-color:#f2dcdc;
    margin-left:10px;
    margin-top:5px;
    padding:8px 0;
    width:200px;
    font-size:14px;
    border:none;
    border-radius:5px;
    height:38px;


    :hover{

        cursor:pointer;
        outline:none;
        box-shadow:0 1px 1px rgba(0,0,0,0.7);
        border:1px solid #c6c6c6;
        color:black

    }
    :focus{
    outline:none;
}
@media only screen and (max-width:707px){
    width:130px;
}
}
`
