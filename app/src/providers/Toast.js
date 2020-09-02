import React, { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { ToastContext } from "../contexts";
import { Toast } from "../components/common";
import { FilterToastById, CanUseDOM, GenerateUniqueId } from "../helpers";

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (content) => {
    const id = GenerateUniqueId();
    setToasts([
      ...toasts,
      {
        id,
        content,
      },
    ]);
  };

  const removeToast = (id) => {
    const removedToasts = FilterToastById(toasts, id);
    setToasts(removedToasts);
  };

  const domTarget = CanUseDOM ? document.body : null;

  const ToastsProviderValue = useMemo(() => {
    return { addToast, removeToast };
  }, [toasts]);
  
  return (
    <ToastContext.Provider value={ToastsProviderValue}>
      {domTarget
        ? createPortal(
            <div className="w-11/12 md:w-full fixed bottom-2 md:bottom-0  m-4 md:m-8 flex items-center flex-col">
              {toasts.map((toast) => (
                <Toast key={toast.id} removeToast={() => removeToast(toast.id)}>
                  {toast.content}
                </Toast>
              ))}
            </div>,
            domTarget
          )
        : null}

      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
