import { Avatar } from "@material-tailwind/react";
import imgOne from '../../assets/images/img1.png'
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

const NewsFeedPost = () => {
    return (
        <>
            <div className="text-white flex w-[15rem] sm:w-[80%] xl:w-full mx-auto">
                <div className="flex flex-col gap-[.6rem] pt-[8rem] w-[30rem]">
                    <div className="flex gap-[.5rem] items-center">
                        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xs" />
                        <span className="text-sm ">Kurtlo</span>
                        <span className="text-sm text-gray-500">• 1w</span>
                        <span className="text-sm ml-auto">Follow</span>
                    </div>
                    <div>
                        <img src={imgOne} alt="Newsfeed Post" />
                    </div>
                    <div className="flex items-center gap-[.5rem]">
                        <FaRegHeart size={25} />
                        <FaRegComment size={25} />
                    </div>
                    <div className="flex text-sm gap-[.5rem]">
                        <span>10</span>
                        <span>Likes</span>
                    </div>
                    <div className="flex item-center gap-[.5rem] text-sm">
                        <span>Kurtlo</span>
                        <span className="text-gray-500">Feeling Good...</span>
                    </div>
                    <div>
                        <span className="text-sm">View all 100 comments</span>
                    </div>
                    <div className="flex w-full justify-between items-center gap-[.5rem] p-0">
                        <input type="text" placeholder="Add a comment..." className="text-sm w-full bg-transparent focus:border-white focus:border-b focus:outline-none" />
                        <span className="text-sm">Post</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsFeedPost