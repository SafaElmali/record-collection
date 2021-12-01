import { useQuery } from "react-query";
import { getTopTracks } from "../utils/requests/requests";

const useFetchTracks = () => {
  const result = useQuery("tracks", getTopTracks);

  return result;
};

export default useFetchTracks;
