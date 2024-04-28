import { Route, Routes } from "react-router-dom";

import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import HomePage from "./components/LandingPage/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/compare" element={<HomePage />} />
        <Route path="/watchlist" element={<HomePage />} />
        <Route path="/news" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
