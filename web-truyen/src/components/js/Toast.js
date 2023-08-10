import { ToastContainer, toast } from "react-toastify";

export const showToastError = (message, toastId) => {
  toast.error(message, { toastId, position: toast.POSITION.BOTTOM_RIGHT })
};

export const showToastSuccess = (message, toastId) => {
  toast.success(message, { toastId, position: toast.POSITION.BOTTOM_RIGHT })
};

function Toast() {
  return ( <div className="toast-container"><ToastContainer limit={2}/></div> )
}

export default Toast;
