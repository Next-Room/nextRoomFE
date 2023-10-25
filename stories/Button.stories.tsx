// import React from "react";
// import { StoryFn, ComponentMeta } from "@storybook/react";
// import Stack from "@mui/material/Stack";

import React from "react";
import Stack from "@mui/material/Stack";
import { Button, ButtonProps } from "./Button.component";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export const Playground = {
  args: {
    size: "small",
    label: "Click me!",
  },
  render: (args: ButtonProps) => <Button {...args} />,
};
export const Variants = {
  render: (args: ButtonProps) => (
    <Stack spacing={2} maxWidth={300}>
      <Button variant="text" color="secondary" label="Text Button" {...args} />
      <Button variant="contained" label="Contained Button" {...args} />
      <Button variant="outlined" label="Outlined Button" {...args} />
    </Stack>
  ),
};

export const Sizes = {
  render: (args: ButtonProps) => (
    <Stack spacing={2} maxWidth={300}>
      <Button variant="contained" size="small" label="Small" {...args} />
      <Button variant="contained" size="medium" label="Medium" {...args} />
      <Button variant="contained" size="large" label="Large" {...args} />
    </Stack>
  ),
};
