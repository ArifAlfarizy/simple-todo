import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={`shadow-xl h-screen px-4 ${isOpen ? "w-60" : "w-20"}`}>
      <div className="flex flex-col items-center mt-5 gap-5">
        <MenuIcon
          onClick={handleClick}
          className={`hovering ${isOpen ? "self-start" : null}`}
        />

        {isOpen && (
          <div className="flex flex-col items-center">
            {" "}
            <AccountCircleIcon sx={{ fontSize: 60 }} className="mb-4" />
            <h1>John Doe</h1>
            <h1 className="text-sm text-black/50">JohnDoe@gmail.com</h1>
          </div>
        )}

        <div class="border-t border-black w-full"></div>
        <div className={`flex flex-row gap-5 ${isOpen? "w-full hovering": null}`}>
          <ChecklistIcon className="hovering"/>
          {isOpen && <p>My Tasks</p>}
        </div>
        <div className={`flex flex-row gap-5 ${isOpen? "w-full hovering": null}`}>
          <SettingsIcon className="hovering" />
          {isOpen && <p>Setings</p>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
