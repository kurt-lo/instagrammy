import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore"
import { firestore } from "../../firebase/index";

const useSearchUser = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [searchUser, setSearchUser] = useState(null)

  const fetchUser = async (username) => {
    setIsLoading(true)
    setSearchUser(null);
    try {
      const q = query(collection(firestore, 'users'), where('username', '==', username))
      const querySnapshot = await getDocs(q)
      if (querySnapshot.empty) {
        return console.log('Error', 'User not found!', 'error')
      }
      querySnapshot.forEach((doc) => {
        setSearchUser(doc.data())
      });
    } catch (error) {
      console.log('Error', error.message, 'error')
      setSearchUser(null)
    } finally {
      setIsLoading(false)
    }
  };

  return { isLoading, fetchUser, searchUser, setSearchUser };

}
export default useSearchUser
