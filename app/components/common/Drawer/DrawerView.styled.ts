import { styled } from "styled-components";
import { List, ListItem, ListItemText } from "@mui/material";

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 20px 0;
  color: #21005d;
`;

export const ShopName = styled(ListItemText)`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 400;
  margin: 18px !important;
  color: rgba(255, 255, 255, 0.7);
`;

export const ShopNameListItem = styled(ListItem)`
  margin-bottom: 14px;
`;

export const Wrapper = styled.div`
  width: 360px;
  height: 100%;
  min-height: 100vh;
  padding: 12px;
  box-sizing: border-box;
  border-right: #ffffff20 solid 1px;
  background-image: url("/images/drawer/background.png");
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export const ListWrap = styled(List)`
  width: 360px;
  min-width: 360px;
  height: 100%;
  padding: 12px;
  box-sizing: border-box;
  border-right: #ffffff20 solid 1px;
  background-image: url("/images/drawer/background.png");
  background-repeat: no-repeat;
  background-position: center bottom;
  overflow-y: auto;
  position: fixed;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  width: 336px;
  height: 56px;
`;

export const Theme = styled(ListItemText)`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 18px;
`;

export const CodeWrap = styled.div`
  width: 316px;
  height: 96px;
  padding: 14px;
  margin: 8px auto;
  border-radius: 8px;
  background-color: #030303;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #9e9ea1;

  ${"span"} {
    display: block;
    margin: 4px 0 12px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
  }
`;

export const GuideList = styled(ListItem)`
  display: flex;
  justify-content: center;
  padding: 5px 0;

  & > a {
    color: white;
    text-decoration: none;
  }
`;
export const BottomFixedWrap = styled.div``;
export const ListWrap1 = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar-track {
    background: transparent; /* 트랙 배경 투명 처리 */
  }

  &::-webkit-scrollbar {
    width: 4px;
    height: 8px;
    border-radius: 6px;
    border: 1px solid #6e6b651c;
    background: transparent; /* 트랙 배경 투명 처리 */
  }
  &::-webkit-scrollbar-thumb {
    background: #d6d6d6;
    border-radius: 6px;
  }
  height: calc(100vh - 270px);
`;
