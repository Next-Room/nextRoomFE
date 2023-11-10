import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "disabled">;

export interface ButtonProps extends ButtonBaseProps {
  // eslint-disable-next-line react/require-default-props
  label?: string;
  // eslint-disable-next-line react/require-default-props
  backgroundColor?: string; // 새로운 prop 추가
  // eslint-disable-next-line react/no-unused-prop-types, react/require-default-props
  width?: string;
  // eslint-disable-next-line react/no-unused-prop-types, react/require-default-props
  height?: string;
}

export function Button({
  label,
  variant = "contained",
  disabled = false,
  backgroundColor = "white", // 새로운 prop
  width = "360px",
  height = "56px",
}: ButtonProps) {
  return (
    <MuiButton
      variant={variant}
      style={{ backgroundColor, width, height }} // style prop을 사용하여 배경색 설정
      disabled={disabled}
    >
      {label}
    </MuiButton>
  );
}
