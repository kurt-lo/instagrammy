import { auth, firestore } from "../../firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useUserStore from "../../store/useUserStore";
import { doc, getDoc } from "firebase/firestore";

const useLogin = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const userLoggedIn = useUserStore(state => state.login)

    const loginWithEmailAndPassword = async (email, password) => {
        try {
            if (!email || !password) {
                console.log('Please provide username or password')
                return
            }

            const userCredential = await signInWithEmailAndPassword(email, password)

            if (userCredential) {
                const docRef = doc(firestore, 'users', userCredential.user.uid)
                const docSnapShot = await getDoc(docRef)
                localStorage.setItem('user-info-ig-clone', JSON.stringify(docSnapShot.data()))
                userLoggedIn(docSnapShot.data())
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return {
        loginWithEmailAndPassword,
        loading,
        error
    }
}

export default useLogin