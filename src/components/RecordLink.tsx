import { FunctionComponent } from "react";
import styled, { css, keyframes } from "styled-components";
import AppleMusicLogo from "../assets/appleMusic.png";

const RecordLink: FunctionComponent<{
  appleMusicURL: string;
  toggleRecord: boolean;
}> = ({ appleMusicURL, toggleRecord }) => {
  return (
    <RecordLinkContainer isRecordActive={toggleRecord}>
      <AppleMusicLink href={appleMusicURL} target="_blank">
        <AppleMusicCover src={AppleMusicLogo} />
      </AppleMusicLink>
    </RecordLinkContainer>
  );
};

export default RecordLink;

const RecordLinkContainer = styled.div<{ isRecordActive: boolean }>`
  left: 10px;
  position: absolute;
  transition: transform 0.2s ease-in-out;
  animation: ${({ isRecordActive }) =>
    isRecordActive
      ? css`
          ${fadeIn} 0.3s ease-in-out forwards;
        `
      : css`
          ${fadeOut} 0.3s ease-in-out forwards
        `};
  &:hover {
    transform: scale(1.1);
  }
`;

const AppleMusicCover = styled.img`
  filter: drop-shadow(2px 4px 6px black);
  height: auto;
  object-fit: contain;
  width: 100px;
`;

const AppleMusicLink = styled.a``;

const fadeIn = keyframes`
  from {
    bottom:0px;
    opacity: 0;
  }
  to {
    bottom:10px;
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    bottom:10px;
    opacity: 1;
  }
  to {
    bottom:0px;
    opacity: 0;
  }
`;
