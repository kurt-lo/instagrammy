import { Avatar, Button } from "@material-tailwind/react";
import useFollowAndUnfollowUser from "../hooks/useFollowAndUnfollowUser";
import useUserStore from "../../store/useUserStore";

const SuggestionUsers = ({ searchUser, setSearchUser }) => {

    const { isLoading, isFollowing, handleFollowAndUnfollowUser } = useFollowAndUnfollowUser(searchUser.uid)
    const userLoggedIn = useUserStore(state => state.user)

    const clickedFollowOrUnfollowUser = async () => {
        await handleFollowAndUnfollowUser()
        setSearchUser({ ...searchUser, followers: isFollowing ? searchUser.followers.filter((follower) => follower.uid !== userLoggedIn.uid) : [ ...searchUser.followers, userLoggedIn ]})
    }

    return (
        <>
            <div className="flex gap-[1rem] pt-[1rem]">
                <div>
                    <Avatar src={searchUser.profilePicURL} alt="Profile Picture" size="sm" />
                </div>
                <div className="flex flex-col">
                    <span className="text-darkBlue text-sm">{searchUser.username}</span>
                    <span className="text-[12px] text-gray-700">{searchUser.followers.length} followers</span>
                </div>
                {/* ONLY SEARCH THE OTHER USER NOT YOUR OWN PROFILE */}
                {userLoggedIn.uid !== searchUser.uid && (
                    <div className="ml-auto text-blue-600">
                        <Button
                            color="blue"
                            size="sm"
                            variant="text"
                            loading={isLoading}
                            onClick={clickedFollowOrUnfollowUser}
                        >{isFollowing ? "Unfollow" : "Follow"}
                        </Button>
                    </div>
                )}
            </div>
        </>
    )
}

export default SuggestionUsers