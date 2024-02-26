import ProfileNavigation from "./ProfileNavigation"
import imgOne from '../../assets/images/img2.png'
import {
  Dialog,
  Avatar,
  Button
} from "@material-tailwind/react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { useState } from "react";
import ProfileComment from "./ProfileComment";
import useFetchUserPosts from "../hooks/useFetchUserPosts";
import useUserStore from "../../store/useUserStore";
import { deleteObject, ref } from "firebase/storage";
import { firestore, storage } from "../../firebase";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";

const ProfilePost = () => {

  const userLoggedIn = useUserStore(state => state.user)
  const userProfile = useUserStore(state => state.userProfile)
  const deletePost = useUserStore(state => state.deletePost)
  const { isLoading, posts } = useFetchUserPosts()

  //for opening the post modal
  const [open, setOpen] = useState(false);
  // State to manage the currently selected post
  const [selectedPost, setSelectedPost] = useState(null);
  // State to manage the post
  const [isDeleted, setIsDeleted] = useState(false)

  const handleOpen = (post) => {
    setSelectedPost(post);
    setOpen(true); // Open the modal when a post is clicked
  };

  const handleClose = () => {
    setSelectedPost(null); // Clear the selected post when closing
    setOpen(false);
  };

  // delete the post of authenticated user
  const handleDeletePost = async () => {
    if (!window.confirm('Really sure want to delete this post?')) return;
    if (isDeleted) return
    if (!selectedPost) {
      return alert('Please select a post to delete.');
    }
    try {
      const imageRef = ref(storage, `posts/${selectedPost.id}`);
      await deleteObject(imageRef);
      const userRef = doc(firestore, "users", userLoggedIn.uid);
      await deleteDoc(doc(firestore, "posts", selectedPost.id));

      await updateDoc(userRef, {
        posts: arrayRemove(selectedPost.id),
      });

      deletePost(selectedPost.id);
      window.location.reload()
      console.log("Success", "Post deleted successfully", "success");
    } catch (error) {
      console.log(error.message)
    } finally {
      setIsDeleted(false)
    }
  }
  // console.log(posts)
  return (
    <>
      <div className="w-[90%] xl:w-[60%]">
        <ProfileNavigation />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 pt-[1rem]">
           {/* THIS WILL EXECUTE IF THERE IS NO POST */}
          {!isLoading && posts.length === 0 && (
            <p className="text-center text-gray-200 font-medium">There are no posts yet.</p>
          )}
          {/* THIS THE POST IMAGE */}
          {!isLoading && (
            posts.map((post) => (
              <img key={post.id} src={post.imageURL} alt={post.description || "Post image"} className="rounded-md object-contain aspect-square cursor-pointer" onClick={() => handleOpen(post)} />
            ))
          )}
        </div>
      </div>

      <Dialog open={open} handler={handleClose} size="xl" className="flex flex-col sm:flex-row">
        {selectedPost && (
          <>
            <div className="flex-[1.5]">
              <img src={selectedPost.imageURL} alt={selectedPost.description || "Post image"} className="aspect-square object-contain overflow-hidden" />
            </div>
            <div className="flex flex-col text-darkBlue flex-1 px-[2rem]">
              <div className="flex items-center gap-2 py-[1rem]">
                <Avatar src={userProfile.profilePicURL} alt="avatar" size="xs" />
                <span className="text-sm font-[700]">{userProfile.username}</span>
                {userLoggedIn?.uid === userProfile.uid && (
                  <Button className="ml-auto cursor-pointer"
                    loading={isDeleted}
                    onClick={handleDeletePost}
                  >
                    <MdDeleteOutline size={20}/>
                  </Button>
                )}
              </div>
              <div className="h-[1px] bg-gray-300"></div>
              <div className=" overflow-y-scroll h-[10rem] sm:h-[5rem] lg:h-[20rem]">
                <ProfileComment post={selectedPost} />
              </div>
              <div className="mt-auto pb-[2rem] sm:pb-2 md:pb-[2rem] pt-[2rem] sm:pt-0">
                <div className="flex gap-2">
                  <FaRegHeart size={25} />
                  <FaRegComment size={25} />
                </div>
                <span className="text-sm font-[700]">{selectedPost.likes || 0} likes</span>
                <div className="flex w-full justify-between items-center gap-[.5rem] p-0 bottom-0">
                  <input type="text" placeholder="Add a comment..." className="text-sm w-full bg-transparent focus:border-darkBlue focus:border-b focus:outline-none" />
                  <span className="text-sm font-[700]">Post</span>
                </div>
              </div>
            </div>
          </>
        )}
      </Dialog>
    </>
  )
}

export default ProfilePost