import React from "react";
import Stack from "@mui/material/Stack";
import {
  NewTextField,
  TextFieldProps,
  NewTextFieldLabel,
} from "./NewTextField.component";

export default {
  title: "Component/NewTextField",
  component: NewTextField,
  argTypes: {
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    placeholder: { control: "text" },
  },
};

export const Playground = {
  args: {
    label: "Click me!",
  },
  render: (args: TextFieldProps) => <NewTextField {...args} />,
};
export const LabelAndInput = {
  render: (args: TextFieldProps) => (
    <Stack spacing={2} maxWidth={300}>
      <NewTextField {...args} />
    </Stack>
  ),
};

export const LabelOnly = {
  render: (args: TextFieldProps) => <NewTextFieldLabel {...args} />,
};
