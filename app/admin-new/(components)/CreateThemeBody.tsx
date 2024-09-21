import React from "react";
import ThemeTextField from "../../(shared)/(ThemeTextField)/(components)/ThemeTextField";
import {
  hintCountTextFieldProps,
  nameTextFieldProps,
  timeTextFieldProps,
} from "../../(shared)/(ThemeTextField)/(consts)/createTheme";

export default function CreateThemeBody() {
  return (
    <div className="create-theme__body">
      <ThemeTextField {...nameTextFieldProps} />
      <ThemeTextField {...timeTextFieldProps} />
      <ThemeTextField {...hintCountTextFieldProps} />
    </div>
  );
}
