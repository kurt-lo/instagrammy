import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import useUserStore from './store/useUserStore';

function App() {

  const userAuthenticated = useUserStore(state => state.user)

  return (
    <>
      <Routes>
        <Route element={userAuthenticated ? <PrivateRoute /> : <LoginPage />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/:username' element={<ProfilePage />} />
        </Route>
        <Route path='/login' element={userAuthenticated ? <HomePage /> : <LoginPage />} />
      </Routes >
    </>
  )
}

export default App
