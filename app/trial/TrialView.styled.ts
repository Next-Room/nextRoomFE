import { styled } from "styled-components";
import { Button } from "@mui/material";

// export const Wrapper = styled.div`
//   margin: 18px 20px;
//   display: flex;
//   flex-direction: column;
// `;


export const Wrapper = styled.form`
  margin: 18px 20px;
`;
export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 364px;
  margin: 0 auto;

`;


export const MobileWrapper = styled.div`
  /* padding: 0 26px; */
`;

export const BackWrapper = styled.div``;

export const Title = styled.h1`
  font-size: 32px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 140%;
  margin: 0;
`;

export const Contect = styled.p`
  color: var(--nr-gray-01, #9898a0);
  /* Pretendard/R/16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin: 0 0 21px;
`;

export const Btn = styled(Button)`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  height: 60px;
`;
export const TextCont= styled.div`
display: flex;
flex-direction: column;
gap: 44px;
/* margin-top: 44px; */

`
