import { useState } from "react"
import useUserStore from "../../store/useUserStore"
import { getDownloadURL, ref, uploadString } from "firebase/storage"
import { firestore, storage } from '../../firebase/index'
import { doc, updateDoc } from "firebase/firestore"
import useShowAlert from "./useShowAlert"

const useUpdateProfile = () => {

    const [isLoading, setIsLoading] = useState(false)
    const userLoggedIn = useUserStore(state => state.user)
    const setUserLoggedIn = useUserStore(state => state.setUser)
    const setUserProfile = useUserStore(state => state.setUserProfile)

    const { showAlert, alertMessage, showAlertFunction } = useShowAlert()

    const editProfile = async (fullName, username, bio, selectedFile) => {
        if (isLoading || !userLoggedIn) {
            showAlertFunction('Not authenticated')
            return
        }
        setIsLoading(true)

        const storageRef =  ref(storage, `profilePics/${userLoggedIn.uid}`)
        const userDocumentRef = doc(firestore, 'users', userLoggedIn.uid)

        let URL = ''
        try {
            if (selectedFile) {
                await uploadString(storageRef, selectedFile, 'data_url')
                URL = await getDownloadURL(ref(storage, `profilePics/${userLoggedIn.uid}`))
            }

            const updatedUser = {
                ...userLoggedIn,
                fullName: fullName || userLoggedIn.fullName,
                username: username || userLoggedIn.username,
                bio: bio || userLoggedIn.bio,
                profilePicURL: URL || userLoggedIn.profilePicURL,
            }

            await updateDoc(userDocumentRef, updatedUser)
            localStorage.setItem('user-info-ig-clone', JSON.stringify(updatedUser))
            setUserLoggedIn(updatedUser)
            setUserProfile(updatedUser)
            showAlertFunction('Profile updated successfull')
        } catch (error) {
            showAlertFunction(error.message)
        } finally {
            setIsLoading(false)
        }
    }

  return {
    editProfile,
    isLoading,
    showAlert, 
    alertMessage
  }
}

export default useUpdateProfile