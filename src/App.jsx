import './index.css'
import {Button} from './components/buttons/ButtonOne'
import { Navbar } from './components/navbar/navbar';
import { useState } from 'react';
import "./App.css"
import { Categories } from './components/categoriesBar/CateBar';
import { Home } from './pages/Home';
function App() {
 

  return (
    <>
    
   
     <Navbar></Navbar>
     <Home></Home>
     
     
     
    </>
  )
}

export default App
