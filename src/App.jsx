import { Route, Routes } from "react-router-dom";

import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} /> */}


          <Route path="/" element={<LandingPage />} />
        
 
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
