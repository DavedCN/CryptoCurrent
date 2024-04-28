import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Tab from "./Tabs/Tab.tsx";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.coingecko.com/api/v3/coins/markets",
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: "100",
        locale: "en",
        precision: "2",
      },
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "	CG-Fc4VXvg45AvhnXrgcjXgiRfs",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setCoins(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Fragment>
      <Tab coins={coins} />
    </Fragment>
  );
};

export default Dashboard;
