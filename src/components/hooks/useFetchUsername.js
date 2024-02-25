import { useEffect, useState } from "react"
import useUserStore from "../../store/useUserStore"
import { collection, getDocs, query, where } from "firebase/firestore"
import { firestore } from "../../firebase"
import useShowAlert from "./useShowAlert"

const useFetchUsername = (username) => {

    const [isLoading, setIsLoading] = useState(true)
    const userProfile = useUserStore(state => state.userProfile)
    const setUserProfile = useUserStore(state => state.setUserProfile)

    const { showAlert, alertMessage, showAlertFunction } = useShowAlert()

    useEffect(() => {
        const fetchUserProfile = async () => {
            setIsLoading(true)
            try {
                const q = query(collection(firestore, "users"), where("username", "==", username));
                const querySnapShot = await getDocs(q)

                if (querySnapShot.empty) {
                    setUserProfile(null)
                }

                let userDocument
                querySnapShot.forEach(doc => {
                    userDocument = doc.data()
                })
                
                setUserProfile(userDocument)
                // console.log(userDocument)
            } catch (error) {
                console.log(error.message)
                showAlertFunction(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchUserProfile()
    }, [username, setUserProfile])

    return {
        userProfile,
        isLoading,
        showAlert, 
        alertMessage, 
        showAlertFunction
    }
}

export default useFetchUsername