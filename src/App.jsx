import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage';
import { auth } from './firebase';
import { useAuthState } from "react-firebase-hooks/auth";

function App() {

  const [userAuthenticated] = useAuthState(auth);

  return (
    <>
      <Routes>
        <Route path='/' element={userAuthenticated ? <HomePage /> : <Navigate to='/login' />} />
        <Route path='/login' element={!userAuthenticated ? <LoginPage /> : <Navigate to='/' />} />
        <Route path='/:username' element={<ProfilePage />} />
      </Routes>
    </>
  )
}

export default App
