import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {UseContextValue} from '../UseContext';
import SearchResult from '../Components/searchResult';
import GoogleFoto from '../images/googlePhoto.webp';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const SearchPage = (props) => {
	const [state,dispatch]=UseContextValue();
	const term=state.term
	const {data}=SearchResult(term)
    const [inputText, setInputText] = useState('')
	// // https://developers.googlecom/custom-search/v1/using_rest;
// // https://www.googleapis.com customsearch/
//console.log(data?.data?.items[0])
const datas=data?.data
console.log(datas)
const resultTime=datas?.searchInformation.formattedSearchTime;
const allResults=datas?.searchInformation?.formattedTotalResults;

datas?.items?.map(item=>{
	console.log(item.link)
})
//console.log(allResults)
const submit=(e)=>{
	e.preventDefault()
	dispatch({
		type:"Search_Terms",
		payload:inputText
	})

}
	console.log(term)


  return (
    <SearchPageContainer>
<Header className="header">
    <SearchHeader>
    <Link to="/">
    <img className="image" src={GoogleFoto} alt=""/>
    </Link>
<form onSubmit={submit}>
      <InputContainer>
        <SearchIcon style={{color:"#a3b1b1",
        height:"20px",
        marginTop:"3px",
        cursor:"pointer"}}/>
    <input 
     className="input"
     type="text"
     value={inputText}
     onChange={e=>setInputText(e.target.value)}/>
    
    <MicIcon style={{color:"#a3b1b1",
        height:"22px",
    cursor:"pointer"}}/>

    </InputContainer> 
    </form>

     </SearchHeader>
     <Items>
     <AllItems>
     <Contents>
     <SearchIcon style={{fontSize:"17px",
     color:"rgba(0,0,0,0.7)"}}/>
     <a>All</a>
     </Contents> 
      <Contents>
     <DescriptionIcon style={{fontSize:"17px",
     color:"rgba(0,0,0,0.7)"}}/>
     <a>News</a>
     </Contents>  
     <Contents>
     <ImageIcon style={{fontSize:"17px",
     color:"rgba(0,0,0,0.7)"}}/>
     <a>images</a>
     </Contents>  
     <Contents>
     <LocalOfferIcon style={{fontSize:"17px",
     color:"rgba(0,0,0,0.7)"}}/>
     <a>shopping</a>
     </Contents>  
     <Contents>
     <RoomIcon style={{fontSize:"17px",
     color:"rgba(0,0,0,0.7)"}}/>
     <a>maps</a>
     </Contents>
     <Contents>
     <MoreVertIcon style={{fontSize:"17px",
     color:"rgba(0,0,0,0.7)"}}/>
     <a>more</a>
     </Contents>
     </AllItems>
     

     </Items>
   </Header>

    <SearchResultsLinks>
    {allResults && 
		<h4>About {allResults} results in ({resultTime} seconds)</h4>
	}
	{datas?.items?.map(item=>(
<AllResults>
<h3>Title: {item.title}  </h3>
<p>{item.snippet}</p>
<a href={item.link}>{item.link}</a>
</AllResults>
))}
	
</SearchResultsLinks>
    </SearchPageContainer>
  )
}

export default SearchPage;

////----------------------------------------

const SearchPageContainer=styled.div`
display:flex;
flex-direction:column;
margin:0;
margin-bottom:50px;
border-bottom:0.6px solid gray;

`

const Header=styled.div`
padding-bottom:30px;
	border-bottom-style: all;

	@media only screen and (max-width:767px){
		padding-bottom:20px;
}

`


const SearchHeader=styled.div`
display:flex;
margin-top:-35px;
text-align:center;
align-items:center;
.image{
margin-left:-20px;
	height:150px;
	:hover{
		cursor:pointer
	}
	@media only screen and (max-width:767px){
		height:110px;
		margin-top:15px;
	}
}


`
const InputContainer=styled.div`
display:flex;
align-items:center;
text-align:center;
padding:0 12px;
border:1px solid #d4c3c3;
width:530px;
text-align:center;
border-radius:20px;
height:40px;
margin-right:30px;
margin-left:-20px;
	@media only screen and (max-width:767px){
		height:34px;
         width:390px;
	}

 input{
	width:90%;
	outline:none;
	border:none;
	height:30px;
	padding-left:10px;
	font-size:15px;
	color:black;
}

`


const Items=styled.div`
display:flex;
justify-content:space-between;
margin-left:230px;
margin-top:-45px;

a{
	padding-left:8px;
	text-decoration:underline;
	color:rgba(0,0,0,0.7);
	:hover{
cursor:pointer;

	}

}
@media only screen and (max-width:767px){
			margin-top:-25px;
			margin-left:155px;
}
`
const AllItems=styled.div`
display:flex;
`
const Settings=styled.div`
display:flex;
padding:0 5px;
p{
	padding:0 5px;
}
`
const SearchResultsLinks=styled.div`

h4{
	margin-top:15px;
	margin-left:230px;
	font-size:15px;
	color:rgba(0,0,0,0.7);
}
@media only screen and (max-width:767px){
	h4{
		margin-left:160px;
	}
}
`
const AllResults=styled.div`
margin-left:230px;
	margin-top:35px;
	color:black;
	h3{
		color:blue;
		text-decoration:underline;
	}
	a{
		color:blue;
	}
@media only screen and (max-width:767px){
	margin-left:158px;
}

`
const Contents=styled.div`
display:flex;
padding:0 7px;
a{
	margin-left:-8px;
	margin-top:-1px;
}

`