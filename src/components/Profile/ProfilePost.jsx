import ProfileNavigation from "./ProfileNavigation"
import imgOne from '../../assets/images/img2.png'

const ProfilePost = () => {
  return (
    <div className="w-[90%] xl:w-[60%]">
      <ProfileNavigation />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 pt-[1rem]">
        <img src={imgOne} alt={imgOne} className="rounded-md object-cover aspect-square" />
        <img src={imgOne} alt={imgOne} className="rounded-md object-cover aspect-square" />
        <img src={imgOne} alt={imgOne} className="rounded-md object-cover aspect-square" />
        <img src={imgOne} alt={imgOne} className="rounded-md object-cover aspect-square" />
        <img src={imgOne} alt={imgOne} className="rounded-md object-cover aspect-square" />
        <img src={imgOne} alt={imgOne} className="rounded-md object-cover aspect-square" />
        <img src={imgOne} alt={imgOne} className="rounded-md object-cover aspect-square" />

      </div>
    </div>
  )
}

export default ProfilePost