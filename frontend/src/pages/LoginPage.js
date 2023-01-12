import React from "react";
/* import { Link } from "react-router-dom"; */
import { InnerWrapper, PageContainer, /* Button, */ Img } from 'utils/GlobalStyles'
/* import { UserInput } from */
import LoginPageImg from '../utils/assets/loginpage-img.jpg';
import Box  from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Buttons } from 'components/Button';
import styled from 'styled-components/macro';
import Typography from '@mui/material/Typography'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { Link } from 'react-router-dom';


export const LoginPage = ({ onLogin }) => {
    
    let password
    let email
    const onSubmit = (e) => {
        onLogin({
            email: email,
            password: password,
        })
    }

    return (
        <PageContainer>
        <InnerWrapper formWrapper>
        <FormContainer>
        <ThemeProvider theme={customTheme}>
        <div>
          <Typography variant="h3" color="common.white">
            Login
          </Typography>
        </div>

        <Box
            component="form"
            sx={{
                color: '#f5f5f5',
                display: 'flex',
                flexDirection: 'column' 
            }}
            noValidate
            autoComplete="off"
        >
            <TextField 
            sx={{
                margin: '10px',
                "& .MuiInputBase-root": {"& > fieldset": {
                        borderColor: "#f5f5f5"
                    }
                },
                "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
              borderColor: "#f5f5f5"
                    }
                  },
                  label: {
                    color: "#f5f5f5",
                  }
                 
            }}
            id="email" 
            label="Enter your Email" 
            variant="outlined"
            color="primary"
            onChange={(e)=>{
                email = e.target.value
            }}
            />
            <TextField 
            sx={{
                margin: '10px',
                "& .MuiInputBase-root": {"& > fieldset": {
                        borderColor: "#f5f5f5"
                    }
                },
                "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
              borderColor: "#f5f5f5"
                    }
                  },
                  label: {
                    color: "#f5f5f5f5",
                  }
                 
            }}
            id="password" 
            type= "password"
            label="Enter your Password" 
            variant="outlined"
            onChange={(e)=>{
                password = e.target.value
            }}
            />
        </Box>
        </ThemeProvider>

        <Buttons  
          title="Login"
          handleAction={onSubmit}
        />
        
        <P>Not a member? <Link to="/register"><strong>Register here</strong></Link></P>
      

        </FormContainer>
        
        </InnerWrapper>
        <Img src={LoginPageImg} alt="login-image" />
        </PageContainer>
    )
}

const FormContainer = styled.div `
border: 2px solid whitesmoke;
border-radius: 15px;
padding: 20px;
text-align: center;
color: whitesmoke;
`

const P = styled.p`
margin-top: 5%;
`

const customTheme = createTheme({
    palette: {
      primary: {
        light: "#f5f5f5", // border
        main: "#f5f5f5", //button and outline
        dark: "#f5f5f5", 
        contrastText: "#f5f5f5" //text when u type
      },
      secondary: {
        light: "#f5f5f5",
        main: "#c93434",
        dark: "#f5f5f5",
        contrastText: "#f5f5f5"
      },
      text: {
        primary: "#f5f5f5"
      }
      }
  });

/* const LabelWrapper = styled.div`
    text-align: center;
    padding: 70px 0 30px;
`

const LabelInnerWrapper = styled.div`
    display: inline-block;
    margin: 20% 2% 0;
    label {margin: 5px;}

` 

 const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
` 

const InputContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
        margin: 5px;
        padding: 10px;
        color: var(--secondary);
    }
    input {
        border: none;
        border: 2px solid var(--secondary);
        background-color: transparent;
        padding: 12px;
        
    }
`
*/
