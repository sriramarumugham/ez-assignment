import React from "react";
import Search from "./Search";
import Timeline from "./Timeline";

function Clients() {
  return (
    <>
    {/* clients list */}
      <div className="drop-shadow-lg h-screen bg-white-300 max-w-screen-sm ">
        {/* search component */}
        <Search />
        <div className="overflow-auto flex flex-col h-[90vh]">
          {/* li for each time line */}
          <Timeline />
          <Timeline />
          <Timeline />
        </div>
      </div>
    </>
  );
}

export default Clients;
