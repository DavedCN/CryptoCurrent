import axios from "axios";

export const fetchCoinData = async (id) => {
  const options = {
    method: "GET",
    url: `https://api.coingecko.com/api/v3/coins/${id}`,
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
