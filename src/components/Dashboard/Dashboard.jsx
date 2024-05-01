import { useState, useEffect, Fragment } from "react";
import { fetchCoins } from "../../functions/dashboarddata";
import Tab from "./Tabs/Tab.tsx";
import Search from "./Search/Search.jsx";
import Pagination from "./Pagination/pagination.jsx";
import ScrollToTop from "../Common/ScrollToTop/ScrollToTop.jsx";
import Footer from "../Common/Footer/index.jsx";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostPerPage] = useState(10);

  //FETCHING THE DATA FROM COINGECKO API
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoins();
      setCoins(data);
    };

    fetchData();
  }, []);

  //SEARCH FUNCTION

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  //FILTER ON SEARCH
  let filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  //PAGINATION

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredCoins?.slice(firstPostIndex, lastPostIndex);

  return (
    <Fragment>
      <Search search={search} onSearchChange={onSearchChange} />
      <Tab coins={currentPosts} />
      <Pagination
        totalPosts={filteredCoins?.length}
        postPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <ScrollToTop />
      <Footer />
    </Fragment>
  );
};

export default Dashboard;
