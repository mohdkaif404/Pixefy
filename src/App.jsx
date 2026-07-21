import { Navbar } from './components/navbar/navbar';
import "./App.css"

import { Outlet } from 'react-router';
function App() {
 

  return (
    <>
    
   
     <Navbar></Navbar>
     <Outlet></Outlet>
     
    </>
  )
}

export default App
