import { Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage/Homepage'
import { Navigation } from './components/Homepage'
import Login from './pages/AuthPages/Login'
import Register from './pages/AuthPages/Register'

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

// export default App
