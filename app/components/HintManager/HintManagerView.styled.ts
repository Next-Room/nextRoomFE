import { Box } from "@mui/material";
import { styled } from "styled-components";

export const SummaryText = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 2px;
`;

export const StyledBox = styled(Box)<{ active?: boolean }>`
  width: 100%;
  max-height: ${(props) => (props.active ? "230px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

export const Wrapper = styled.div<{ selected?: boolean }>`
  width: 100%;
  padding: 8px;
  position: relative;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.white10};

  ${({ selected }) =>
    selected &&
    `
    border: 1px solid #B5E6D2;
    border-radius: 8px;
  `}
`;

export const InputsWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 173px;
  gap: 8px;

  .inputBox {
    width: 96px;
    height: 36px;
    background-color: #ffffff14;
    color: #fff;
    & input[type="number"]::-webkit-inner-spin-button,
    & input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    & input[type="number"] {
      -moz-appearance: textfield; /* Firefox에서 화살표를 숨기기 위한 설정 */
    }
  }

  .TextareaBox {
    width: 448px;
    height: 128px;
    background-color: #ffffff14;
    color: #fff;
    align-items: unset;
  }
`;

export const FunctionButtonsWrapper = styled.div`
  display: flex;
  padding-right: 10px;
  justify-content: end;
  align-items: end;
  gap: 8px;
`;

export const ErrorMsgWrapper = styled.div`
  position: absolute;
  color: red;
  margin: 0;
  padding: 0;
  font-size: 12px;
  text-align: right;
  left: 15px;
`;
