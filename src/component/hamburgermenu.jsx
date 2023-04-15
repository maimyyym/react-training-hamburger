import React, { useState } from "react";
import MenuButton from "./menubutton";
import Menu from "./menu";

function HamburgerMenu() {

  const [isOpen, setIsOpen] = useState(false);
  
  const menuOpen = () => {
    if(!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    };
  };

  return (
    <div style={{
    width: '300px',
    height: '400px',
    backgroundColor: 'lightgray',
    position: 'fixed',
    top: 0,
    left: 0}}>
      <MenuButton onClick={menuOpen} />
      {isOpen && <Menu />}
    </div>
  );
};

export default HamburgerMenu;
