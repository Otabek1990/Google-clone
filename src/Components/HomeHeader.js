import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const HomeHeader = (props) => {
  return (
    <HomeHeaderContainer>
    <LeftSide>
    <Link style={{textDecoration:"none"}} to="about"><p>About</p></Link>
    <Link style={{textDecoration:"none"}} to="store"><p>Store</p></Link>
    </LeftSide>
    <RightSide>
    <Link style={{textDecoration:"none"}}  to="gmail"><p>Gmail</p></Link>
    <Link style={{textDecoration:"none"}}  to="images"><p>Images</p></Link>
    <Icons>
    <AppsIcon style={{paddingRight:"10px",
    marginBottom:"5px",
    color:"#d69f9f"}}/>
    <AccountCircleIcon style={{
    color:"#a4c3c3",
fontSize:"35px",
paddingTop:"5px"
}}/>
    </Icons>

    </RightSide>

    </HomeHeaderContainer>
  )
}

export default HomeHeader;

const HomeHeaderContainer=styled.div`
display:flex;
justify-content:space-between;
padding:10px 20px;
font-size:15px;



p{
	margin-left:10px;
	text-decoration:none;
	color:black;
	cursor:pointer;

	:hover{
		text-decoration:underline
	}

}

`
const LeftSide=styled.div`
display:flex;
align-items:center;


`
const RightSide=styled.div`
display:flex;
align-items:center;
justify-content:center


`
const Icons=styled.div`
cursor:pointer;
margin-left:20px;
text-align:center;
align-items:center;
justify-content:center;


`