import React from 'react';
import * as ROUTES from '../constants/routes';
import {Header} from '../Componentes';
import logo from '../logo.svg'
import { Route } from 'react-router-dom';
import {Profiles} from '../Componentes'
export function SelectProfileContainer({user,setProfile}){
    console.log(user.photoUrl)
    return (
      <>
        <Header bg={false}>
          <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            

          </Header.Frame>
        </Header>
        <Profiles>
          <Profiles.Title>Who's watching?</Profiles.Title>
          <Profiles.List>
            <Profiles.Item onClick={()=>setProfile({displayName:user.displayName,photoUrl:user.photoUrl})} >
              <Profiles.Picture src={user.photoUrl} />
              <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.Item>
          </Profiles.List>
        </Profiles>
      </>
    );
}