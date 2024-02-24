import ProfileInfo from "./ProfileInfo"
import ProfilePosts from "./ProfilePosts"

const Profile = () => {
  return (
    <div className="flex-1 text-white">
        <ProfileInfo />
        <ProfilePosts />
    </div>
  )
}

export default Profile