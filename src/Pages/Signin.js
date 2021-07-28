import React, { useState,useContext } from 'react';
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from '../context/firebase'
import {HeaderContainer} from '../Container/header';
import {FooterContainer} from '../Container/footer';
import * as ROUTES from '../constants/routes'
import {Form } from '../Componentes'
export default function Signin(){
    const history=useHistory();
    const  {firebase } =useContext(FirebaseContext);

    const [emailAddress,setEmailAddres] =useState('');
    const [password,setPassword] =useState('');
    const [error,setError] =useState('');

   const isInValid=password===''|| emailAddress ==='';
   const handleSignin= (event) =>{
       event.preventDefault();
       firebase
       .auth()
       .signInWithEmailAndPassword(emailAddress,password)
       .then(()=>{

           //push to browse page
         history.push(ROUTES.BROWSE);
       }).catch((error)=>{
           setEmailAddres('');
           setPassword('');
           setError(error.message);
       })
   }
    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignin} method="POST">
                  <Form.Input placeholder="Email address"
                  type="email"
                   value={emailAddress}
                   onChange={({ target})=>setEmailAddres(target.value)}
                  />
                  <Form.Input placeholder="Password"
                  type="password"
                  autoComplete="off"
                   value={password}
                   onChange={({ target})=>setPassword(target.value)}
                  />
                  <Form.Submit disabled={isInValid} type="submit">
                      Sign In
                  </Form.Submit>
                </Form.Base>
                <Form.Text>
                    New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                </Form.Text>
                <Form.SmallText>
                    This page is protected by Google reCAPTCHA to ensure you're a
                    not a bot. Learn more.
                </Form.SmallText>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
        </>
    )
}
