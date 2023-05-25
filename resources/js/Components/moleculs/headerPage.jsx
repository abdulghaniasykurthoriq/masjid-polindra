import React from "react";
import BtnLogout from "../atoms/BtnLogout";
// import BtnLogout from "../atoms/btnLogout";

function HeaderPage({ title }) {
  return (
    <div className="pt-7 w-full pb-14 h-max  flex  justify-between text-4xl font-bold">
      {/* //todo: input search */}
      <div className="pl-20 ">{title}</div>

      {/* //todo: logout  */}
      <BtnLogout />
    </div>
  );
}

export default HeaderPage;
