import { Route, Routes } from "react-router-dom";

import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import HomePage from "./components/LandingPage/HomePage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} /> */}

        <Route path="/" element={<HomePage />} />
      </Routes>
     
    </>
  );
}

export default App;
