import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../../firebase/index';
import useUserStore from '../../store/useUserStore';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';

const useRegisterUserWithEmailAndPassword = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const userLoggedIn = useUserStore(state => state.login)

    const registerWithEmailAndPassword =  async (email, username, fullName, password) => {
        if (!email || !password || !username || !fullName) {
            console.log('Please provide all the fields!')
            return
        }

        const usersRef = collection(firestore, 'users')

        const q = query(usersRef, where('username', '==', username))
        const querySnapShot = await getDocs(q)

        if (!querySnapShot.empty) {
            console.log('Username already exists')
            return
        }

        try {
            const newRegisterUser = await createUserWithEmailAndPassword(email, password)
            if (!newRegisterUser && error) {
                console.log(error.message)
                return
            }

            if (newRegisterUser) {
                const userDocument = {
                    uid: newRegisterUser.user.uid,
                    email: email,
                    username: username,
                    fullName: fullName,
                    bio: '',
                    followers: [],
                    following: [],
                    posts: [],
                    profilePicURL: '',
                    createdAt: Date.now(),
                }
                await setDoc(doc(firestore, 'users', newRegisterUser.user.uid), userDocument)
                localStorage.setItem('user-info-ig-clone', JSON.stringify(userDocument))
                userLoggedIn(userDocument)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return {
        registerWithEmailAndPassword,
        loading,
        error
    }
}

export default useRegisterUserWithEmailAndPassword