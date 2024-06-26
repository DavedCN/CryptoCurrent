import { BsStar } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";
import { saveItemToWatchlist } from "../../../functions/addFromWatchlist";
import { ToastContainer } from "react-toastify";

const List = ({ coin, delay }) => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(false);
  const coinChange = coin.price_change_percentage_24h;
  const navigate = useNavigate();

  return (
    <motion.tr
      onClick={() => navigate(`/coin/${coin.id}`)}
      className="unique-list-row"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <td className="unique-td-img">
        <img
          src={coin.image}
          className="coin-image coin-image-td"
          alt="coin-image"
        />
      </td>
      <td className="unique-td-info">
        <div className="unique-info-flex">
          <p className="coin-symbol unique-td-p">{coin.symbol}</p>
          <p className="coin-name unique-td-p">{coin.name}</p>
        </div>
      </td>
      <td className={`unique-td-price `}>
        <div className="unique-chip-flex">
          <div
            className={`unique-price-chip ${
              coinChange < 0 ? "red-list" : "green-list"
            }`}
          >
            {coin.price_change_percentage_24h?.toFixed(2)}%
          </div>
          <div
            className={`unique-chip-icon ${
              coinChange < 0 ? "red-list" : "green-list"
            }`}
          >
            {coinChange < 0 ? (
              <HiTrendingDown size={18} />
            ) : (
              <HiTrendingUp size={18} />
            )}
          </div>
        </div>
      </td>
      <td
        className={`unique-td-current-price ${
          coinChange < 0 ? "red" : "green"
        }`}
      >
        ${coin.current_price?.toLocaleString()}
      </td>
      <td className="unique-td-totalVolume">
        {coin.total_volume?.toLocaleString()}
      </td>
      <td className="unique-td-marketCap">
        ${coin.market_cap?.toLocaleString()}
      </td>
      <td
        className={`unique-td-watchlist-icon ${
          coinChange < 0 ? "watchlist-icon-red" : ""
        }`}
      ></td>
      <div
        onClick={(e) => {
          e.stopPropagation();
          if (isCoinAdded) {
            // remove coin

            removeFromWatchlist(e, coin.id, setIsCoinAdded);
          } else {
            setIsCoinAdded(true);
            saveItemToWatchlist(e, coin.id);
          }
        }}
        className={`star-list ${coinChange < 0 ? "red-list" : "green-list"}`}
      >
        {watchlist && watchlist.includes(coin.id) ? (
          <FaStar size={15} />
        ) : (
          <BsStar size={15} />
        )}
      </div>
      <ToastContainer />
    </motion.tr>
  );
};

export default List;
