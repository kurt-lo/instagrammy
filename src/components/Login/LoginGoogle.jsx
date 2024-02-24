import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth, firestore } from "../../firebase/index";
import useUserStore from '../../store/useUserStore'
import googleLogo from '../../assets/images/google.png'
import { doc, getDoc, setDoc } from 'firebase/firestore';

const LoginGoogle = ({ isLogin }) => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const userLoggedIn = useUserStore(state => state.login)

    const handleGoogleLogin = async () => {
        try {
            const googleUser = await signInWithGoogle()
            if (!googleUser && error) {
                console.log(error.message)
                return
            }

            const userRef = doc(firestore, 'users', googleUser.user.uid)
            const userSnap = await getDoc(userRef);

			if (userSnap.exists()) {
				// login user if its already exists
				const userDoc = userSnap.data();
				localStorage.setItem("user-info-ig-clone", JSON.stringify(userDoc));
				userLoggedIn(userDoc);
			} else {
				// signup user using google if not already have one
				const userDoc = {
					uid: googleUser.user.uid,
					email: googleUser.user.email,
					username: googleUser.user.email.split("@")[0],
					fullName: googleUser.user.displayName,
					bio: "",
					profilePicURL: googleUser.user.photoURL,
					followers: [],
					following: [],
					posts: [],
					createdAt: Date.now(),
				};
				await setDoc(doc(firestore, "users", googleUser.user.uid), userDoc);
				localStorage.setItem("user-info-ig-clone", JSON.stringify(userDoc));
				userLoggedIn(userDoc);
			}
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='flex gap-[.5rem] justify-center items-center cursor-pointer text-white'
            onClick={handleGoogleLogin}
        >
            <img src={googleLogo} className='h-5 w-5' alt="Google Logo" />
            <span className='text-slate-200 text-sm'>{isLogin ? 'Login' : 'Sign up'} with Google</span>
        </div>
    )
}

export default LoginGoogle