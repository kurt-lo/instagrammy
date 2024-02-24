import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from '../../firebase/index'
import useUserStore from '../../store/useUserStore'

const useLogout = () => {

    const [signOut, isLoggingOut, error] = useSignOut(auth);

    const userLoggedOut = useUserStore(state => state.logout)

    const handleLogout = async () => {
        try {
            await signOut()
            localStorage.removeItem('user-info-ig-clone')
            userLoggedOut()
        } catch (error) {
            console.log(error.message)
        }
    }

    return {
        handleLogout,
        isLoggingOut,
        error
    }
}

export default useLogout