import React from "react";
import { Snackbar as MuiSnackbar, SnackbarProps as MuiSnackbarProps } from "@mui/material";

type SnackbarBaseProps = Pick<MuiSnackbarProps, "anchorOrigin" | "autoHideDuration" | "open">;

export interface SnackbarProps extends SnackbarBaseProps {
  label: string;
}

export const Snackbar = ({ label, ...rest }: SnackbarProps) => (
  <MuiSnackbar {...rest} message={label}></MuiSnackbar>
);

Snackbar.defaultProps = {
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
  autoHideDuration: 3000, // 이 속성은 필요에 따라 조정할 수 있습니다.
};
