import React, { useState } from "react";
import Company from "./Company";

function Timeline() {
  const [fold, setFold] = useState(true);
  return (
    <div className="bg-gray-200 p-0  flex flex-col m-2">
      <div className="text-blue-1 flex justify-between  shadow-lg   bg-grey-100 w-[100%] p-2">
        <p className="text-xl text-blue-1">September 2021</p>
        <i
          className="text-xl text-blue-1 fa-solid fa-angle-down"
          onClick={() => {
            setFold(!fold);
          }}
        ></i>
      </div>

      <div
        className={`transition-all ease-in-out delay-100 bg-grey-100   w-[100%] p-2  flex flex-col ${
          fold ? "" : ""
        }`}
      >
        <div
          className={`transition-all overflow-x-hidden   bg-grey-100 ease-in-out delay-100 flex flex-col max-h-[80vh] ${
            fold ? "hidden" : "block"
          }`}
        >
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
        </div>
      </div>
    </div>
  );
}

export default Timeline;
