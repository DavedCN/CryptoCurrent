import { Route, Routes } from "react-router-dom";

import Header from "./components/Common/Header";
import HomePage from "./components/LandingPage/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";
import NewsPage from "./components/News/NewsPage";
import CoinPage from "./components/CoinPage/CoinPage";
import Compare from "./components/Compare/ComparePage";
import Watchlist from "./components/Watchlist/Watchlist";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </>
  );
}

export default App;
