import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore"
import { firestore } from "../../firebase/index";

const useSearchUser = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null)

  const getUserProfile = async (username) => {
    setIsLoading(true)
    setUser(null);
    try {
      const q = query(collection(firestore, 'users'), where('username', '==', username))
      const querySnapshot = await getDocs(q)
      if (querySnapshot.empty) {
        return console.log('Error', 'User not found!', 'error')
      }
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (error) {
      console.log('Error', error.message, 'error')
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  };

  return { isLoading, getUserProfile, user, setUser };

}
export default useSearchUser
