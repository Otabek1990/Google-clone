import {useState,useEffect} from 'react';
import axios from 'axios';


const SearchResult = (term) => {

const API_KEY='AIzaSyCh7g51EVza-Rc-oPyd5LkF9r_9uZpryX0';
const CONTEXT_KEY='0478cca8a4b33ed34';
const [data, setData] = useState(null)

 useEffect(() => {
  const getSearchInfos=async()=>{
     axios.get(
     `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`   	
   )
   .then(result=>{
   		setData(result)
   		}
   	) 	
 	}
 	getSearchInfos();
 }, [term])

  return {data}

   }

export default SearchResult;

// https://www.googleapis.com/customsearch/v1?[parameters]
//   	`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
//     	`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}:omuauf_lfve&q=${term}`
