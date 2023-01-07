import React, { useState } from "react";

function Entries() {
  const [fold, setFold] = useState(false);

  return (
    // {/* mobile */}
    <>
      <div className="bg-blue-50 rounded-r-lg p-3 pr-5 m-2 drop-shadow-lg w-[100%] block sm:hidden relative flex-wrap">
        <i className="text-sky-400 text-3xl fa-solid fa-angle-down absolute  top-1 right-1"></i>
        <div className="flex flex-col">
          <h3 className="text-lg text-blue-1">Entity Name</h3>
          <p className="text-md text-gray-400">PVT LTD</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg text-blue-1">Location</h3>
          <p className="text-md text-gray-400">Mumbai</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg text-blue-1">Company Code</h3>
          <p className="text-md text-gray-400">CODE</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg text-blue-1">MSL VALID THROUG </h3>
          <p className="text-md text-gray-400">21-21-2121</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-r-lg p-3 pr-5 m-2 drop-shadow-lg w-[100%]  relative  hidden sm:block">
        <div className="flex justify-between px-1 min-w-[600px]">
          <h1 className="text-blue-1">Riyad </h1>
          <h1 className="text-blue-1">Lucas pvt ltd</h1>
          <h1 className="text-blue-1">LUFI</h1>
          <h1 className="text-blue-1">Date</h1>
          <h1 className="text-blue-1"> external</h1>
        </div>
        {fold ? (
          <i
            className="text-sky-400 text-3xl fa-solid fa-angle-down absolute top-1 right-1 "
            onClick={() => setFold(!fold)}
          ></i>
        ) : (
          <i
            className="text-sky-400 text-3xl fa-solid fa-angle-up absolute top-1 right-1 "
            onClick={() => setFold(!fold)}
          ></i>
        )}

        <div
          className={`drop-shadow-lg w-[100%] p-4 ${
            fold ? "block" : "hidden"
          } transition-all ease-in-out delay-150`}
        >
          <div className="flex justify-between items-center">
            {/* address */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <h3 className="text-lg text-blue-1">Address</h3>
                <p className="text-md text-gray-400">Line 1</p>
                <p className="text-md text-gray-400">Line 2</p>
                <p className="text-md text-gray-400">country</p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg text-blue-1">Charge code/ PO Number</h3>
                <p className="text-md text-gray-400">rquired</p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg text-blue-1"> MSLA</h3>
                <span className="flex gap-2 items-center">
                  <p className="text-md text-gray-400">
                    342047982734928348727.pdf
                  </p>
                  <i class="fa-solid fa-eye text-sky-400"></i>
                  <i class="fa-solid fa-download text-sky-400"></i>
                </span>
              </div>
            </div>
            {/* company */}
            <div className="flex flex-col gap-2">
              <div>
                <h3 className="text-lg text-blue-1">
                  Company registraion number
                </h3>
                <p className="text-md text-gray-400">UIODSFDFSF798797</p>
              </div>

              <div>
                <h3 className="text-lg text-blue-1">
                  Company registration validity
                </h3>
                <p className="text-md text-gray-400">78-88-2129</p>
              </div>

              <div>
                <h3 className="text-lg text-blue-1">
                  Duration of file storage
                </h3>
                <p className="text-md text-gray-400">90 Days</p>
              </div>
            </div>

            {/* taxtegistraton */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <h3 className="text-lg text-blue-1">Tax Registration number</h3>
                <p className="text-md text-gray-400">DDSFSDF7987987</p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg text-blue-1">TRN Validity</h3>
                <p className="text-md text-gray-400">Jan -07-2090</p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg text-blue-1">Company Code</h3>
                <p className="text-md text-gray-400">CODE</p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg text-blue-1">Currency </h3>
                <p className="text-md text-gray-400">USD</p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg text-blue-1">VAT WHT </h3>
                <p className="text-md text-gray-400">5%+5%</p>
              </div>
            </div>
          </div>
          {/* tabel */}
          <div>
            <h3 className="text-lg text-blue-1 my-3">
              Company registraion number
            </h3>
            <div className="bg-white rounded-xl flex flex-col w-[100%] p-3">
              <div className="flex justify-between items-center">
                <h3 className="text-lg text-gray-400">Services</h3>
                <h3 className="text-lg text-gray-400">Units</h3>
                <h3 className="text-lg text-gray-400">List Price</h3>
                <h3 className="text-lg text-gray-400">Offered Price</h3>
                <h3 className="text-lg text-gray-400">Discound</h3>
              </div>
              <div className="flex justify-between items-center bg-blue-50 my-1">
                <h3 className="text-lg text-blue-1">Services</h3>
                <h3 className="text-lg text-blue-1">Units</h3>
                <h3 className="text-lg text-blue-1">List Price</h3>
                <h3 className="text-lg text-blue-1">Offered Price</h3>
                <h3 className="text-lg text-blue-1">Discound</h3>
              </div>

              <div className="flex justify-between items-center bg-blue-50 my-1">
                <h3 className="text-lg text-blue-1">Services</h3>
                <h3 className="text-lg text-blue-1">Units</h3>
                <h3 className="text-lg text-blue-1">List Price</h3>
                <h3 className="text-lg text-blue-1">Offered Price</h3>
                <h3 className="text-lg text-blue-1">Discound</h3>
              </div>

              <div className="flex justify-between items-center bg-blue-50 my-1">
                <h3 className="text-lg text-blue-1">Services</h3>
                <h3 className="text-lg text-blue-1">Units</h3>
                <h3 className="text-lg text-blue-1">List Price</h3>
                <h3 className="text-lg text-blue-1">Offered Price</h3>
                <h3 className="text-lg text-blue-1">Discound</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // desktop
  );
}

export default Entries;
