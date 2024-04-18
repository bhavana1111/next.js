import React from "react";
import { SiOpenaigym } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";
const SidebarHeader = () => {
  return (
    <div className="flex item-center mb-4 gap-4 px-4">
      <SiOpenaigym className="w-10 h-10 text-primary" />
      <h2 className="text-xl font-extrabold text-primary ">Tour Guide</h2>
      <ThemeToggle />
    </div>
  );
};

export default SidebarHeader;
