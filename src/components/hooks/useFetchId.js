import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { firestore } from "../../firebase"

export default function useFetchId(userId) {

    const [isLoading, setIsLoading] = useState(true)
    const [userProfile, setUserProfile] = useState(null)

    useEffect(() => {
        const fetchUserById = async () => {
            setIsLoading(true);
            setUserProfile(null);
            try {
                const userRef = await getDoc(doc(firestore, "users", userId));
                if (userRef.exists()) {
                    setUserProfile(userRef.data());
                }
            } catch (error) {
                console.log("Error", error.message, "error");
            } finally {
                setIsLoading(false);
            }
        };
        fetchUserById();
    }, [setUserProfile, userId]);

    return {
        isLoading,
        userProfile,
    };
}
