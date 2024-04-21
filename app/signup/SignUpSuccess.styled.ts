import Link from "next/link";
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
  padding: 78px 0 22px;
`;

export const Wrapper = styled.div`
  max-width: 520px;
  height: 100vh;
  margin: auto;
`;

export const Header = styled(Link)`
  width: 100%;
  position: relative;
  display: block;

  ${"img"} {
    position: absolute;
    right: 0;
    margin: 16px 14px;
    cursor: pointer;
  }
`;

export const Cont = styled.div`
  max-width: 520px;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeIn} 1s;
  animation-delay: 1.5s;
  position: relative;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin: 0;
`;

export const PlayCont = styled(Link)`
  max-width: 520px;
  width: 100%;
  height: 97px;
  border-radius: 18px;
  background: #141414;
  text-align: left;
  padding: 24px 20px 29px;
  margin: 0 24px;
  position: fixed;
  bottom: 40px;

  ${"img"} {
    position: absolute;
    top: 37px;
    right: 14px;
  }
`;

export const PlayTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.10000000149011612px;
  color: white;
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

  ${"a"} {
    color: black;
  }
`;
