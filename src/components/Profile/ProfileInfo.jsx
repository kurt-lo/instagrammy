import { Avatar } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import useUserStore from "../../store/useUserStore";

const ProfileInfo = () => {

  const userLoggedIn = useUserStore(state => state.user)
  const userProfile = useUserStore(state => state.userProfile)

  return (
    <div className="flex flex-col md:flex-row justify-center md:gap-[1rem] lg:gap-[5rem] pt-[2rem]">
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" className="h-[9rem] w-[9rem] mx-auto md:mx-0" />
      <div className="mx-auto md:mx-0">
        <div className="flex flex-col items-center md:flex-row pt-[1rem] md:pt-0">
          <span className="mr-[1rem] text-center md:text-left">{userLoggedIn.username}</span>
          {userLoggedIn && userLoggedIn.username === userProfile.username ? (
            <Button color="white" size='sm' className="text-[12px]">Edit Profile</Button>
          ) : (
            <Button color="white" size='sm' className="text-[12px]">Follow</Button>
          )}
        </div>
        <div className="flex gap-[2rem] pt-[1rem]">
          <span>{userLoggedIn.posts.length} Posts</span>
          <span>{userLoggedIn.followers.length} Followers</span>
          <span>{userLoggedIn.following.length} Following</span>
        </div>
        <div className="pt-[1rem] text-sm text-center md:text-left">
          <span>{userLoggedIn.fullName}</span>
        </div>
        <div className="pt-[1rem] text-sm text-center md:text-left">
          <span>{userLoggedIn.bio}</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo