import React from "react";
import Stack from "@mui/material/Stack";
import { TextField, TextFieldProps } from "./TextField.component";

export default {
  title: "Example/TextField",
  component: TextField,
  argTypes: {
    disabled: { control: "boolean" },
    error : { control: "boolean" },
    placeHolder : { control: "text" },

  },
};

export const Playground = {
  args: {
    size: "small",
    label: "Click me!",
    placeHolder: "미리보기"
  },
  render: (args: TextFieldProps) => <TextField {...args} />,
};
export const Variants = {
  render: () => (
    <Stack spacing={2} maxWidth={300}>
      <TextField variant="filled" label="filled TextField" />
      <TextField variant="standard" label="standard TextField" />
      <TextField variant="outlined" label="Outlined TextField" />
    </Stack>
  ),
};