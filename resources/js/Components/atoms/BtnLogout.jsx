import React from "react";
import { BiLogOutCircle } from "react-icons/bi";

function BtnLogout() {
  return (
    <div className="hidden mx-10 sm:flex items-center text-lg font-medium">
      <p className="px-2">Logout</p>
      <BiLogOutCircle />
    </div>
  );
}

export default BtnLogout;
