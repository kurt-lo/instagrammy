import Profile from "../components/Profile/Profile"
import Sidebar from "../components/Sidebar/Sidebar"

const ProfilePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Profile />
    </div>
  )
}

export default ProfilePage