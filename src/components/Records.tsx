import { FunctionComponent } from "react";
import styled from "styled-components";
import Record from "./Record";

const Records: FunctionComponent<{ tracks: any }> = ({ tracks }) => {
  return (
    <RecordsContainer>
      {tracks.map((track: any, index: number) => (
        <Record key={index} track={track} />
      ))}
    </RecordsContainer>
  );
};

export default Records;

const RecordsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  row-gap: 0em;
  justify-content: flex-start;
  @media (max-width: 1400px) {
    gap: 4em;
    row-gap: 0em;
  }
`;
