import './App.css'
import SignUp from './pages/Auth/SignUp'
import Home from './pages/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'



function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/signup' element={<SignUp />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
