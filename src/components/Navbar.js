import React from "react";

import UserProfile from "./UserProfile";

function Navbar() {
  return (
    // Navbar
    <div className="bg-blue-1 h-16 block sm:hidden flex justify-between items-center">
      <div className="text-white  p-5 mx-2 ">Z</div>
      <div className="text-white  p-5 mx-2"><UserProfile UserName={"Sriram"} mobile={true}/></div>
    </div>
  );
}

export default Navbar;
