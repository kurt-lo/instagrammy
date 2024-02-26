import { useEffect, useState } from "react"
import useUserStore from "../../store/useUserStore"
import { collection, getDocs, query, where } from "firebase/firestore"
import { firestore } from "../../firebase"

export default function useFetchUserPosts() {

    const [isLoading, setIsLoading] = useState(true)
    const posts = useUserStore(state => state.posts)
    const setPosts = useUserStore(state => state.setPosts)
    const userProfile = useUserStore(state => state.userProfile)

    useEffect(() => {
        const fetchPosts = async () => {
            if (!userProfile) return;
            setIsLoading(true);
            setPosts([]);

            try {
                const q = query(collection(firestore, "posts"), where("createdBy", "==", userProfile.uid));
                const querySnapshot = await getDocs(q);

                const posts = [];
                querySnapshot.forEach((doc) => {
                    posts.push({ ...doc.data(), id: doc.id });
                });

                posts.sort((a, b) => b.createdAt - a.createdAt);
                setPosts(posts);
            } catch (error) {
                console.log("Error", error.message, "error");
                setPosts([]);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPosts()
    }, [setPosts, userProfile])

    return {
        posts,
        isLoading
    }
}
