import { useEffect, useState } from "react"
import useUserStore from "../../store/useUserStore"
import { collection, getDocs, query } from "firebase/firestore"
import { firestore } from "../../firebase"


const useFetchUsername = () => {

    const [isLoading, setIsLoading] = useState(false)
    const userProfile = useUserStore(state => state.userProfile)
    const setUserProfile = useUserStore(state => state.setUserProfile)

    useEffect(() => {
        const fetchUserProfile = async (username) => {
            setIsLoading(true)
            try {
                const q = query(collection(firestore, 'users'), where('username', '==', username))
                const querySnapShot = await getDocs(q)

                if (querySnapShot.empty) {
                    setUserProfile(null)
                }

                let userDocument
                querySnapShot.forEach(doc => {
                    userDocument = doc.data()
                })
                
                setUserProfile(userDocument)
                console.log(userDocument)
            } catch (error) {
                console.log(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchUserProfile()
    }, [username, setUserProfile])

    return {
        userProfile,
        isLoading
    }
}

export default useFetchUsername