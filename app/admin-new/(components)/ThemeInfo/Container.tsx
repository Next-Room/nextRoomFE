import React from "react";
import "../../(style)/themeInfo.modules.sass";
import ThemeInfoTitle from "./ThemeInfoTitle";
import ThemeInfoBody from "./ThemeInfoBody";

export default function ThemeInfo() {
  return (
    <div className="theme-info">
      <ThemeInfoTitle />
      <ThemeInfoBody />
    </div>
  );
}
