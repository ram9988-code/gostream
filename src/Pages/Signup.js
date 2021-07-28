import React, { useState,useContext } from 'react';
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from '../context/firebase'
import {HeaderContainer} from '../Container/header';
import {FooterContainer} from '../Container/footer';
import * as ROUTES from '../constants/routes'
import {Form } from '../Componentes'

export default function Signup(){
   const history=useHistory();
   const {firebase}=useContext(FirebaseContext);
   const [firstName,setFirstName] =useState('');
   const [emailAddress,setEmailAddress] =useState('');
   const [password,setPassword] =useState('');
   const [error,setError]=useState('');

   const isInvalid =firstName ===''||password ===''||emailAddress==='';
   const handleSignUp=(event)=>{
       event.preventDefault();

       //db firebase Stuff
       firebase.auth()
       .createUserWithEmailAndPassword(emailAddress,password)
       .then((result)=>{
           result.user
           .updateProfile({
               displayName:firstName,
               photoUrl:Math.floor(Math.random()*5)+1,
           }).then(()=>{
               history.push(ROUTES.BROWSE);

           })
       }).catch((error)=>{
           setEmailAddress('');
           setFirstName('');
           setPassword('');
           setError(error.message);
       })
   }

    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignUp} method="POST">
                    <Form.Input placeholder="First Name"
                    value={firstName}
                    onChange={({target})=> setFirstName(target.value)}
                    />
                     <Form.Input placeholder="Email address"
                    value={emailAddress}
                    type="email"
                    onChange={({target})=> setEmailAddress(target.value)}
                    />
                     <Form.Input placeholder="Password"
                    value={password}
                    type="password"
                    onChange={({target})=> setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type="submit">Sign Up</Form.Submit>

                    <Form.Text>
                        Already a user?<Form.Link to='/signin'>Sign in now.</Form.Link>

                    </Form.Text>
                    <Form.SmallText>
                    This page is protected by Google reCAPTCHA to ensure you're a
                    not a bot. Learn more.
                    </Form.SmallText>
                </Form.Base>
            </Form>

        </HeaderContainer>
        <FooterContainer/>
        </>
    )
}