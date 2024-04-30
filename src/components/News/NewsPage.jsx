import { fetchNews } from "../../functions/newsdata";
import { useState, useEffect } from "react";
import Loader from "../Common/Loader/Loader.jsx";
import NewsCard from "./NewsCard.jsx";
import Pagination from "../Dashboard/Pagination/pagination.jsx";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostPerPage] = useState(6);
  const [showLoader, setShowLoader] = useState(true);

  // FETCHING THE NEWS
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNews();
      setNews(data);
      setShowLoader(false);
    };

    fetchData();
  }, []);

  // PAGINATION
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = news?.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    let timer;
    if (showLoader) {
      timer = setTimeout(() => {
        if (news.length === 0) {
          setShowLoader(false);
        }
      }, 15000);
    }
    return () => clearTimeout(timer);
  }, [news, showLoader]);

  return (
    <div>
      <h1 className="news-heading">Latest News On Crypto</h1>
      {showLoader ? (
        <Loader />
      ) : news?.length ? (
        <div className="news">
          {news.map((newsItem, index) => (
            <NewsCard key={index} newsItem={newsItem} />
          ))}
        </div>
      ) : (
        <h1 className="no-results">No news found</h1>
      )}
      <Pagination
        totalPosts={news?.length}
        postPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default NewsPage;
