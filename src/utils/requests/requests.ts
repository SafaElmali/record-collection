import axios from "axios";

const options: object = {
  method: "GET",
  url: "https://shazam.p.rapidapi.com/charts/track",
  params: { locale: "en-US", pageSize: "20", startFrom: "0" },
  headers: {
    "x-rapidapi-host": "shazam.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
  },
};

export const getTopTracks = () => {
  return axios.request(options).then((res) => res);
};
