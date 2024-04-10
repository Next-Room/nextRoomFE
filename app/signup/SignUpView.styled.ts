import { Box, Button } from "@mui/material";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  max-width: 520px;

  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export const Header = styled.div`
  height: 60px;
  width: 100%;
  ${"img"} {
    float: right;

    padding: 16px 14px;
  }
`;

export const Cont = styled.div`
  max-width: 520px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 8px 0 40px;
  color: #9e9ea1;
`;

export const CodeInput = styled.input`
  width: 54px;
  height: 66px;
  padding: 23px 19px 23px 18px;
  border-radius: 6px;

  background-color: #1f2225;
  border: 1px solid #474547;
  font-size: 26px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: white;
`;

export const LoginButtonWrapper = styled.div`
  margin-top: 20px;
`;

export const ServerErrorMessage = styled.div`
  color: #f2b8b5;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  margin-bottom: 12px;
`;

export const LoginButton = styled(Button)`
  width: 100%;
  height: 58px;
`;

export const StyledBox = styled(Box)`
  display: flex;
  min-width: 360px;
  margin: 62px auto;
`;

export const Contect = styled.div`
  color: #ffffff70;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  text-align: center;

  a:not(selector) {
    color: #ffffff70;
    text-decoration: none;
    outline: none;
  }
`;
