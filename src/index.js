import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {firebase} from './lib/firebase.prod'
import  {GlobalStyles}  from './globle-style';
import { FirebaseContext } from './context/firebase';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase}}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

