import { Avatar, Tooltip, Dialog, IconButton, Input, Button, Textarea } from "@material-tailwind/react";
import { AiOutlineClose } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { LuPlusSquare } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import igLogo from '../../assets/images/logo.png'
import useLogout from "../hooks/useLogout";
import { Link } from "react-router-dom";
import useUserStore from "../../store/useUserStore";
import { useRef, useState } from "react";
import useSearchUser from "../hooks/useSearchUser";
import SuggestionUsers from "../Suggestion/SuggestionUsers";
import usePreviewImage from "../hooks/usePreviewImage";
import useCreatePost from "../hooks/useCreatePost";

const aClass = 'flex items-center justify-center md:px-[.5rem] md:py-[.5rem] md:justify-start md:gap-[1rem] cursor-pointer rounded-md md:hover:bg-white md:hover:text-darkBlue duration-300 ease-in-out'

const Sidebar = () => {

    const { handleLogout } = useLogout()
    const userLoggedIn = useUserStore(state => state.user)

    const { isLoading, fetchUser, searchUser, setSearchUser } = useSearchUser()
    const searchRef = useRef(null)

    const handleSearch = (e) => {
        e.preventDefault()
        fetchUser(searchRef.current.value)
    }
    // console.log(searchUser)

    //for opening and closing the search modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(prevState => !prevState);

    // ________THIS IS FOR THE CREATE MODAL_______ //
    //for opening and closing the create post modal
    const [openCreatePost, setOpenCreatePost] = useState(false);
    const handleOpenCreatePost = () => setOpenCreatePost(prevState => !prevState);

    const [caption, setCaption] = useState('')
    const postFileRef = useRef() // this is for the button when selecting image for creating post
    const { selectedFile,
        handleImageChange,
        setSelectedFile,
        showAlert,
        alertMessage,
        showAlertFunction } = usePreviewImage()
    const { isLoading: isLoadingPost , handleCreatePost } = useCreatePost()
    const handleCreatePostButton = async () => {
        try {
            await handleCreatePost(selectedFile, caption)
            setCaption('')
            setSelectedFile(null)
            handleOpenCreatePost()
            console.log("Post success")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div className="flex flex-col h-[100vh] sticky left-0 top-0 w-full max-w-[4.5rem] md:max-w-[16rem] px-0 py-[2rem] md:p-[2rem] shadow-xl shadow-blue-gray-900/5 bg-slate text-white border-r rounded-none">
                <div className="flex justify-center md:justify-start">
                    <img src={igLogo} alt="Instagram Logo" className="filter invert h-14 mb-[2rem] hidden md:block" />
                    <FaInstagram className="h-6 w-6 block mb-[4rem] md:hidden" />
                </div>
                <ul className="flex flex-col gap-[2rem] md:gap-[1rem]">
                    <li>
                        <Tooltip content="Home" placement="right" className='md:hidden'>
                            <Link to='/' className={aClass}>
                                <GoHomeFill className="h-6 w-6" />
                                <span className="hidden md:block">Home</span>
                            </Link>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip content="Search" placement="right" className='md:hidden'>
                            <a className={aClass} onClick={handleOpen}>
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
                            <a className={aClass} onClick={handleOpenCreatePost}>
                                <LuPlusSquare className="h-6 w-6" />
                                <span className="hidden md:block">Create</span>
                            </a>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip content="Profile" placement="right" className='md:hidden'>
                            <Link className={aClass} to={`/${userLoggedIn.username}`}>
                                <Avatar src={userLoggedIn.profilePicURL} alt='Profile Picture' size="sm" />
                                <span className="hidden md:block">Profile</span>
                            </Link>
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
            {/* THIS IS FOR THE SEARCH USERNAME */}
            <Dialog open={open} handler={handleOpen} className="py-[2rem] px-[4rem]" size="xs">
                <IconButton variant='text' className='flex !absolute top-2 right-2 cursor-pointer'
                    onClick={handleOpen}
                >
                    <AiOutlineClose size={22} />
                </IconButton>
                <h2 className='text-lg py-[1.2rem] text-darkBlue'>Search by Username</h2>
                <div className='relative'>
                    <Input type='text' label="Username" inputRef={searchRef} />
                    <Button variant="text" className='!absolute right-1 bottom-0'
                        type="submit"
                        loading={isLoading}
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </div>
                {searchUser && <SuggestionUsers searchUser={searchUser} setSearchUser={setSearchUser} userColor='black' />}
            </Dialog>
            {/* THIS IS FOR THE CREATE POST */}
            <Dialog open={openCreatePost} handler={handleOpenCreatePost} className="py-[2rem] px-[4rem]" size="xs">
                <IconButton variant='text' className='flex !absolute top-2 right-2 cursor-pointer'
                    onClick={handleOpenCreatePost}
                >
                    <AiOutlineClose size={22} />
                </IconButton>
                <h2 className='text-lg py-[1.2rem] text-darkBlue'>Create Post</h2>
                <div className="">
                    <Textarea variant="outlined" rows={8} label="Post" value={caption} onChange={(e) => setCaption(e.target.value)} />
                    {selectedFile && (
                        <div className="flex relative justify-center items-center">
                            <img src={selectedFile} alt="Post image" />
                            <IconButton variant='text' className='flex !absolute top-2 right-2 cursor-pointer'
                                onClick={() => setSelectedFile('')}
                            >
                                <AiOutlineClose size={22} />
                            </IconButton>
                        </div>
                    )}
                    <div className="flex w-full justify-between py-1.5">
                        <div>
                            <IconButton variant="text" color="blue-gray" size="sm"
                                onClick={() => postFileRef.current.click()}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                    />
                                </svg>
                            </IconButton>
                            <input type="file" hidden ref={postFileRef} onChange={handleImageChange} />
                        </div>
                        <div className="flex gap-2">
                            <Button size="sm" color="red" variant="text" className="rounded-md"
                                onClick={handleOpenCreatePost}
                            >
                                Cancel
                            </Button>
                            <Button size="sm" className="rounded-md"
                                loading={isLoadingPost}
                                onClick={handleCreatePostButton}
                            >
                                Post
                            </Button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default Sidebar