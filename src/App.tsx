import './styles/App.css'
import Login from './pages/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
