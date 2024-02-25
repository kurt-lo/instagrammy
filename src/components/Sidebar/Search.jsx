import { Input, IconButton, Dialog } from '@material-tailwind/react';
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const Search = ({ open, handleClose }) => {

    return (
        <>
            <Dialog open={open}>
                <IconButton variant='text' className='flex !absolute top-2 right-2 cursor-pointer'
                    onClick={handleClose}
                >
                    <AiOutlineClose size={22} />
                </IconButton>
                <h2 className='text-lg py-[1.2rem]'>Search by Username</h2>
                <div className='relative'>
                    <Input type='text' label='Username' />
                    <IconButton variant="text" className='!absolute right-1 bottom-0'>
                        <IoSearchSharp size={22} className='font-[700]' />
                    </IconButton>
                </div>
            </Dialog>
        </>
    )
}

export default Search