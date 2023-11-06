import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonBaseProps = Pick<
  MuiButtonProps,
  "variant" | "size" | "color" | "disabled"
>;

export interface ButtonProps extends ButtonBaseProps {

  // eslint-disable-next-line react/require-default-props
  label?: string;
  // eslint-disable-next-line react/require-default-props
  backgroundColor?: string; // 새로운 prop 추가
}

export function Button({
  label,
  variant = "contained",
  size = "medium",
  color = "primary",
  disabled = false,
  backgroundColor, // 새로운 prop
}: ButtonProps) {
  return (
    <MuiButton
      variant={variant}
      size={size}
      color={color}
      style={{ backgroundColor }} // style prop을 사용하여 배경색 설정
      disabled={disabled}
    >
      {label}
    </MuiButton>
  );
}
