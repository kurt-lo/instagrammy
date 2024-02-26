import {
    Avatar
} from "@material-tailwind/react";
import useUserStore from "../../store/useUserStore";

const ProfileComment = ({ post }) => {

    const userLoggedIn = useUserStore(state => state.user)

    return (
        <div className="flex pt-[1rem] text-sm gap-2">
            <Avatar src={userLoggedIn.profilePicURL} alt="avatar" size="xs" />
            <div>
                <div>
                    <div className="flex gap-1">
                        <span className="text-[12px] font-[700]">{userLoggedIn.username}</span>
                        <span className="text-[12px]">2d ago</span>
                    </div>
                    <div>
                        <h5>{post.caption}</h5>
                    </div>
                </div>
                <div className="pt-[1rem]">
                    <span className="text-[12px] text-gray-800 ">
                        {post.comments.length === 0 ? "No comment yet" : `${post.comments}`}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProfileComment