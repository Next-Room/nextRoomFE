import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const MobileWrapper = styled.div`
  /* padding: 0 26px; */
`;

export const LogoWrapper = styled.div`
  padding: 8px 16px;
  position: fixed;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);

  @media (max-width: 767px) {
    padding: 23px 26px;
  }
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
export const Footer = styled.footer`
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  opacity: 0.6;
  padding: 15px 0;
`;
