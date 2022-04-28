import { createContext, useContext, useState } from "react";
export const ModalContext = createContext();

export const showModal = () => useContext(ModalContext);

export const ModalEventContexProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
