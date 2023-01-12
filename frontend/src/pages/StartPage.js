import React from "react";
import { Link } from "react-router-dom";
/* import { Navbar } from "components/Navbar"; */
import StartImg from '../utils/assets/startimage.jpg';
import styled from "styled-components/macro";
import { PageContainer, InnerWrapper, Button, Img } from "utils/GlobalStyles";

export const StartPage = () => {
    return (
        <PageContainer>
          <InnerWrapper>
            <TextContainer>
                <h1>Level up your language skills!</h1>
                <p>Why practice alone when you can do it together? Grab a coffee and let's go!</p>
                <Link to="/login"><Button start
                type="button">Start</Button></Link>
            </TextContainer>
            </InnerWrapper>
            {/* <ImgContainer> */}
            <Img src={StartImg} alt="langish logo" />
           {/* </ImgContainer> */}
            
        </PageContainer>
    )
}

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50% 0;
  color: var(--secondary);
  text-align: center;

  @media (max-width: 350px){
    margin: 0 5% 10% 10%;
  }

  @media (min-width: 350px) and (max-width: 700px){
    margin: 10% 5% 0 10%;
  }

  // Size of font for medium screens
  @media (min-width: 701px) and (max-width: 1000px){
    margin: 8% 10% 0 10%;
  }

  h1{
    font-size: 45px;
    margin-bottom: 5%;
  }

  p{
    font-size: 25px;
    line-height: 35px;
  }

  // Size of font for small screens
  @media (max-width: 700px){
    h1{
      font-size: 25px;
      margin-bottom: 10px;
    }
  
    p{
      font-size: 15px;
      line-height: 20px;
    }
// Size of font for really small screens
    @media (max-width: 350px){
    h1{
      font-size: 16px;
      margin-bottom: 10px;
    }
  
    p{
      font-size: 12px;
      line-height: 20px;
    }
  }
}
`

/* const ImgContainer = styled.div`
    height: 100vh;
` */

