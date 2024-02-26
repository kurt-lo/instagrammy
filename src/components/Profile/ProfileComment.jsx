import { Avatar } from "@material-tailwind/react";
import useFetchId from "../hooks/useFetchId";
import { Link } from "react-router-dom";
import { useState } from "react";
import { timeOfCommentOrPost } from "../../utils";

const ProfileComment = ({ selectedPost }) => {

    //Lifting the state up need kasi ng parent tong state kaya pinasa from Comment which is the child component to this comopnent the ProfileComment
    const [profilePicURL, setProfilePicURL] = useState(null);
    const [username, setUsername] = useState(null);
    // then pwede render ng ganito 
    // <Avatar src={profilePicURL} alt="avatar" size="xs" />

    return (
        <div className="pt-[1rem] text-sm">
            <div className="pt-[1rem]">
                {selectedPost.comments.length === 0 ? (
                    <span className="text-[12px] text-gray-800">No comment yet</span>
                ) : (
                    selectedPost.comments.map((comment, index) => (
                        <div key={index} className="flex justify-between pt-[.5rem] border-b border-gray-200">
                            <Comment comment={comment} setProfilePicURL={setProfilePicURL} setUsername={setUsername} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

const Comment = ({ comment, setProfilePicURL, setUsername }) => {
    const { userProfile, isLoading } = useFetchId(comment.createdBy);

    if (isLoading) {
        return <p>Loading comment...</p>
    }
    setProfilePicURL(userProfile.profilePicURL); // ganito mag lift the state up if galing sa child component yung state or data
    setUsername(userProfile.username)

    // console.log(userProfile.username)
    return (
        <>
            <div className="flex gap-2 pb-2">
                <Link to={`/${userProfile.username}`}>
                    <Avatar src={userProfile?.profilePicURL} alt="avatar" size="xs" />
                </Link>
                <div className="flex flex-col">
                    <Link to={`/${userProfile.username}`}>
                        <span className="text-[12px] text-gray-900 font-[600]">{userProfile.username}</span>
                    </Link>
                    <span className="text-[12px] text-gray-800">{comment.comment}</span>
                </div>
            </div>
            <div>
                <span className="text-[12px] text-gray-700">• {timeOfCommentOrPost(comment.createdAt)}</span>
            </div>
        </>
    );
};

export default ProfileComment;
