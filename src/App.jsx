import './App.css'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import FormPrincipal from './Components/Home/PagPrincipal/FormPrincipal'
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<FormPrincipal />}></Route>
        <Route element={<ProtectedRoutes/>}>
        <Route path='/home' element={<Home />}></Route>
        </Route>
      </Routes>

    </div>
  )
}

export default App
