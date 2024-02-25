import { useState } from "react"
import useShowAlert from "./useShowAlert"

const usePreviewImage = () => {

    const { showAlert, alertMessage, showAlertFunction } = useShowAlert()

    const [selectedFile, setSelectedFile] = useState(null)
    const maxFileSize = 2 * 1024 * 1024 // 2mb

    const handleImageChange = (e) => {
        e.preventDefault()

        const file = e.target.files[0]
        if (file && file.type.startsWith("image/")) {
            if (file.size > maxFileSize) {
                showAlertFunction('File size must be less than 2mb')
                selectedFile(null)
                return
            }
            const reader = new FileReader()
            reader.onloadend = () => {
                setSelectedFile(reader.result)
            }
            reader.readAsDataURL(file)
        } else {
            showAlertFunction('Please select an image file')
            selectedFile(null)
        }
    }

    return {
        selectedFile,
        handleImageChange,
        setSelectedFile, 
        showAlert, 
        alertMessage, 
        showAlertFunction
    }
}

export default usePreviewImage