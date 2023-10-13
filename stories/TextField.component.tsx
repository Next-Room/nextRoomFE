import React from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

type TextFieldBaseProps = Pick<
  MuiTextFieldProps,
  "variant" | "size" | "color" | "disabled" | "error" | "placeholder"
>;

export interface TextFieldProps extends TextFieldBaseProps {
  label: string;
}

export function TextField({
  label,
  variant = "filled",
  size = "medium",
  color = "primary",
  disabled = false,
  error = false,
  placeholder = "미리보기",
}: TextFieldProps) {
  return (
    <MuiTextField
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      error={error}
      placeholder={placeholder}
    >
      {label}
    </MuiTextField>
  );
}
