import { useState, useEffect } from "react";
import { fetchCoinData } from "../../functions/coindata";
import { coinObject } from "../../functions/coinObject";
import CoinInfo from "../CoinPage/CoinInfo";
import Loader from "../Common/Loader/Loader";
import List from "../Dashboard/List/List";

const ComparePage = () => {
  const [coinData1, setCoinData1] = useState(null);
  const [coinData2, setCoinData2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetchCoinData("bitcoin");
      coinObject(setCoinData1, data1);

      const data2 = await fetchCoinData("litecoin");
      coinObject(setCoinData2, data2);
    };

    console.log(coinData1, coinData2);

    fetchData();
  }, []);

  return (
    <div>
      {coinData1 && coinData2 ? (
        <div>
          <div className="grey-wrapper">
            <List coin={coinData1} />
          </div>
          <div className="grey-wrapper">
            <List coin={coinData2} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
      <CoinInfo heading={coinData1?.name} desc={coinData1?.desc} />
      <CoinInfo heading={coinData2?.name} desc={coinData2?.desc} />
    </div>
  );
};

export default ComparePage;
