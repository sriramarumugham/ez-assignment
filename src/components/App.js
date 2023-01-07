import "../styles/App.css";

import { Navbar } from "./index";
import Clients from "./Clients";
import Display from "./Display";
import CompanyProfile from "./CompanyProfile";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      {/* <Clients /> */}
      <Display />
    </div>
  );
}

export default App;
