import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const MobileWrapper = styled.div`
  /* padding: 0 26px; */
`;

export const LogoWrapper = styled.div`
  max-width: 980px;
  width: 100%;
  padding: 17px 16px;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
  justify-content: space-between;
  @media (max-width: 767px) {
    padding: 23px 26px;
  }
  left: 50%;
transform: translateX(-50%);
`;

export const Logo = styled.div`
  width: 184px;
  height: 26px;
  background-image: url("/images/svg/logo.svg");
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 767px) {
    width: 114px;
    height: 16px;
    background-image: url("/images/svg/logo_mobile.svg");
  }
`;

export const BtnWrap = styled.div``;
export const LoginButton = styled.button`
  width: 67px;
  height: 36px;
  margin-right: 8px;
  background-color: black;
  color: white;

  font-size: 14px;
  font-weight: 700;
  line-height: 16.71px;
`;
export const FreeButton = styled.button`
  width: 118px;
  height: 36px;
  color: black;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.71px;
  border-radius: 30px;
  background-color: white;
`;

export const Footer = styled.footer`
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  opacity: 0.6;
  padding: 15px 0;
`;
