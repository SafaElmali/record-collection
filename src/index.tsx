import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./styles/normalize.css";
import GlobalStyles from "./styles/GlobalStyles";
import App from "./App";

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);
