import { styled, keyframes } from "styled-components";

const fadeIn = keyframes` 
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const LottieWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 78px 0 22px;
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 520px;
  height: 60px;

  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export const Cont = styled.div`
  max-width: 520px;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeIn} 1s;
  animation-delay: 1.5s;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin: 0;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 8px 0 24px;
  color: #9e9ea1;
`;

export const SuccessButton = styled.button`
  height: 58px;
  padding: 0 56px;
  border-radius: 75px;
  background-color: white;
  color: black;
`;
