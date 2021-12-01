import { FunctionComponent, useState } from "react";
import styled from "styled-components";

const RecordMiniPlayPauseButton: FunctionComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <ButtonContainer>
      {isPlaying ? (
        <PauseButton onClick={() => setIsPlaying(false)}>
          <PauseDash />
          <PauseDash />
        </PauseButton>
      ) : (
        <PlayButton onClick={() => setIsPlaying(true)}></PlayButton>
      )}
    </ButtonContainer>
  );
};

export default RecordMiniPlayPauseButton;

const PauseDash = styled.div`
  width: 2px;
  height: 15px;
  background-color: #000;
`;

const Button = styled.button`
  background-color: hsla(0, 0%, 0%, 0.7);
  border-radius: 50%;
  border: 1px solid #fff;
  cursor: pointer;
  height: 50px;
  position: relative;
  right: 5px;
  top: -5px;
  width: 50px;
`;

const PlayButton = styled(Button)``;

const PauseButton = styled(Button)`
  align-items: center;
  display: flex;
  gap: 2px;
  justify-content: center;
  text-align: center;
`;

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100px;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100px;
`;
