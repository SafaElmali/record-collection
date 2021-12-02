import { FunctionComponent } from "react";
import styled from "styled-components";
import AppleMusicLogo from "../assets/appleMusic.png";

const RecordLink: FunctionComponent<{ appleMusicURL: string }> = ({
  appleMusicURL,
}) => {
  return (
    <AppleMusicLink href={appleMusicURL} target="_blank">
      <AppleMusicCover src={AppleMusicLogo} />
    </AppleMusicLink>
  );
};

export default RecordLink;

const AppleMusicCover = styled.img`
  bottom: 10px;
  filter: drop-shadow(2px 4px 6px black);
  height: auto;
  left: 10px;
  object-fit: contain;
  position: absolute;
  width: 100px;
`;

const AppleMusicLink = styled.a``;
