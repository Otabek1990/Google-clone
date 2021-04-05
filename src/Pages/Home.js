import React from 'react';
//import {Link} from 'react-router-dom';
import styled from 'styled-components';
import HomeHeader from '../Components/HomeHeader'
import SearchInput from '../Components/SearchInput'
import GoogleImage from '../images/googlePhoto.webp'

const Home = (props) => {
  return (
    <HomeContainer>
    <HomeHeader/>
    <Google>
     <img src={GoogleImage} alt="google"/>
    </Google>
    <SearchInput/>
    
    </HomeContainer>
  )
}

export default Home;

const HomeContainer=styled.div`
display:flex;
flex-direction:column;

`
const Google=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
align-items:center;
flex:1;
object-fit: contain;
margin-top:30px;
`
