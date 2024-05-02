import { useParams } from "react-router-dom";
import { fetchCoinData } from "../../functions/coindata";
import { coinObject } from "../../functions/coinObject";
import { Fragment, useEffect, useState } from "react";
import Loader from "../Common/Loader/Loader";
import List from "../Dashboard/List/List";
import CoinInfo from "./CoinInfo";
import LineChart from "../../LineChart/LineChart";

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

      setTimeout(() => {
        const labels = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ];

        const dataa = {
          labels,
          datasets: [
            {
              data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
              yAxisID: "y",
            },
          ],
        };

        setChartData(dataa);
        console.log(chartData);
      }, 5000); // 10000 milliseconds = 10 seconds
    };

    fetchData(); // Call fetchData here to execute the fetch operation
  }, [id]);

  return (
    <Fragment>
      <div className="grey-wrapper">
        {coinData?.length !== 0 ? <List coin={coinData} /> : <Loader />}
      </div>
      {chartData && (
        <div className="grey-wrapper">
          <LineChart chartData={chartData}  multiAxis={multiAxis}/>
        </div>
      )}

      <CoinInfo heading={coinData?.name} desc={coinData?.desc} />
    </Fragment>
  );
};

export default CoinPage;
