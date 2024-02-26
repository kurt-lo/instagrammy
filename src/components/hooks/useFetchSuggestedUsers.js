import { useEffect, useState } from "react"
import useUserStore from "../../store/useUserStore"
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore"
import { firestore } from "../../firebase"

export default function useFetchSuggestedUsers() {

    const [isLoading, setIsLoading] = useState(false)
    const [suggestedUsers, setSuggestedUsers] = useState([])
    const userLoggedIn = useUserStore(state => state.user)

    useEffect(() => {
        const fetchSuggestedUsers = async () => {
            setIsLoading(true)
            try {
                const usersRef = collection(firestore, 'users')
                //dont get your own profile and also user that you follow
                const q = query(usersRef, where('uid', 'not-in', [userLoggedIn.uid, ...userLoggedIn.following]),
                    orderBy('uid'),
                    limit(5)
                )

                const querySnapShot = await getDocs(q)
                const users = []

                querySnapShot.forEach((doc) => {
                    users.push({ ...doc.data(), id: doc.id })
                })

                setSuggestedUsers(users)
            } catch (error) {
                console.log(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        if (userLoggedIn) {
            fetchSuggestedUsers()
        }
    }, [userLoggedIn])

    return {
        suggestedUsers, isLoading
    }
}
