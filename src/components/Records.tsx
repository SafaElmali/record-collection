import { FunctionComponent } from "react";
import styled from "styled-components";
import Record from "./Record";

const Records: FunctionComponent<{ tracks: any }> = ({ tracks }) => {
  return (
    <RecordsContainer>
      {tracks.map((track: any) => (
        <Record key={track.id} track={track} />
      ))}
    </RecordsContainer>
  );
};

export default Records;

const RecordsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: flex-start;
  @media (max-width: 1400px) {
    gap: 4em;
  }
`;
