import { collection, query } from "firebase/firestore"
import { useState } from "react"
import { firestore } from "../../firebase"

const useSearch = () => {

    const [searchUser, setSearchUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchUserProfile = async (username) => {
        setIsLoading(true)
        setSearchUser(null)
		try {
			const q = query(collection(firestore, "users"), where("username", "==", username));

			const querySnapshot = await getDocs(q);
			if (querySnapshot.empty) {
                console.log('User not found by username')
                return
            }
			querySnapshot.forEach((doc) => {
				setUser(doc.data());
			});
		} catch (error) {
			console.log(error.message);
			searchUser(null);
		} finally {
			setIsLoading(false);
		}
    }

  return {
    fetchUserProfile,
    searchUser,
    setSearchUser,
    isLoading
  }
}

export default useSearch