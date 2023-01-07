import React from "react";
import Search from "./Search";
import Timeline from "./Timeline";

function Clients() {
  return (
    <>
      <div className="drop-shadow-lg h-screen bg-white-300 max-w-screen-sm ">
        <Search />
        <div className="overflow-auto flex flex-col h-[90vh]">
          <Timeline />
          <Timeline />
          <Timeline />
          <Timeline />
          <Timeline />
          <Timeline /> <Timeline />
          <Timeline />
          <Timeline />
          <Timeline /> <Timeline />
          <Timeline />
          <Timeline />
        </div>
      </div>
    </>
  );
}

export default Clients;
