import { useState } from "react";
import useUserStore from "../../store/useUserStore";
import { useLocation } from 'react-router-dom'
import { addDoc, arrayUnion, collection, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "../../firebase";

export default function useCreatePost() {
    const [isLoading, setIsLoading] = useState(false);
    const authUser = useUserStore((state) => state.user);
    const createPost = useUserStore((state) => state.createPost);
    const addPost = useUserStore((state) => state.addPost);
    const userProfile = useUserStore((state) => state.userProfile);
    const { pathname } = useLocation();

    const handleCreatePost = async (selectedFile, caption) => {
        if (isLoading) return;
        if (!selectedFile) throw new Error("Please select an image");
        setIsLoading(true);
        const newPost = {
            caption: caption,
            likes: [],
            comments: [],
            createdAt: Date.now(),
            createdBy: authUser.uid,
        };

        try {
            const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
            const userDocRef = doc(firestore, "users", authUser.uid);
            const imageRef = ref(storage, `posts/${postDocRef.id}`);

            await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
            await uploadString(imageRef, selectedFile, "data_url");
            const downloadURL = await getDownloadURL(imageRef);

            await updateDoc(postDocRef, { imageURL: downloadURL });

            newPost.imageURL = downloadURL;

            if (userProfile.uid === authUser.uid) createPost({ ...newPost, id: postDocRef.id });

            if (pathname !== "/" && userProfile.uid === authUser.uid) addPost({ ...newPost, id: postDocRef.id });

            console.log("Success", "Post created successfully", "success");
        } catch (error) {
            console.log("Error", error.message, "error");
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, handleCreatePost };
}
