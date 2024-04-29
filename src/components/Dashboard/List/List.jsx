import { BsStar } from "react-icons/bs";
import { HiTrendingUp } from "react-icons/hi";
import { HiTrendingDown } from "react-icons/hi";

const List = ({ coin }) => {
  const coinChange = coin.price_change_percentage_24h;
  return (
    <div className="list-container">
      <div className="list-info-flex">
        <img src={coin.image} className="coin-image" alt="coin-image" />
        <div className="name-col">
          <h4 className="coin-symbol">{coin.symbol}</h4>
          <h3 className="coin-name">{coin.name}</h3>
        </div>
        <div className=" list-chip-flex ">
          <div
            className={`price-chip ${
              coinChange < 0 ? "red-chip" : "green-chip"
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div
            className={`icon  ${coinChange < 0 ? "icon-red" : "icon-green"}`}
          >
            {coinChange < 0 ? (
              <HiTrendingDown size={18} />
            ) : (
              <HiTrendingUp size={18} />
            )}
          </div>

          <div className="flex-info-container">
            <h3 className={`coin-price  ${coinChange < 0 ? "red" : "green"}`}>
              ${coin.current_price.toLocaleString()}
            </h3>
          </div>
          <p className="">{coin.total_volume.toLocaleString()}</p>
          <p className="">{coin.market_cap.toLocaleString()}</p>
        </div>

        <div
          className={`icon star  ${coinChange < 0 ? "icon-red" : "icon-green"}`}
        >
          <BsStar size={15} />
        </div>
      </div>
    </div>
  );
};

export default List;
