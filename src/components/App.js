import "../styles/App.css";

import {
  Navbar,
  Clients,
  Display,
  CompanyProfile,
  Sidebar,
  UserProfiler,
} from "./index";

function App() {
  return (
    <>
      <div className="App">
        {/* mobile navbar */}
        <Navbar />
        <div className="grid grid-flow-row md:grid-flow-col ">
          <div className="col-span-5 md:w-[30vw] flex">
            {/* desktop side bar */}
            <Sidebar />
            <div className="w-[100%]">
              {/* clients list search list */}
              <Clients />
            </div>
          </div>
          {/* main display */}
          <div className="col-span-5 md:w-[65vw]">
            <Display />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
