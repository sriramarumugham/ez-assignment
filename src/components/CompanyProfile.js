import React from "react";
import Entries from "./Entries";

function CompanyProfile() {
  return (
    <div className="bg-grey-50 h-[100%] w-[100%]">
      {/* session 1 */}
      <div className="drop-shadow-2xl flex flex-col w-[100%] bg-white rounded-lg">
        {/* mobile */}
        <div className="flex justify-between  p-3 hidden sm:block ">
          <div className="flex justify-start items-center gap-1 w-[50%]">
            <i class="fa-solid fa-file-pdf text-red-500 text-2xl"></i>
            <p className="text-3xl text-blue-1">Lucas Films Private Limited</p>
          </div>

          <button className="bg-sky-300 px-9 py-1 rounded-md text-white flex ">
            EDIT
          </button>
        </div>
        {/* company profile */}
        <div className="flex justify-between p-3 items-center">
          <div className="flex flex-col ">
            <div>
              <h3 className="text-lg text-blue-1">Company Name</h3>
              <p className="text-md text-gray-400">PVT LTD</p>
            </div>
            <div>
              <h3 className="text-lg text-blue-1">Company Code</h3>
              <p className="text-md text-gray-400">CODE</p>
            </div>
            <div>
              <h3 className="text-lg text">Company Logo</h3>
              <p className="text-md text-gray-400">Logo</p>
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-lg text">Domains Code</h3>
              <ul>
                <li className="text-md text-gray-400">@something</li>
                <li className="text-md text-gray-400">@something</li>
                <li className="text-md text-gray-400">@something</li>
                <a className="text-md text-gray-400 underline" href="#">
                  {" "}
                  shome more
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* tabs */}
      <div className="bg-white rounded-lg w[100%] h-8 flex justify-start gap-8 items-center drop-shadow-2xl my-2 p-4">
        <button className="active:border-b-4 border-blue-1">ENTRIES</button>
        <button className="active:border-b-4 border-blue-1">
          INVOICE CODES
        </button>
        <button className="active:border-b-4 border-blue-1">USERS</button>
      </div>
      {/* display */}
      <div className=" w-[100%] h-[100%] bg-white drop-shadow-lg flex flex-col p-2 ">
        <div className="flex  justify-between items-center drop-shadow-md px-4 bg-white">
          <h1 className="text-gray-400 text-xl flex">4 Entries</h1>
          <i className="text-4xl text-sky-400 fa-solid fa-square-plus"></i>
        </div>
        <div className="flex flex-col max-h-[60vh] overflow-y-scroll overflow-x-hidden pr-1">
          <div className="flex justify-between px-6 x-auto   hidden sm:block">
            <h1 className="text-gray-400">Billing Location</h1>
            <h1 className="text-gray-400">Entity Name</h1>
            <h1 className="text-gray-400">Entity Code</h1>
            <h1 className="text-gray-400">MSLA valid through</h1>
            <h1 className="text-gray-400">File sharing</h1>
          </div>
          <Entries />
          <Entries />
          <Entries />
          <Entries /> <Entries /> <Entries /> <Entries /> <Entries />{" "}
          <Entries /> <Entries />
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
