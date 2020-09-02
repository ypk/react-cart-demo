import { useContext } from "react";
import { ToastContext } from "../contexts";

function useToast() {
  const toastContext = useContext(ToastContext);
  const { addToast, removeToast } = toastContext;
  return {
    addToast,
    removeToast,
  };
}

export default useToast;
