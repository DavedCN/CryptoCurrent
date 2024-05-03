import { useParams } from "react-router-dom";
import { fetchCoinData } from "../../functions/coindata";
import { coinObject } from "../../functions/coinObject";
import { Fragment, useEffect, useState, useCallback } from "react";
import Loader from "../Common/Loader/Loader";
import List from "../Dashboard/List/List";
import CoinInfo from "./CoinInfo";
import LineChart from "../../LineChart/LineChart";
import { fetchChartData } from "../../functions/coinChartData";
import DropDown from "../Common/DropDown/DropDown";
import { handlePriceType } from "../../functions/handlepriceType";
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
            },
          ],
        };

        chartData[priceType]?.forEach(([timestamp, dataPoint]) => {
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
              <DropDown days={days} setDays={setDays} className={"dropdown"} />
            </div>
            <div className="priceType">
              <button onClick={() => handlePriceType("prices", setPriceType)}>
                Prices
              </button>
              <button
                onClick={() => handlePriceType("market_caps", setPriceType)}
              >
                Market
              </button>
              <button
                onClick={() => handlePriceType("total_volumes", setPriceType)}
              >
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
