import axios from "axios";

const options: object = {
  method: "GET",
  url: "https://shazam.p.rapidapi.com/charts/track",
  params: { locale: "en-US", pageSize: "20", startFrom: "0" },
  headers: {
    "x-rapidapi-host": "shazam.p.rapidapi.com",
    "x-rapidapi-key": "5800238df5mshbf93f6fcfa1821dp1d5970jsn15a7b5aba15a",
  },
};

export const getTopTracks = () => {
  return axios.request(options).then((res) => res);
};
