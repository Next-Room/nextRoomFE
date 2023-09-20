import React from "react";

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color">;

export interface ButtonProps extends ButtonBaseProps {
  label: string;
}

export function Button({
  label,
  variant = "contained",
  size = "medium",
  color = "primary",
}: ButtonProps) {
  return (
    <MuiButton variant={variant} size={size} color={color}>
      {label}
    </MuiButton>
  );
}
