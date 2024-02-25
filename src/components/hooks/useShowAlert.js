import { useState } from "react";

const useShowAlert = () => {

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const showAlertFunction = (message) => {
        setShowAlert(true);
        setAlertMessage(message);

        setTimeout(() => {
            setShowAlert(false);
            setAlertMessage('');
        }, 3000);
    };

    return {
        showAlert,
        alertMessage,
        showAlertFunction
    }
}

export default useShowAlert