import React from "react";
import { Color } from "./Color.component";

export default {
  title: "Component/Color",
  component: Color,
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },

    disabled: { control: "boolean" },
  },
};

export const variants = {
  render: () => <></>,
};

export const colorSystem = {
  render: () => (
    <>
      <Color type="black">black</Color>
      <Color type="white">white</Color>
      <Color type="main">BG(main)</Color>
      <Color type="sub1">BG(sub1)</Color>
      <Color type="sub2">BG(sub2)</Color>
      <Color type="white5">white 5%</Color>
      <Color type="white8">white 8%</Color>
      <Color type="white12">white 12%</Color>
      <Color type="white20">white 20%</Color>
      <Color type="white50">white 50%</Color>
      <Color type="white70">white 70%</Color>
      <Color type="black60">Black 60%</Color>
      <Color type="sRed300">S_Red300</Color>
      <Color type="sRed400">S_Red400</Color>
      <Color type="sRed500">S_Red500</Color>
    </>
  ),
};
