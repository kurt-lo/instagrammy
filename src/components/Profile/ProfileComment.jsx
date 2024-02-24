import {
    Avatar
  } from "@material-tailwind/react";

const ProfileComment = () => {
    return (
        <div className="flex pt-[1rem] text-sm gap-2">
            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xs" />
            <div>
                <div>
                    <span className="text-[12px] font-[700]">Kurtlo</span>
                    <span className="text-[12px]">2d ago</span>
                </div>
                <div>
                    <span className="text-[12px] text-gray-800">Wazuuppp!</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileComment