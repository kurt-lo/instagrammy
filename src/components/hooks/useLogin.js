import { auth, firestore } from "../../firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useUserStore from "../../store/useUserStore";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import useShowAlert from "./useShowAlert";

const useLogin = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const userLoggedIn = useUserStore(state => state.login)

    const { showAlert, alertMessage, showAlertFunction } = useShowAlert()

    const loginWithEmailAndPassword = async (email, password) => {
        try {
            if (!email || !password) {
                showAlertFunction('Please provide both email and password')
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
            showAlertFunction(error.message);
        }
    }

    return {
        loginWithEmailAndPassword,
        loading,
        error,
        showAlert,
        alertMessage,
    }
}

export default useLogin