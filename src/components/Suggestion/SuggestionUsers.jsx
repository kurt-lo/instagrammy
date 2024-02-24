import { Avatar } from "@material-tailwind/react";

const SuggestionUsers = () => {
    return (
        <div className="pt-[2rem]">
            <div className="flex justify-between">
                <span className="text-gray-500 font-[600]">Suggested for you</span>
                <span>See All</span>
            </div>
            <div className="flex gap-[1rem] pt-[1rem]">
                <div>
                    <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="sm" />
                </div>
                <div className="flex flex-col">
                    <span>Mark Nolasco</span>
                    <span className="text-[12px] text-gray-400">0 followers</span>
                </div>
                <div className="ml-auto text-blue-600">
                    <span>Follow</span>
                </div>
            </div>
            <div className="pt-[1rem] text-gray-500 text-[12px]">
                <span>© 2024 INSTAGRAM FROM META</span>
            </div>
        </div>
    )
}

export default SuggestionUsers