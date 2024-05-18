import { Box, Snackbar } from "@mui/material";
import React from "react";

interface Props {
  open: boolean;
  ment: string;
  handleClose: () => void;
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
}
export default function SnackBarView(props: Props) {
  const {
    open,
    ment,
    handleClose,
    vertical = "bottom",
    horizontal = "left",
  } = props;

  return (
    <Box sx={{ width: 344 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={ment}
        key="bottomleft"
      />
    </Box>
  );
}
