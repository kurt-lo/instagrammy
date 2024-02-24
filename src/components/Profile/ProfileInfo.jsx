import { Avatar } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const ProfileInfo = () => {
  return (
    <div className="flex justify-center gap-[5rem] pt-[2rem]">
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" className="h-[9rem] w-[9rem]" />
      <div>
        <div>
          <span className="mr-[1rem]">Kurtlo</span>
          <Button color="white" size='sm' className="text-[12px]">Edit Profile</Button>
        </div>
        <div className="flex gap-[2rem] pt-[1rem]">
          <span>0 Posts</span>
          <span>0 Followers</span>
          <span>0 Following</span>
        </div>
        <div className="pt-[1rem] text-sm">
          <span>Russel Kurt Nolasco</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo