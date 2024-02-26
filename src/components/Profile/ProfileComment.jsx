import {
    Avatar
} from "@material-tailwind/react";
import useUserStore from "../../store/useUserStore";

const ProfileComment = ({ selectedPost }) => {

    const userLoggedIn = useUserStore(state => state.user)
    console.log(selectedPost)
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
                        <h5>{selectedPost.caption}</h5>
                    </div>
                </div>
                <div className="pt-[1rem]">
                    <div className="pt-[1rem]">
                        {selectedPost.comments.length === 0 ? (
                            <span className="text-[12px] text-gray-800">No comment yet</span>
                        ) : (
                            selectedPost.comments.map((comment, index) => (
                                <div key={index}>
                                    <span className="text-[12px] text-gray-800">{comment.comment}</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComment