// import React from "react";
// import { StoryFn, ComponentMeta } from "@storybook/react";
// import Stack from "@mui/material/Stack";

import { Button, ButtonProps } from "./Button.component";
import React from "react";
import Stack from "@mui/material/Stack";

export default {
  title: "Example/Button",
  component: Button,
};

export const Playground = {
  args: {
    size: "small",
    label: "Click me!",
  },
  render: (args: ButtonProps) => <Button {...args} />,
};
export const Variants = {
  render: () => (
    <Stack spacing={2} maxWidth={300}>
      <Button variant="text" label="Text Button" />
      <Button variant="contained" label="Contained Button" />
      <Button variant="outlined" label="Outlined Button" />
    </Stack>
  ),
};

export const Colors = {
  render: () => (
    <Stack spacing={2} maxWidth={300}>
      <Button variant="contained" label="Primary" />
      <Button variant="contained" color="secondary" label="Secondary" />
      <Button variant="contained" color="success" label="Success" />
      <Button variant="contained" color="error" label="Error" />
    </Stack>
  ),
};

export const Sizes = {
  render: () => (
    <Stack spacing={2} maxWidth={300}>
      <Button variant="contained" size="small" label="Small" />
      <Button variant="contained" size="medium" label="Medium" />
      <Button variant="contained" size="large" label="Large" />
    </Stack>
  ),
};

export const Heel = {
  render: () => (
    <Stack spacing={2} maxWidth={300}>
      <Button variant="contained" size="small" label="Small" />
      <Button variant="contained" size="medium" label="Medium" />
      <Button variant="contained" size="large" label="Large" />
    </Stack>
  ),
};
