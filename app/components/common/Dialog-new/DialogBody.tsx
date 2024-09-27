import ThemeTextField from "@/(shared)/(ThemeTextField)/Container";
import React from "react";
import { useSelectedThemeValue } from "@/components/atoms/selectedTheme.atom";
import {
  hintCountTextFieldProps,
  nameTextFieldProps,
  timeTextFieldProps,
} from "@/admin-new/(components)/CreateTheme/createTheme";

export default function DialogBody() {
  const selectedTheme = useSelectedThemeValue();
  return (
    <div className="theme-info-modal__content">
      <ThemeTextField {...nameTextFieldProps} content={selectedTheme.title} />

      <div className="info-grid">
        <ThemeTextField {...hintCountTextFieldProps} />
        <ThemeTextField {...timeTextFieldProps} />
      </div>
    </div>
  );
}
