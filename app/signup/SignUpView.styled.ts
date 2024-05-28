import { Box, Button, FormControlLabel } from "@mui/material";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  max-width: 520px;
  height: 60px;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export const Header = styled.button`
  width: 100%;
  display: block;
  ${"img"} {
    float: right;
    margin: 16px 14px;
    cursor: pointer;
  }
`;

export const Cont = styled.div`
  max-width: 520px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
`;

export const Grid = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  margin: 0;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 8px 0 40px;
  color: #9e9ea1;

  a {
    text-decoration: underline;
    text-underline-position: under;
    color: #9e9ea1;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    outline: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
    margin-left: 4px;
  }
`;

export const Label = styled(FormControlLabel)`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  margin-left: 0px !important;
  text-align: left;
  color: #9e9ea1;
`;

export const CodeWrap = styled.div`
  display: grid;
  max-width: 100%;
  grid-gap: 8px;
  grid-template-columns: repeat(6, 1fr);
`;

export const CodeInput = styled.input<{ error?: boolean }>`
  aspect-ratio: 53 / 65; /* 너비:높이 비율 설정 */
  border-radius: 6px;
  width: 100%; /* 그리드 간격을 고려하여 요소의 너비를 설정 */
  background-color: #1f2225;
  border: 1px solid #474547;
  font-size: 26px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: white;
  border: ${(props) =>
    props.error ? "2px solid #F2B8B5" : "1px solid  #474547"};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox  */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const ServerErrorMessage = styled.div`
  color: #f2b8b5;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  margin-top: 16px;
`;

export const ReRequest = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin: 18px auto 0;
  line-height: 20px;
  ${"p"} {
    color: #9e9ea1;
    margin-right: 4px;
    float: left;
  }
  ${"button"} {
    text-decoration: underline;
    text-underline-position: under;
    color: white;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }
`;

export const SignUpButton = styled(Button)`
  width: 100%;
  height: 58px;
  font-size: 18px !important;
  font-weight: 500 !important;
  line-height: 20px !important;
`;

export const StyledBox = styled(Box)`
  display: flex;
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
