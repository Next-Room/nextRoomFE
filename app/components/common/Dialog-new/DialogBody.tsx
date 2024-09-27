import ThemeTextField from "@/(shared)/(ThemeTextField)/Container";
import {
  hintCountTextFieldProps,
  nameTextFieldProps,
  timeTextFieldProps,
} from "../../../(shared)/(ThemeTextField)/createTheme";
import React from "react";

export default function DialogBody() {
  return (
    <div className="theme-info-modal__content">
      <ThemeTextField {...nameTextFieldProps} />

      <div className="info-grid">
        <ThemeTextField {...hintCountTextFieldProps} />
        <ThemeTextField {...timeTextFieldProps} />
      </div>
    </div>
  );
}
