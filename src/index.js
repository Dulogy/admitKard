import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';

import './index.css';


import NumberScreen from "./Components/NumberScreen";
import OtpScreen from "./Components/OtpScreen" ;
import WelcomeScreen from "./Components/WelcomeScreen";

ReactDOM.render(
 <BrowserRouter>
  <Switch>
    <Route exact path ="/" render={(props)=> <NumberScreen{...props}/>}/>
    <Route exact path ="/otp" render={(props)=> <OtpScreen{...props}/>}/>
    <Route exact path ="/welcome" render={(props)=> <WelcomeScreen{...props}/>}/>
  </Switch>
  <ToastContainer/>
 </BrowserRouter>,
  document.getElementById('root')
);
