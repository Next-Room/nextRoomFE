import { styled } from "styled-components";
import { Box } from "@mui/material";
import { MAIN_GRID_WIDTH } from "@/consts/styles/common";

export const Wrapper = styled(Box)`
  display: flex;
  min-width: 1280px;
  height: 100vh;
  /* overflow-y: hidden;
  overflow-x: scroll; */
  //TODO
  //ul과 main을 감싸는 div 에 overflow:scroll hidden 제거 
  // main 안에 컨텐츠영역을 감싸는 div만들고 min-width (패딩값을뺀 값 calc()로 )1280부터 줄어드는 사이즈 정하기! 
  // 왜 로컬에서 안되냐 ㅡㅡ 
`;

export const Cont = styled(Box)`
  flex-grow: 1;
  height: 100%;
  /* min-width: calc(${MAIN_GRID_WIDTH} + 2px); */
  margin: 0;
  padding: 0 16px 80px 80px;
  overflow-y: auto;
  /* min-width: 840px; */
  overflow-x: scroll;
`;
export const TopNav = styled.div`
  display: flex;
  justify-content: end;
  height: 68px;
  padding: 18px 48px;
  div {
    background-color: #fff;
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
`;

export const Title = styled.div`
  font-size: 4rem;
`;

export const Body = styled.div`
  width: ${MAIN_GRID_WIDTH};
  height: 100%;
  margin: 0 auto;
  overflow-y: auto;
`;
