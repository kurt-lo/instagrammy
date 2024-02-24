import { Avatar } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const ProfileInfo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:gap-[1rem] lg:gap-[5rem] pt-[2rem]">
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" className="h-[9rem] w-[9rem] mx-auto md:mx-0" />
      <div className="mx-auto md:mx-0">
        <div className="flex flex-col md:flex-row pt-[1rem] md:pt-0">
          <span className="mr-[1rem] text-center md:text-left">Kurtlo</span>
          <Button color="white" size='sm' className="text-[12px]">Edit Profile</Button>
        </div>
        <div className="flex gap-[2rem] pt-[1rem]">
          <span>0 Posts</span>
          <span>0 Followers</span>
          <span>0 Following</span>
        </div>
        <div className="pt-[1rem] text-sm text-center md:text-left">
          <span>Russel Kurt Nolasco</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo