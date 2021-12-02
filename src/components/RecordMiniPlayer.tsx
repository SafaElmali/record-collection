import { FunctionComponent, RefObject } from "react";
import styled from "styled-components";
import RecordMiniPlayPauseButton from "./RecordMiniPlayPauseButton";

const RecordMiniPlayer: FunctionComponent<{
  trackImage: string;
  audioPlayer: RefObject<HTMLAudioElement>;
}> = ({ trackImage, audioPlayer }) => {
  return (
    <StyledRecordMiniPlayer>
      <MiniPlayerCoverContainer>
        <MiniPlayerCover src={trackImage} />
        <RecordMiniPlayPauseButton audioPlayer={audioPlayer} />
      </MiniPlayerCoverContainer>
    </StyledRecordMiniPlayer>
  );
};

export default RecordMiniPlayer;

const MiniPlayerCoverContainer = styled.div``;

const StyledRecordMiniPlayer = styled.div`
  background-color: black;
  border-radius: 50%;
  border: 5px solid #484848;
  height: 100px;
  left: 0;
  margin: 0 auto;
  overflow: hidden;
  position: absolute;
  right: 0;
  text-align: center;
  width: 100px;
`;

const MiniPlayerCover = styled.img`
  width: 100%;
  height: 100%;
`;
