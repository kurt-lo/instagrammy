import { MdGridOn } from "react-icons/md";
import { MdBookmarkBorder } from "react-icons/md";
import { PiUserRectangle } from "react-icons/pi";

const ProfileNavigation = () => {
    return (
        <div className="flex justify-center gap-[1rem] md:gap-[4rem] text-[12px] pt-[1rem] border-t border-gray-500">
            <div className="flex items-center gap-1">
                <MdGridOn />
                <span>POSTS</span>
            </div>
            <div className="flex items-center gap-1">
                <MdBookmarkBorder />
                <span>SAVED</span>
            </div>
            <div className="flex items-center gap-1">
                <PiUserRectangle />
                <span>TAGGED</span>
            </div>
        </div>
    )
}

export default ProfileNavigation