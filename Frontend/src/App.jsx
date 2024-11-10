import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Success from './Pages/Success'

function App() {

  return (
    <BrowserRouter>
    <h1>Understanding Integration : </h1>
    <nav>
      <Link className='navlink' to="/">Home</Link>
      <Link className='navlink' to="/register">Register</Link>
      <Link className='navlink' to="/login">Login</Link>
    </nav>
    <Routes>
    <Route path='/' element={<Home />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/success' element={<Success />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
