import axios from "axios";

export const fetchNews = async () => {
  const options = {
    method: "GET",
    url: "https://crypto-news16.p.rapidapi.com/news/coindesk",
    headers: {
      "X-RapidAPI-Key": "6ed046a1ffmshe19dff1723d57bcp1707a0jsn2c526808c91a",
      "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
