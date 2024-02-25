import { Avatar, Button, Alert } from "@material-tailwind/react";
import useUserStore from "../../store/useUserStore";
import { useRef } from "react";
import UpdateOwnProfile from "./UpdateOwnProfile";
import useFollowAndUnfollowUser from '../hooks/useFollowAndUnfollowUser'

const ProfileInfo = () => {

  const userLoggedIn = useUserStore(state => state.user)
  const userProfile = useUserStore(state => state.userProfile)

  const { handleFollowAndUnfollowUser, isFollowing, isLoading } = useFollowAndUnfollowUser(userProfile?.uid)

  // for dialog in updateprofile
  const dialog = useRef()
  const handleOpen = () => (
    dialog.current.open()
  );

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:gap-[1rem] lg:gap-[5rem] pt-[2rem]">
        <Avatar src={userProfile.profilePicURL} alt='Profile Picture' className="h-[9rem] w-[9rem] mx-auto md:mx-0" />
        <div className="mx-auto md:mx-0">
          <div className="flex flex-col items-center md:flex-row pt-[1rem] md:pt-0">
            <span className="mr-[1rem] text-center md:text-left">{userProfile.username}</span>
            {userLoggedIn && userLoggedIn.username === userProfile.username ? (
              <Button color="white" size='sm' className="text-[12px]" onClick={handleOpen}>Edit Profile</Button>
            ) : (
              <Button className="text-[12px]" color="white" size='sm'
                loading={isLoading}
                onClick={handleFollowAndUnfollowUser}
                >
                {isFollowing ? "Unfollow" : "Follow"}
              </Button>
            )}
          </div>
          <div className="flex gap-[2rem] pt-[1rem]">
            <span>{userProfile.posts.length} Posts</span>
            <span>{userProfile.followers.length} Followers</span>
            <span>{userProfile.following.length} Following</span>
          </div>
          <div className="pt-[1rem] text-sm text-center md:text-left">
            <span>{userProfile.fullName}</span>
          </div>
          <div className="pt-[1rem] text-sm text-center md:text-left">
            <span>{userProfile.bio}</span>
          </div>
        </div>
      </div>
      <UpdateOwnProfile ref={dialog} />
    </>
  )
}

export default ProfileInfo