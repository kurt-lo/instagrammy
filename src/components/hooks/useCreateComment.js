import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import useUserStore from "../../store/useUserStore"
import { firestore } from "../../firebase"
import { useState } from "react"

export default function useCreateComment() {

    const [isCommenting, setIsCommenting] = useState(false)
    const userLoggedIn = useUserStore(state => state.user)
    const addComment = useUserStore(state => state.addComment)

    const handleCreateComment = async (postId, comment) => {
        if (isCommenting) return
        if (!userLoggedIn) return alert('You must be logged in to comment')
        setIsCommenting(true)
        const newComment = {
            comment,
            createdAt: Date.now(),
            createdBy: userLoggedIn.uid,
            postId,
        };
        try {
            await updateDoc(doc(firestore, "posts", postId), {
                comments: arrayUnion(newComment),
            });
            addComment(postId, newComment);
        } catch (error) {
            console.log(error.message)
            alert.log(error.message)
        } finally {
            setIsCommenting(false)
        }
    }

    return { 
        isCommenting, 
        handleCreateComment 
    };
}
