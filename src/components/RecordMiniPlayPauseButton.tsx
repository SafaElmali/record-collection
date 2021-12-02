import { FunctionComponent, useState, RefObject } from "react";
import styled from "styled-components";

const RecordMiniPlayPauseButton: FunctionComponent<{
  audioPlayer: RefObject<HTMLAudioElement>;
}> = ({ audioPlayer }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = (e: any) => {
    e.stopPropagation();
    if (isPlaying) audioPlayer?.current?.pause();
    else audioPlayer?.current?.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <ButtonContainer>
      {isPlaying ? (
        <PauseButton onClick={handleClick}>
          <PauseDash />
          <PauseDash />
        </PauseButton>
      ) : (
        <PlayButton onClick={handleClick} />
      )}
    </ButtonContainer>
  );
};

export default RecordMiniPlayPauseButton;

const PauseDash = styled.div`
  background-color: #fff;
  height: 20px;
  width: 4px;
`;

const Button = styled.button`
  align-items: center;
  background-color: hsla(0, 0%, 0%, 0.7);
  border-radius: 50%;
  border: 1px solid #fff;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  position: relative;
  right: 5px;
  top: -5px;
  transition: transform 0.1s ease-in-out;
  width: 50px;
  &:hover {
    transform: scale(1.1);
  }
`;

const PlayButton = styled(Button)`
  position: relative;
  &::after {
    border: 12px solid transparent;
    border-left-color: #fff;
    content: "";
    height: 0;
    left: 15px;
    margin: 0 auto;
    position: absolute;
    right: 0;
    text-align: center;
    width: 0;
  }
`;

const PauseButton = styled(Button)`
  align-items: center;
  display: flex;
  gap: 4px;
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
