import React from 'react'
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom/client";

import './index.css'
import Login from './Login.jsx'
import SignUp from './SignUp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignUp/>
  </React.StrictMode>,
)
