import { useParams } from "react-router-dom";
import { fetchCoinData } from "../../functions/coindata";
import { coinObject } from "../../functions/coinObject";
import { Fragment, useEffect, useState, useCallback } from "react";
import Loader from "../Common/Loader/Loader";
import List from "../Dashboard/List/List";
import CoinInfo from "./CoinInfo";
import LineChart from "../../LineChart/LineChart";
import { fetchChartData } from "../../functions/coinChartData";
import Footer from "../Common/Footer";

// Custom hook for fetching coin data
const useFetchCoinData = (id, days, priceType) => {
  const [coinData, setCoinData] = useState([]);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoinData(id);
      coinObject(setCoinData, data);

      const chartData = await fetchChartData(id, days);

      if (coinData) {
        const labels = [];
        const dataa = {
          datasets: [
            {
              data: [],
              borderColor: "#3a80e9",
              backgroundColor: "#3a80e9",
              fill: true,
              yAxisID: "y",
            },
          ],
        };

        chartData[priceType].forEach(([timestamp, dataPoint]) => {
          labels.push(new Date(timestamp).toLocaleDateString());
          dataa.datasets[0].data.push(dataPoint);
        });

        setChartData({ ...dataa, labels });
      }
    };

    fetchData();
  }, [id, days, priceType]);

  return { coinData, chartData };
};

const CoinPage = () => {
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const { id } = useParams();

  const { coinData, chartData } = useFetchCoinData(id, days, priceType);

  const handleDaysChange = useCallback((e) => {
    setDays(parseInt(e.target.value));
  }, []);

  const handlePriceType = useCallback((type) => {
    setPriceType(type);
  }, []);

  return (
    <Fragment>
      <div className="grey-wrapper">
        {" "}
        {coinData?.length !== 0 ? <List coin={coinData} /> : <Loader />}
      </div>

      {chartData && (
        <div className="grey-wrapper chart">
          <div className="options">
            <div className="dropDown">
              Prices Change in :{" "}
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
                Market
              </button>
              <button onClick={() => handlePriceType("total_volumes")}>
                Volume
              </button>
            </div>
          </div>

          <LineChart chartData={chartData} />
        </div>
      )}
      <CoinInfo heading={coinData?.name} desc={coinData?.desc} />
      <Footer />
    </Fragment>
  );
};

export default CoinPage;
