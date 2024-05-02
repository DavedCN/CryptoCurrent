import { useParams } from "react-router-dom";
import { fetchCoinData } from "../../functions/coindata";
import { coinObject } from "../../functions/coinObject";
import { Fragment, useEffect, useState } from "react";
import Loader from "../Common/Loader/Loader";
import List from "../Dashboard/List/List";
import CoinInfo from "./CoinInfo";
import LineChart from "../../LineChart/LineChart";
import { fetchChartData } from "../../functions/coinChartData";

const CoinPage = () => {
  const [coinData, setCoinData] = useState([]);
  const [chartData, setChartData] = useState("");
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [multiAxis, setMultiAxis] = useState(false);
  const handleDaysChange = (e) => {
    setDays(parseInt(e.target.value));
  };

  const handlePriceType = (type) => {
    setPriceType(type);
  };

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoinData(id);
      coinObject(setCoinData, data);

      const chartData = await fetchChartData(id, days);
      console.log(chartData);

      if (coinData) {
        const labels = [];
        const dataa = {
          datasets: [
            {
              data: [],
              borderColor: "#3a80e9",
              backgroundColor: "#3a80e9",
              fill:true,
              yAxisID: "y",
            },
          ],
        };

        chartData.prices.forEach(([timestamp, price]) => {
          labels.push(new Date(timestamp).toLocaleDateString());
          dataa.datasets[0].data.push(price);
        });

        setChartData({ ...dataa, labels });
      }
    };

    fetchData();
  }, [id, days, priceType]);

  console.log(chartData);
  return (
    <Fragment>
      <div className="options">
        <div className="dropDown">
          <select value={days} onChange={handleDaysChange}>
            <option value={30}>30 days</option>
            <option value={90}>90 days</option>
            <option value={180}>180 days</option>
            <option value={365}>365 days</option>
          </select>
        </div>
        <div className="priceType">
          <button onClick={() => handlePriceType("prices")}>Prices</button>
          <button onClick={() => handlePriceType("market_caps")}>
            Market Cap
          </button>
          <button onClick={() => handlePriceType("total_volumes")}>
            Volume
          </button>
        </div>
      </div>

      <div className="grey-wrapper">
        {" "}
        {coinData?.length !== 0 ? <List coin={coinData} /> : <Loader />}
      </div>

      {chartData && (
        <div className="grey-wrapper">
          <LineChart chartData={chartData} multiAxis={multiAxis} />
        </div>
      )}
      <CoinInfo heading={coinData?.name} desc={coinData?.desc} />
    </Fragment>
  );
};

export default CoinPage;
