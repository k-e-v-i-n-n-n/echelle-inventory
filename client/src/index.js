import React from 'react'
import {BrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {UserProvider} from "./context/UserContext.js"



ReactDOM.render(
  <React.StrictMode>   
    <BrowserRouter>
        <UserProvider>
             <App />
        </UserProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);
