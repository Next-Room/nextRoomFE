import { useSelectedThemeValue } from "@/components/atoms/selectedTheme.atom";
import React from "react";

export default function ThemeInfoTitle() {
  const selectedTheme = useSelectedThemeValue();

  return (
    <div className="theme-info__title">
      <div className="theme-info-fit">
        <div className="title">{selectedTheme.title}</div>
        <div className="image" />
      </div>
    </div>
  );
}
