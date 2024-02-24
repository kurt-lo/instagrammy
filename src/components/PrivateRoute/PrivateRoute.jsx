import { Navigate, Outlet } from 'react-router-dom'
import useUserStore from '../../store/useUserStore';

const PrivateRoute = () => {

    // coming from the localstorage
    const userAuthenticated = useUserStore(state => state.user)

    return userAuthenticated ? <Outlet /> : <Navigate to='/login' replace />
}

export default PrivateRoute