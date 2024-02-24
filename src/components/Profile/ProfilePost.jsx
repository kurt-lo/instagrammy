import ProfileNavigation from "./ProfileNavigation"
import imgOne from '../../assets/images/img2.png'
import {
  Dialog,
  Avatar
} from "@material-tailwind/react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { useState } from "react";
import ProfileComment from "./ProfileComment";

const ProfilePost = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(prevState => !prevState);


  return (
    <>
      <div className="w-[90%] xl:w-[60%]">
        <ProfileNavigation />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 pt-[1rem]">
          <img src={imgOne} alt={imgOne} className="rounded-md object-cover aspect-square cursor-pointer" onClick={handleOpen} />
          <img src={imgOne} alt={imgOne} className="rounded-md object-cover aspect-square cursor-pointer" onClick={handleOpen} />
          <img src={imgOne} alt={imgOne} className="rounded-md object-cover aspect-square cursor-pointer" onClick={handleOpen} />
          <img src={imgOne} alt={imgOne} className="rounded-md object-cover aspect-square cursor-pointer" onClick={handleOpen} />
          <img src={imgOne} alt={imgOne} className="rounded-md object-cover aspect-square cursor-pointer" onClick={handleOpen} />
          <img src={imgOne} alt={imgOne} className="rounded-md object-cover aspect-square cursor-pointer" onClick={handleOpen} />
          <img src={imgOne} alt={imgOne} className="rounded-md object-cover aspect-square cursor-pointer" onClick={handleOpen} />
        </div>
      </div>

      <Dialog open={open} handler={handleOpen} size="xl" className="flex flex-col sm:flex-row">
        <div className="flex-[1.5]">
          <img src={imgOne} alt={imgOne} className="aspect-square object-cover overflow-hidden" />
        </div>
        <div className="flex flex-col text-darkBlue flex-1 px-[2rem]">
          <div className="flex items-center gap-2 py-[1rem]">
            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xs" />
            <span className="text-sm font-[700]">Kurtlo</span>
            <MdDeleteOutline className="ml-auto cursor-pointer" />
          </div>
          <div className="h-[1px] bg-gray-300"></div>
          <div className=" overflow-y-scroll h-[10rem] sm:h-[5rem] lg:h-[20rem]">
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
            <ProfileComment />
          </div>
          <div className="mt-auto pb-[2rem] sm:pb-2 md:pb-[2rem] pt-[2rem] sm:pt-0">
            <div className="flex gap-2">
              <FaRegHeart size={25} />
              <FaRegComment size={25} />
            </div>
            <span className="text-sm font-[700]">10 likes</span>
            <div className="flex w-full justify-between items-center gap-[.5rem] p-0 bottom-0">
              <input type="text" placeholder="Add a comment..." className="text-sm w-full bg-transparent focus:border-darkBlue focus:border-b focus:outline-none" />
              <span className="text-sm font-[700]">Post</span>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ProfilePost