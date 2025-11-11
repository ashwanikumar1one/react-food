import React, { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, isOpen, className = "", onCancel }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (isOpen) {
      modal.showModal();
    }

    return () => modal.close();
  }, [isOpen]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onCancel={onCancel}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
