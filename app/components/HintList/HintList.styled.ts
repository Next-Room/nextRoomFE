import { Button } from "@mui/material";
import { css, keyframes, styled } from "styled-components";

export const HintListWrapper = styled.div`
  margin-top: 60px !important;
`;

export const Header = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  color: #ffffff60;
  height: 34px;
  gap: 8px;

  .smallHeader {
    min-width: 96px;
  }

  .largeHeader {
    /* width: calc(((100% - (96px * 2)) / 2) - 8px); */
    /* width: 448px; */
    flex: 1;
  }
`;

export const Empty = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 230px;
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.sm};
  background-color: #ffffff10;
  border: 0;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`;

const riseUpAnimation = keyframes`
  from {
    bottom: -100px;
  }
  to {
    bottom: 40px;
  }
`;

const downAnimation = keyframes`

  from {
    bottom: 40px;
  }
  to {
    bottom: -100px;
  }
`;

export const FloatButton = styled(Button)<{ active?: boolean }>`
  position: fixed !important;
  color: #000 !important;
  background-color: #fff !important;
  font-weight: 600 !important;
  width: 183px;
  height: 40px;
  bottom: -100px;
  left: calc((100% - 360px) / 2 + 360px);
  transform: translateX(-50%);
  font-weight: 600;
  width: 215px;

  ${(props) =>
    props.active
      ? css`
          animation: ${riseUpAnimation} 300ms forwards 300ms ease-out;
          bottom: -100px;
        `
      : css`
          animation: ${downAnimation} 300ms forwards 300ms ease-out;
          bottom: 0px;
        `}
`;
