import { Navbar } from './components/navbar/navbar';
import "./App.css"
import { Home } from './pages/Home';
import { Liked } from './pages/Liiked';  
import { Image } from './pages/image';
function App() {
 

  return (
    <>
    
   
     <Navbar></Navbar>
     {/* <Home></Home> */}
     <Image></Image>
     {/* <Liked/> */}
     
    </>
  )
}

export default App
