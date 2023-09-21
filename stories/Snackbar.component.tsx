import React from "react";
import {
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
} from "@mui/material";

type SnackbarBaseProps = Pick<
  MuiSnackbarProps,
  "anchorOrigin" | "autoHideDuration" | "open"
>;

export interface SnackbarProps extends SnackbarBaseProps {
  label: string;
}

export function Snackbar({
  label,
  anchorOrigin = { vertical: "bottom", horizontal: "left" },
  autoHideDuration = 3000,
  open,
  ...rest
}: SnackbarProps) {
  return (
    <MuiSnackbar
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      open={open}
      {...rest}
      message={label}
    />
  );
}
