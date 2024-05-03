import React, { useEffect, useState } from "react";
import Button from "../Common/Button/Button";
import Tab from "../Dashboard/Tabs/Tab";
import { fetchCoins } from "../../functions/fetchCoins";

function Watchlist() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (watchlist) {
      getData();
    }
  }, []);

  const getData = async () => {
    const allCoins = await fetchCoins();
    if (allCoins) {
      setCoins(allCoins?.filter((coin) => watchlist.includes(coin.id)));
    }
  };

  return (
    <div>
      {watchlist?.length > 0 ? (
        <Tab coins={coins} />
      ) : (
        <div>
          <h1 className="no-results">Sorry, No Items In Your Watchlist.</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <Button link="/dashboard" text="Dashboard" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Watchlist;
