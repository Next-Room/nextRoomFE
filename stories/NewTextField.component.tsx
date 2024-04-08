import React from "react";
import "../app/style/reset.css";
import styled from "styled-components";

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

const Label = styled.label`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 12px;
  line-height: 16px;
`;

const LabelOnly = styled.label`
  position: absolute;
  margin: 30px 22px;
  font-size: 16px;
  line-height: 22px;
`;

const Input = styled.input`
  height: 18px;
  margin: 40px 20px 20px 20px;
  font-size: 16px;
  color: white;
  line-height: 22px;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const Div = styled.div<SupportingTextProps>`
  display: flex;
  /* border: 1px solid #474547; */
  border: 1px solid ${({ error }) => (error ? "#f2b8b5" : "#89888a")};

  width: 368px;
  position: relative;
  background: #121212;
  border-radius: 8px;
  gap: 4px;
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
  label {
    color: ${({ error }) => (error ? "#f2b8b5" : "#89888a")};
  }
`;
const SupportingText = styled.p<SupportingTextProps>`
  color: ${({ error }) => (error ? "#f2b8b5" : "#89888a")};
  font-size: 12px;
  line-height: 16px;
  margin: 4px 16px;
`;

export function NewTextField({
  label = "제목",
  disabled = false,
  error = false,
  placeholder = "미리보기",
  helperText = "Supporting text",
}: TextFieldProps) {
  return (
    <div>
      <Div error={error}>
        <Label htmlFor="textField">{label}</Label>
        <Input id="textField" disabled={disabled} placeholder={placeholder} />
      </Div>
      <SupportingText error={error}>{helperText}</SupportingText>
    </div>
  );
}

export function NewTextFieldLabel({
  label = "제목",
  disabled = false,
  error = false,
  placeholder = "",
  helperText = "Supporting text",
}: TextFieldProps) {
  return (
    <div>
      <Div error={error}>
        <LabelOnly htmlFor="textField">{label}</LabelOnly>
        <Input id="textField" disabled={disabled} placeholder={placeholder} />
      </Div>
      <SupportingText error={error}>{helperText}</SupportingText>
    </div>
  );
}
