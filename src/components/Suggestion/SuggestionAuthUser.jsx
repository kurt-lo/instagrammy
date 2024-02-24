import { Avatar } from "@material-tailwind/react";

const SuggestionAuthUser = () => {
  return (
    <div className="pt-[2rem] flex gap-[.5rem] xl:gap-[1rem]">
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="sm" />
      <div className="flex flex-col mr-[3rem]">
        <span>Kurtlo</span>
        <span className="text-gray-500">Russel Kurt Nolasco</span>
      </div>
      <div>
        <span>Logout</span>
      </div>
    </div>
  )
}

export default SuggestionAuthUser