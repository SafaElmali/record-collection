import { createRef, FunctionComponent, useState, RefObject } from "react";
import styled from "styled-components";
import RecordLink from "./RecordLink";
import RecordMiniPlayer from "./RecordMiniPlayer";

const Record: FunctionComponent<{ track: any }> = ({ track }) => {
  const [toggleRecord, setToggleRecord] = useState(false);
  const {
    hub: { actions, options },
  } = track;
  const audioRef: RefObject<HTMLAudioElement> = createRef();
  const trackURL = actions?.[1]?.uri;
  const appleMusicURL = options?.[0].actions?.[1]?.uri;
  const trackImage =
    track?.images?.coverarthq ||
    track?.images?.coverart ||
    track?.images?.background;

  if (!trackImage || !trackURL) return null;

  const handleToggleRecord = () => {
    setToggleRecord(!toggleRecord);
  };

  return (
    <RecordContainer onClick={handleToggleRecord}>
      <RecordCoverContainer isRecordActive={toggleRecord}>
        <RecordCover src={trackImage} />
        <StyledRecordContainer>
          <StyledRecord isRecordActive={toggleRecord}>
            <RecordMiniPlayer trackImage={trackImage} audioPlayer={audioRef} />
            <Audio ref={audioRef}>
              <AudioSource src={trackURL} type="audio/ogg" />
            </Audio>
          </StyledRecord>
        </StyledRecordContainer>
        <RecordLink appleMusicURL={appleMusicURL} toggleRecord={toggleRecord} />
      </RecordCoverContainer>
    </RecordContainer>
  );
};

export default Record;

const StyledRecordContainer = styled.div``;

const StyledRecord = styled.div<{ isRecordActive: boolean }>`
  background-color: black;
  border-radius: 50%;
  border: 5px solid #484848;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isRecordActive }) =>
    isRecordActive
      ? "translateX(150px) rotate(0deg)"
      : "translateX(0) rotate(-15deg)"};
  z-index: -1;
  width: 100%;
`;

const RecordContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 350px;
  justify-content: center;
  max-height: 350px;
  text-align: center;
  width: 350px;
`;

const RecordCoverContainer = styled.div<{ isRecordActive: boolean }>`
  position: relative;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isRecordActive }) => isRecordActive && "translateX(-50px)"};
  width: 250px;
  height: 250px;
  &:hover {
    transform: ${({ isRecordActive }) =>
      !isRecordActive && "translateX(-25px)"};
    ${StyledRecord} {
      transform: ${({ isRecordActive }) =>
        !isRecordActive && "translateX(50px) rotate(-15deg)"};
    }
  }
`;

const RecordCover = styled.img`
  filter: drop-shadow(2px 4px 10px gray);
  height: 250px;
  position: relative;
  width: 250px;
`;

const Audio = styled.audio``;

const AudioSource = styled.source``;
