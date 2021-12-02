import { FunctionComponent } from "react";
import styled from "styled-components";
import Records from "./components/Records";
import useFetchTracks from "./hooks/useFetchTracks";

const App: FunctionComponent = () => {
  const { isLoading, data } = useFetchTracks();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const { tracks } = data?.data;

  return (
    <Container>
      <Records tracks={tracks} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 80%;
  padding-top: 50px;
  margin: 0 auto;
`;
