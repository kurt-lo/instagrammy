import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage';

function App() {

  const isLogin = true;

  return (
    <>
      <Routes>
        <Route path='/'  element={<HomePage />} />
        <Route path='/login'  element={<LoginPage />} />
        <Route path='/:username'  element={<ProfilePage />} />
      </Routes>
    </>
  )
}

export default App
