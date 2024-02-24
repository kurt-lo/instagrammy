import { Avatar, Tooltip } from "@material-tailwind/react";
import { GoHomeFill } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { LuPlusSquare } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import igLogo from '../../assets/images/logo.png'
import useLogout from "../hooks/useLogout";

const aClass = 'flex items-center justify-center md:px-[.5rem] md:py-[.5rem] md:justify-start md:gap-[1rem] cursor-pointer rounded-md md:hover:bg-white md:hover:text-darkBlue duration-300 ease-in-out'

const Sidebar = () => {

    const { handleLogout } = useLogout()

    return (
        <div className="flex flex-col h-[100vh] sticky left-0 top-0 w-full max-w-[4.5rem] md:max-w-[16rem] px-0 py-[2rem] md:p-[2rem] shadow-xl shadow-blue-gray-900/5 bg-slate text-white border-r rounded-none">
            <div className="flex justify-center md:justify-start">
                <img src={igLogo} alt="Instagram Logo" className="filter invert h-14 mb-[2rem] hidden md:block" />
                <FaInstagram className="h-6 w-6 block mb-[4rem] md:hidden" />
            </div>
            <ul className="flex flex-col gap-[2rem] md:gap-[1rem]">
                <li>
                    <Tooltip content="Home" placement="right" className='md:hidden'>
                        <a className={aClass}>
                            <GoHomeFill className="h-6 w-6" />
                            <span className="hidden md:block">Home</span>
                        </a>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip content="Search" placement="right" className='md:hidden'>
                        <a className={aClass}>
                            <GoSearch className="h-6 w-6" />
                            <span className="hidden md:block">Search</span>
                        </a>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip content="Notifications" placement="right" className='md:hidden'>
                        <a className={aClass}>
                            <FaRegHeart className="h-[1.40rem] w-[1.40rem]" />
                            <span className="hidden md:block">Notifications</span>
                        </a>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip content="Create" placement="right" className='md:hidden'>
                        <a className={aClass}>
                            <LuPlusSquare className="h-6 w-6" />
                            <span className="hidden md:block">Create</span>
                        </a>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip content="Profile" placement="right" className='md:hidden'>
                        <a className={aClass}>
                            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="sm" />
                            <span className="hidden md:block">Profile</span>
                        </a>
                    </Tooltip>
                </li>
            </ul>
            <Tooltip content="Log out" placement="right" className='md:hidden'>
                <div className={`${aClass} mt-auto`}
                    onClick={handleLogout}
                >
                    <IoIosLogOut className="h-5 w-5" />
                    <span className="hidden md:block">Log out</span>
                </div>
            </Tooltip>
        </div>
    )
}

export default Sidebar