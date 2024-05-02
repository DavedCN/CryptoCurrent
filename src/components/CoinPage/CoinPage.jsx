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

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoinData(id);
      coinObject(setCoinData, data);

      const chartData = await fetchChartData(id, days);
      console.log(chartData.prices);

      if (coinData) {
        const labels = [];
        const dataa = {
          datasets: [
            {
              data: [],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
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
  }, [id]);
  return (
    <Fragment>
      <div className="grey-wrapper">
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
