import { useState } from "react";

const useDrawerMenu = () => {
  const [open, setOpen] = useState(false);
  const openDrawerMenu = () => {
    setOpen(true);
  };
  const closeDrawerMenu = () => {
    setOpen(false);
  };
  return { open, openDrawerMenu, closeDrawerMenu };
};

export default useDrawerMenu;
