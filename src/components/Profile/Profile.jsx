import ProfileInfo from "./ProfileInfo"
import ProfilePost from "./ProfilePost"

const Profile = () => {
  return (
    <div className="flex-1 text-white">
        <ProfileInfo />
        <ProfilePost />
    </div>
  )
}

export default Profile