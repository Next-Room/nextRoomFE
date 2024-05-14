/* use client */
import React, { forwardRef, useEffect, useRef } from "react";
import "../style/reset.css";
import { styled } from "styled-components";

interface SupportingTextProps {
  error: boolean;
}

export interface TextFieldProps {
  label: string;
  disabled: boolean;
  error: boolean;
  placeholder: string;
  helperText: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

const Label = styled.label`
  position: absolute;
  color: #89888a;

  top: 20px;
  left: 20px;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  height: 22px;
  padding: 50px 20px 32px 20px;
  font-size: 16px;
  color: white;
  line-height: 22px;
  background-color: transparent;
`;

const Div = styled.div<SupportingTextProps>`
  display: flex;
  width: 100%;
  border: 1px solid ${({ error }) => (error ? "#f2b8b5" : "#89888a")};
  position: relative;
  background: #121212;
  border-radius: 8px;
  flex-direction: column;
  &:focus-within {
    border: 1px solid ${({ error }) => (error ? "#f2b8b5" : "white")};
  }

  &:hover {
    background-color: black;
  }

  &:disabled {
    border: #474547;
  }
  label: {
    color: ${({ error }) => (error ? "#f2b8b5" : "#89888a")};
  }

  input:focus {
    outline: none;
    &::placeholder {
      /* Placeholder의 CSS 설정 */
      color: black; /* Placeholder의 텍스트 색상 지정 */
      font-size: 14px; /* Placeholder의 글꼴 크기 지정 */
    }
  }
`;
const SupportingText = styled.p<SupportingTextProps>`
  color: ${({ error }) => (error ? "#f2b8b5" : "#89888a")};
  font-size: 12px;
  line-height: 16px;
  margin: 4px 16px;
`;

export const NewTextField = forwardRef((props: Props) => {
  const {
    error,
    label,
    disabled,
    type,
    inputProps,
    helperText,
    style,
    placeholder,
    onKeyDown,
  } = props;
  const inputRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    setTimeout(() => {
      console.log("log");
      console.log("log", inputRef);

      if (inputRef.current) {
        console.log(inputRef);

        // inputRef.current.focus();
        inputRef.current.click();
      }
    }, 1000);
  }, []);
  const checkFocus = () => {

    
  };
  return (
    <div>
      <Div error={error} style={style}>
        <Label htmlFor="textField" ref={inputRef} onFocus={checkFocus}>
          {label}
        </Label>
        <Input
          id="textField"
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...inputProps}
          onKeyDown={onKeyDown}
        />
      </Div>
      <SupportingText error={error}>{helperText}</SupportingText>
    </div>
  );
});
