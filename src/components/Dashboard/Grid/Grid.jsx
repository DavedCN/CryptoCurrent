import { BsStar } from "react-icons/bs";
import { HiTrendingUp } from "react-icons/hi";
import { HiTrendingDown } from "react-icons/hi";

const Grid = ({ coin }) => {
  const coinChange = coin.price_change_percentage_24h;
  return (
    <div
      className={`grid-container ${
        coinChange < 0 ? "grid-container-red" : "grid-container-green"
      }`}
    >
      <div className="info-flex">
        <img src={coin.image} className="coin-image" alt="coin-image" />
        <div className="name-col">
          <h4 className="coin-symbol">{coin.symbol}</h4>
          <h3 className="coin-name">{coin.name}</h3>
        </div>
        <div
          className={`icon star  ${coinChange < 0 ? "icon-red" : "icon-green"}`}
        >
          <BsStar  size={15} />
        </div>
      </div>
      <div className="chip-flex">
        <div
          className={`price-chip ${coinChange < 0 ? "red-chip" : "green-chip"}`}
        >
          {coinChange.toFixed(2)}%
        </div>
        <div className={`icon  ${coinChange < 0 ? "icon-red" : "icon-green"}`}>
          {coinChange < 0 ? (
            <HiTrendingDown size={18} />
          ) : (
            <HiTrendingUp size={18} />
          )}
        </div>
      </div>
      <div className="info-container">
        <h3 className={`coin-price  ${coinChange < 0 ? "red" : "green"}`}>
          ${coin.current_price.toLocaleString()}
        </h3>
        <p className="total_volume">
          Total Volume: {coin.total_volume.toLocaleString()}
        </p>
        <p className="total_volume">
          Market Cap: {coin.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Grid;
