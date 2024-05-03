import { useState, useEffect } from "react";
import { fetchCoinData } from "../../functions/coindata";
import { coinObject } from "../../functions/coinObject";
import { fetchChartData } from "../../functions/coinChartData";
import CoinInfo from "../CoinPage/CoinInfo";
import Loader from "../Common/Loader/Loader";
import List from "../Dashboard/List/List";
import LineChartMulti from "../../LineChart/LineChartMulti";
import CustomDropDown from "../Common/DropDown/CustomDropDown";
import DropDown from "../Common/DropDown/DropDown";
import { handlePriceType } from "../../functions/handlepriceType";
import Footer from "../Common/Footer";

const ComparePage = () => {
  const [coinData1, setCoinData1] = useState(null);
  const [coinData2, setCoinData2] = useState(null);
  const [coinID1, setCoinID1] = useState("bitcoin");
  const [coinID2, setCoinID2] = useState("ethereum");
  const [priceType, setPriceType] = useState("prices");
  const [days, setDays] = useState(30);

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetchCoinData(coinID1);
      coinObject(setCoinData1, data1);

      const data2 = await fetchCoinData(coinID2);
      coinObject(setCoinData2, data2);

      const chartData1 = await fetchChartData(coinID1, days);
      const chartData2 = await fetchChartData(coinID2, days);

      if (chartData1 && chartData2) {
        const labels = [];

        const chdata1 = [];
        const chdata2 = [];
        chartData1[priceType]?.forEach(([timestamp, dataPoint]) => {
          labels.push(new Date(timestamp).toLocaleDateString());
          chdata1.push(dataPoint);
        });

        console.log(chartData1.prices);

        chartData2[priceType]?.forEach(([timestamp, dataPoint]) => {
          chdata2.push(dataPoint);
        });

        setData({
          labels,
          datasets: [
            {
              label: data1.name,
              data: chdata1,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
              yAxisID: "y",
            },
            {
              label: data2.name,
              data: chdata2,
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
              yAxisID: "y1",
            },
          ],
        });
      }
    };

    fetchData();
  }, [days, priceType, data, coinID1, coinID2]);

  return (
    <div>
      {coinData1 && coinData2 ? (
        <div>
          <div className="grey-wrapper customdropcontain">
            <div className="customdrop">
              Crypto 1{" "}
              <CustomDropDown setCoinID={setCoinID1} value={"Bitcoin"} />
            </div>
            <div className="customdrop">
              Crypto 2{" "}
              <CustomDropDown setCoinID={setCoinID2} value={"Ethereum"} />
            </div>
            <div className="customdrop">
              <DropDown days={days} setDays={setDays} />
            </div>
          </div>

          <div className="grey-wrapper">
            <List coin={coinData1} />
          </div>
          <div className="grey-wrapper">
            <List coin={coinData2} />
          </div>
          <div className="grey-wrapper">
            <div className="priceType">
              <button className="priceTypeMulti" onClick={() => handlePriceType("prices", setPriceType)}>
                Prices
              </button>
              <button className="priceTypeMulti"
                onClick={() => handlePriceType("market_caps", setPriceType)}
              >
                Market
              </button>
              <button className="priceTypeMulti"
                onClick={() => handlePriceType("total_volumes", setPriceType)}
              >
                Volume
              </button>
            </div>
            {data && <LineChartMulti chartData={data} />}
          </div>

          <CoinInfo heading={coinData1?.name} desc={coinData1?.desc} />
          <CoinInfo heading={coinData2?.name} desc={coinData2?.desc} />
        </div>
        
      ) : (
        <Loader />
      )}
      <Footer />
    </div>
  );
};

export default ComparePage;
