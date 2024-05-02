import axios from "axios";

const fetchData = async (id, days) => {
  const options = {
    method: "GET",
    url: `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
    params: {
      vs_currency: "usd",
      days: `${days}`,
      interval: "daily",
      precision: "2",
    },
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "	CG-Fc4VXvg45AvhnXrgcjXgiRfs",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
