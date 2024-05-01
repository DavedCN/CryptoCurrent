import { useParams } from "react-router-dom";
import { fetchCoinData } from "../../functions/coindata";
import { coinObject } from "../../functions/coinObject";
import { useEffect, useState } from "react";
import Loader from "../Common/Loader/Loader";
import List from "../Dashboard/List/List";

const CoinPage = () => {
  const [coinData, setCoinData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoinData(id);
      coinObject(setCoinData, data);
    };

    fetchData();
  }, [id]);

  return (
    <div>{coinData?.length != 0 ? <List coin={coinData} /> : <Loader />}</div>
  );
};

export default CoinPage;
