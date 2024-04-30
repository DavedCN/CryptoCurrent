import axios from "axios";

export const fetchCoins = async () => {
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

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
