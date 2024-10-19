import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Test from './pages/Test'
function App() {
 

  return (
    <>
  <BrowserRouter>
  <Routes>


<Route path='/' element={<Home/>}/>

<Route path='/Signup' element={<Signup/>}/>

<Route path='/test' element={<Test/>}/>






  </Routes>
  
  
  </BrowserRouter>



    </>
  )
}

export default App
