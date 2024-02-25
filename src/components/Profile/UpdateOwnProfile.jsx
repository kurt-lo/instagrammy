import {
    Button,
    Input,
    Avatar,
    Alert
} from "@material-tailwind/react";
import { FaEdit } from "react-icons/fa";
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import useUserStore from "../../store/useUserStore";
import usePreviewImage from '../hooks/usePreviewImage'
import useUpdateProfile from "../hooks/useUpdateProfile";
import { createPortal } from "react-dom";

const UpdateOwnProfile = forwardRef(({ }, ref) => {

    const dialog = useRef()
    const updateImg = useRef()
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [bio, setBio] = useState('')

    const userLoggedin = useUserStore(state => state.user)

    const { selectedFile, handleImageChange, setSelectedFile, showAlert: showAlertImage, alertMessage: alertMessageImage } = usePreviewImage()
    const { editProfile, isLoading, showAlert: showAlertProfile, alertMessage: alertMessageProfile } = useUpdateProfile()

    const handleUpdateProfile = async () => {
        try {
            await editProfile(fullName, username, bio, selectedFile)
            setSelectedFile(null)
            dialog.current.close()
        } catch (error) {
            console.log(error.message)
        }
    }

    useImperativeHandle(ref, () => {
        return {
          open: () => {
            dialog.current.showModal();
          },
        };
      });

    return createPortal(
        <dialog ref={dialog} id="modal" className="overflow-hidden text-center">
            <div className="flex flex-col justify-center items-center gap-[1rem] py-[2rem] px-[4rem]">
                <h2 className="font-[700]">Edit Profile</h2>
                <div className="relative">
                    <Avatar src={selectedFile || userLoggedin.profilePicURL} alt="Profile Picture" size="xxl" />
                    <FaEdit className="cursor-pointer absolute bottom-0 right-0" onClick={() => updateImg.current.click()} />
                    <input type="file" ref={updateImg} hidden onChange={handleImageChange} />
                    {showAlertImage && <Alert color="red" className="text-sm">{alertMessageImage}</Alert>}
                </div>
                <Input value={fullName || userLoggedin.fullName} type="text" label="Full Name"
                    onChange={(e) => setFullName(e.target.value)}
                />
                <Input value={username || userLoggedin.username} type="text" label="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input value={bio || userLoggedin.bio} type="text" label="Bio"
                    onChange={(e) => setBio(e.target.value)}
                />
                <div className="flex gap-[1rem]">
                    <Button variant="outlined" onClick={() => dialog.current.close()}>
                        Cancel</Button>
                    <Button
                        type="submit"
                        loading={isLoading}
                        onClick={handleUpdateProfile}
                    >Submit</Button>
                </div>
                {/* LALAGAY KO TONG MESSAGE NA TO SA PROFILEINFO HINDI DITO SA MODAL NA TO PARA MAKITA NG USERS */}
                {showAlertProfile && <Alert color="gray" className="text-sm">{alertMessageProfile}</Alert>}
            </div>
        </dialog>,
        document.getElementById('modal')
    )
})

export default UpdateOwnProfile